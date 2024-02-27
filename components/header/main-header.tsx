"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import MainNav from "./main-nav";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn("fixed w-full transition ease-in-out z-10", {
                "bg-background": scrolled,
            })}
        >
            <MainNav />
        </header>
    );
}
