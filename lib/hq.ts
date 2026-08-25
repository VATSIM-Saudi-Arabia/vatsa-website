export const HQ_BASE = (process.env.HQ_API_BASE || "https://api.vatsim.me/v1").replace(/\/$/, "");
export const HQ_VACC = (process.env.HQ_VACC || "SAU").toUpperCase();
export const HQ_VACC_NAME = process.env.HQ_VACC_NAME || "Saudi Arabia vACC";
export const HQ_SITE = (process.env.HQ_SITE_BASE || "https://hq.vatsim.me").replace(/\/$/, "");
export const SAUDI_PREFIXES = ["OE"];

const UA = "vatsimsa.com HQ proxy (+https://vatsimsa.com)";

export function hqKey(): string {
    return (process.env.HQ_API_KEY || "").trim();
}

function authHeaders(): Record<string, string> {
    return { Authorization: `Bearer ${hqKey()}`, Accept: "application/json", "User-Agent": UA };
}

const isSaudiIcao = (s: unknown) => SAUDI_PREFIXES.some((p) => String(s || "").trim().toUpperCase().startsWith(p));

export type RosterController = {
    cid: string;
    name: string;
    rating: string;
    positions: string[];
    solo?: string[];
};
export type RosterResult = {
    vacc: string;
    home: RosterController[];
    visiting: RosterController[];
    error?: string;
};

export async function fetchSaudiRoster(): Promise<RosterResult> {
    const key = hqKey();
    if (!key) return { vacc: HQ_VACC, home: [], visiting: [], error: "HQ_API_KEY not configured" };

    const base = `${HQ_BASE}/vaccs/${HQ_VACC}`;
    try {
        const [rosterRes, solosRes] = await Promise.all([
            fetch(`${base}/roster`, { headers: authHeaders(), next: { revalidate: 300 } }),
            fetch(`${base}/solos`, { headers: authHeaders(), next: { revalidate: 300 } }).catch(() => null),
        ]);
        if (!rosterRes.ok) return { vacc: HQ_VACC, home: [], visiting: [], error: `roster ${rosterRes.status}` };

        const roster = await rosterRes.json();
        const solos = solosRes && solosRes.ok ? await solosRes.json().catch(() => null) : null;

        if (solos) {
            const byCid: Record<string, string[]> = {};
            for (const s of solos.solos || []) {
                const cid = String(s.cid || "").trim();
                if (!cid) continue;
                const pos = String(s.position || "").split("_").pop() || "Solo";
                (byCid[cid] ||= []).push(pos);
            }
            const applySolo = (arr: RosterController[]) =>
                Array.isArray(arr) ? arr.map((c) => (byCid[String(c.cid)] ? { ...c, solo: byCid[String(c.cid)] } : c)) : arr;
            roster.home = applySolo(roster.home);
            roster.visiting = applySolo(roster.visiting);
        }

        return { vacc: HQ_VACC, home: roster.home || [], visiting: roster.visiting || [] };
    } catch {
        return { vacc: HQ_VACC, home: [], visiting: [], error: "failed to reach HQ roster API" };
    }
}


export type HqEvent = {
    id: number;
    title: string;
    startIso: string | null;
    endIso: string | null;
    imageUrl: string | null;
    atcPositions: string[];
    departure: string;
    arrival: string;
    link: string | null;
};

const upper = (x: unknown) => String(x || "").trim().toUpperCase();

function normalizeMenaEvent(e: any): HqEvent {
    const airports = (Array.isArray(e.airports) ? e.airports : []).map((a: any) => upper(a && a.icao)).filter(Boolean);
    const route = (Array.isArray(e.routes) ? e.routes : [])[0] || {};
    const routeDep = upper(route.departure);
    const routeArr = upper(route.arrival);
    const all = Array.from(new Set([...airports, routeDep, routeArr])).filter(Boolean);
    let departure = routeDep || airports[0] || "";
    let arrival = routeArr || airports.find((a: string) => a !== departure) || airports[0] || "";
    const saudi = all.find(isSaudiIcao);
    if (saudi && !isSaudiIcao(departure) && !isSaudiIcao(arrival)) departure = saudi;
    return {
        id: e.id,
        title: e.name || "",
        startIso: e.start_time || null,
        endIso: e.end_time || null,
        imageUrl: e.banner || e.image || null,
        atcPositions: [],
        departure,
        arrival,
        link: e.link || null,
    };
}

const isSaudiEvent = (e: HqEvent) => [e.departure, e.arrival, ...(e.atcPositions || [])].some(isSaudiIcao);

async function fetchFallbackEvents(): Promise<HqEvent[]> {
    try {
        const r = await fetch("https://my.vatsim.net/api/v2/events/view/division/MENA", {
            headers: { Accept: "application/json", "User-Agent": UA },
            next: { revalidate: 300 },
        });
        if (!r.ok) return [];
        const j = await r.json().catch(() => null);
        const list = j && Array.isArray(j.data) ? j.data : [];
        const now = Date.now();
        return list.map(normalizeMenaEvent).filter((e: HqEvent) => {
            const end = e.endIso ? Date.parse(e.endIso) : e.startIso ? Date.parse(e.startIso) : NaN;
            return !Number.isFinite(end) || end >= now;
        });
    } catch {
        return [];
    }
}

export async function fetchSaudiEvents(): Promise<HqEvent[]> {
    let events: HqEvent[] = [];
    const key = hqKey();
    if (key) {
        try {
            const r = await fetch(`${HQ_BASE}/events?upcoming=true&limit=100`, {
                headers: authHeaders(),
                next: { revalidate: 300 },
            });
            if (r.ok) {
                const d = await r.json().catch(() => null);
                if (d && Array.isArray(d.events))
                    events = (d.events as HqEvent[]).map((e) => ({ ...e, link: `${HQ_SITE}/events/${e.id}` }));
            }
        } catch {
        
        }
    }
    if (!events.length) events = await fetchFallbackEvents();
    return events
        .filter(isSaudiEvent)
        .sort((a, b) => new Date(a.startIso || 0).getTime() - new Date(b.startIso || 0).getTime());
}

export type StatsResult = {
    month: string | null;
    year: number | null;
    name: string;
    totalHours: number;
    facilities: { name: string; hours: number }[];
    rank: number | null;
    totalVaccs: number | null;
};

const FACILITY_LABELS: Record<number, string> = { 1: "DEL", 2: "GND", 3: "TWR", 4: "APP", 5: "CTR" };
const canonVaccName = (input: unknown) =>
    String(input || "")
        .toLowerCase()
        .replace(/\bvacc\b/g, " ")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();

type VaccAgg = { name: string; code: string; totalHours: number; facilities: Record<string, number> };

function addFacility(f: Record<string, number>, label: string | undefined, hours: number) {
    if (!label) return;
    f[label] = (f[label] || 0) + (Number(hours) || 0);
}

function normalizeVaccs(data: any): { month: string | null; year: number | null; all: VaccAgg[] } {
    let month: string | null = null;
    let year: number | null = null;
    const all: VaccAgg[] = [];
    if (!data || typeof data !== "object") return { month, year, all };

    const months = Array.isArray(data.months) ? data.months : [];
    if (months.length) {
        const m = months[0] || {};
        month = m.month || null;
        year = m.year || (month ? Number(String(month).slice(0, 4)) : null);
        for (const v of Array.isArray(m.vaccs) ? m.vaccs : []) {
            const facilities: Record<string, number> = {};
            for (const f of Array.isArray(v.facilities) ? v.facilities : []) addFacility(facilities, upper(f?.name), f?.hours);
            all.push({ name: v.name || v.code || "", code: upper(v.code), totalHours: Number(v.totalHours) || 0, facilities });
        }
        return { month, year, all };
    }

    month = data.month || null;
    year = month ? Number(String(month).slice(0, 4)) : null;
    const byVacc = new Map<string, VaccAgg>();
    for (const row of Array.isArray(data.stats) ? data.stats : []) {
        const name = String(row.vacc || "").trim();
        if (!name) continue;
        if (!byVacc.has(name)) byVacc.set(name, { name, code: "", totalHours: 0, facilities: {} });
        const entry = byVacc.get(name)!;
        const hours = Number(row.totalHours) || 0;
        entry.totalHours += hours;
        addFacility(entry.facilities, FACILITY_LABELS[Number(row.facility)], hours);
    }
    return { month, year, all: Array.from(byVacc.values()) };
}

async function fetchNormalizedStats(url: string, headers: Record<string, string>) {
    try {
        const r = await fetch(url, { headers, next: { revalidate: 900 } });
        if (!r.ok) return null;
        const data = await r.json().catch(() => null);
        return normalizeVaccs(data);
    } catch {
        return null;
    }
}

function currentMonthUtc(): string {
    const d = new Date();
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

export async function fetchSaudiStats(): Promise<StatsResult | null> {
    let norm = null;
    const key = hqKey();
    if (key) norm = await fetchNormalizedStats(`${HQ_BASE}/stats/monthly?limit=1`, authHeaders());

    if (!norm || !norm.all.length) {
        const fbBase = process.env.HQ_STATS_FALLBACK_URL || "https://hq.vatsim.me/api/stats/monthly";
        const fb = await fetchNormalizedStats(`${fbBase}?month=${currentMonthUtc()}`, { Accept: "application/json", "User-Agent": UA });
        if (fb && fb.all.length) norm = fb;
    }
    if (!norm) return null;

    const { month, year, all } = norm;
    const mine =
        all.find((v) => v.code && v.code === HQ_VACC) ||
        all.find((v) => canonVaccName(v.name) === canonVaccName(HQ_VACC_NAME)) ||
        null;

    let rank: number | null = null;
    if (mine) {
        const sorted = [...all].sort((a, b) => b.totalHours - a.totalHours);
        const idx = sorted.indexOf(mine);
        rank = idx >= 0 ? idx + 1 : null;
    }

    return {
        month,
        year,
        name: mine?.name || HQ_VACC_NAME,
        totalHours: mine?.totalHours ?? 0,
        facilities: mine ? Object.entries(mine.facilities).map(([name, hours]) => ({ name, hours })) : [],
        rank,
        totalVaccs: all.length || null,
    };
}
