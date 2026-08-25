"use client";

import { useEffect, useState } from "react";
import SectorMap, { type Aircraft } from "./SectorMap";

export default function RadarHero() {
    const [aircraft, setAircraft] = useState<Aircraft[]>([]);
    const [viewName, setViewName] = useState("JEDDAH FIR · OEJD");

    useEffect(() => {
        let alive = true;
        const load = async () => {
            try {
                const r = await fetch("/api/vatsim-data");
                if (!r.ok) return;
                const d = await r.json();
                if (alive && Array.isArray(d.aircraft)) setAircraft(d.aircraft);
            } catch {
            }
        };
        load();
        const iv = setInterval(load, 30000);
        return () => {
            alive = false;
            clearInterval(iv);
        };
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#04120a]">
            <SectorMap aircraft={aircraft} onViewChange={setViewName} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
            <div className="pointer-events-none absolute bottom-3 left-0 right-0 text-center font-mono text-[11px] tracking-[0.3em] text-vacc-green/80 transition-opacity">
                {viewName} · LIVE TRAFFIC{aircraft.length ? ` · ${aircraft.length} AIRCRAFT` : ""}
            </div>
        </div>
    );
}
