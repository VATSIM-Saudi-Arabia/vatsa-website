"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

const fixed = ["/map"];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isFixed = fixed.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (!isFixed) window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFixed]);

    return (
        <header
            className={cn(
                "w-full transition ease-in-out z-10",
                { "bg-background": isFixed || scrolled },
                { fixed: !isFixed }
            )}
        >
            <Navbar />
        </header>
    );
}
