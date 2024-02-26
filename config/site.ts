import type { SiteConfig } from "@/types/config";

const siteConfig: SiteConfig = {
    title: "VATSIM Saudi Arabia",
    description: "Saudi Arabian VATSIM vACC.",
    subheadings: [
        "Watching the skies over the vast deserts of the Kingdom of Saudi Arabia.",
        "Experience the thrill of managing Saudi Arabian airspace with VATSIM Saudi Arabia.",
        "Begin your journey as an air traffic controller in VATSIM Saudi Arabia today.",
        "We are the largest airspace in the Middle East Region.",
        "We are VATSIM Saudi Arabia.",
    ],
    navigation: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Events",
            href: "/#events",
        },
        {
            title: "Pilots",
            options: [{ title: "Main", href: "/pilots" }],
        },
    ],
    links: {
        discord: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
};

export default siteConfig;
