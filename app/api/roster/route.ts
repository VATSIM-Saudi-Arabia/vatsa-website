import { fetchSaudiRoster, type RosterController } from "@/lib/hq";

export const dynamic = "force-dynamic";

const stripNames = (arr: RosterController[]) =>
    arr.map((c) => ({ cid: c.cid, rating: c.rating, positions: c.positions, ...(c.solo ? { solo: c.solo } : {}) }));

export async function GET() {
    const roster = await fetchSaudiRoster();
    if (roster.error && !roster.home.length) {
        const status = roster.error.includes("not configured") ? 503 : 502;
        return Response.json({ error: roster.error, home: [], visiting: [] }, { status });
    }
    return Response.json({
        vacc: roster.vacc,
        home: stripNames(roster.home),
        visiting: stripNames(roster.visiting),
    });
}
