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
    links: {
        discord: {
            mena: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            saudi: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
    },
    policies: [{ name: "GDPR Policy", link: "/assets/files/policies/GDPR.pdf" }],
    staff: [
        {
            code: "ACCSA1",
            title: "Director",
            name: "Ismail Hassan",
            email: "director@vatsimsa.com",
        },
        {
            code: "ACCSA2",
            title: "Deputy Director",
            name: "Vacant - Reserved",
            email: "N/A",
        },
        {
            code: "ACCSA3",
            title: "ATS Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            code: "ACCSA31",
            title: "Deputy ATS Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            code: "ACCSA32",
            title: "Operations Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            code: "ACCSA4",
            title: "Events & Marketing Director",
            name: "Ali Muhammed",
            email: "events@vatsimsa.com",
        },
        {
            code: "ACCSA41",
            title: "Deputy Events and Marketing Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            code: "ACCSA5",
            title: "Human Resources Director",
            name: "Justin Saunders",
            email: "hr@vatsimsa.com",
        },
        {
            code: "ACCSA51",
            title: "Deputy Human Resources Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            code: "ACCSA6",
            title: "Technical Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            code: "ACCSA7",
            title: "Pilot Training Director",
            name: "Nasser",
            email: "ptd@vatsimsa.com",
        },
        {
            code: "ACCSA71",
            title: "Deputy Pilot Training Director",
            name: "Thomas Osman",
            email: "ptd@vatsimsa.com",
        },
    ],
};

export default siteConfig;
