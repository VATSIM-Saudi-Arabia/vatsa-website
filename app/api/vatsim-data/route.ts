import { VIEW } from "@/components/map/mapGeo";

export const dynamic = "force-dynamic";

type VatsimPilot = {
    callsign?: string;
    latitude?: number;
    longitude?: number;
    heading?: number;
    groundspeed?: number;
    altitude?: number;
};

export async function GET() {
    try {
        const res = await fetch("https://data.vatsim.net/v3/vatsim-data.json", {
            headers: { Accept: "application/json" },
            next: { revalidate: 20 },
        });
        if (!res.ok) return Response.json({ aircraft: [] });

        const data = await res.json();
        const m = 1.5;
        const aircraft = ((data.pilots as VatsimPilot[]) || [])
            .filter(
                (p) =>
                    typeof p.latitude === "number" &&
                    typeof p.longitude === "number" &&
                    p.latitude >= VIEW.latMin - m &&
                    p.latitude <= VIEW.latMax + m &&
                    p.longitude >= VIEW.lonMin - m &&
                    p.longitude <= VIEW.lonMax + m,
            )
            .map((p) => ({
                callsign: p.callsign,
                lat: p.latitude,
                lon: p.longitude,
                hdg: p.heading,
                gs: p.groundspeed,
                alt: p.altitude,
            }));

        return Response.json({ aircraft, updated: data.general?.update_timestamp ?? null });
    } catch {
        return Response.json({ aircraft: [] });
    }
}
