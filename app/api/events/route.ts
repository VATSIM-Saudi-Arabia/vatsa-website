import { fetchSaudiEvents } from "@/lib/hq";

export const dynamic = "force-dynamic";

export async function GET() {
    const events = await fetchSaudiEvents();
    return Response.json({ count: events.length, events });
}
