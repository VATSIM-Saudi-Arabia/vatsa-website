"use client";

import { useState } from "react";

export default function Map() {
    const [airports, setAirports] = useState(["OEJN", "OERK", "OEDF", "OEMA"]);

    const getUrl = () => {
        const params = new URLSearchParams();
        params.set("preset", "sa");
        params.set("airports", airports.join(","));

        return `https://vatsim-radar.com/?${params.toString()}`;
    };

    return (
        <div className="text-center">
            <iframe src={getUrl()} className="h-[85vh] sm:h-[65vh] w-full" />
        </div>
    );
}
