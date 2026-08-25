import { fetchSaudiStats } from "@/lib/hq";

export const dynamic = "force-dynamic";

export async function GET() {
    const stats = await fetchSaudiStats();
    if (!stats) return Response.json({ error: "stats unavailable" }, { status: 502 });
    return Response.json(stats);
}
