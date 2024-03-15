import type { SiteConfig } from "@/types/config";

const siteConfig: SiteConfig = {
    // Site information
    title: "VATSIM Saudi Arabia",
    description: "Saudi Arabian VATSIM vACC.",

    // Hero subheadings
    subheadings: [
        "Watching the skies over the vast deserts of the Kingdom of Saudi Arabia.",
        "Experience the thrill of managing Saudi Arabian airspace with VATSIM Saudi Arabia.",
        "Begin your journey as an air traffic controller in VATSIM Saudi Arabia today.",
        "We are the largest airspace in the Middle East Region.",
        "We are VATSIM Saudi Arabia.",
    ],

    // Social links
    links: {
        discord: {
            mena: "https://discord.com/invite/Hvxm5Ky",
            saudi: "https://discord.com/invite/p9yn5rXjU2",
        },
        pilot_training: {
            pilot: "https://forum.vatsim.net/t/vacancy-flight-instructor-saudi-arabian-vacc/5057",
            instructor: "https://forum.vatsim.net/t/vacancy-flight-instructor-saudi-arabian-vacc/5057",
        },
    },

    // Policy files
    policies: [
        {
            name: "01/2023 - GDPR Policy",
            link: "https://cdn.vatsimsa.com/files/gdpr.pdf",
        },
        {
            name: "01/2024 - Code of Conduct Policy",
            link: "https://cdn.vatsimsa.com/files/SAU_POL%20_COC_01-2024%20.pdf",
        },
    ],

    // Staff list
    staff: [
        {
            cid: 1543984,
            code: "ACCSA1",
            title: "Director",
            name: "Ismail Hassan",
            email: "director@vatsimsa.com",
        },
        {
            cid: 0,
            code: "ACCSA2",
            title: "Deputy Director",
            name: "Vacant - Reserved",
            email: "N/A",
        },
        {
            cid: 0,
            code: "ACCSA3",
            title: "ATS Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            cid: 0,
            code: "ACCSA31",
            title: "Deputy ATS Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            cid: 1404713,
            code: "ACCSA32",
            title: "Operations Director",
            name: "Dallon Pereira ",
            email: "operations@vatimsa.com",
        },
        {
            cid: 1323685,
            code: "ACCSA4",
            title: "Events & Marketing Director",
            name: "Ali Muhammed",
            email: "events@vatsimsa.com",
        },
        {
            cid: 0,
            code: "ACCSA41",
            title: "Deputy Events and Marketing Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            cid: 1663421,
            code: "ACCSA5",
            title: "Human Resources Director",
            name: "Justin Saunders",
            email: "hr@vatsimsa.com",
        },
        {
            cid: 0,
            code: "ACCSA51",
            title: "Deputy Human Resources Director",
            name: "Vacant - Open",
            email: "N/A",
        },
        {
            cid: 1514902,
            code: "ACCSA6",
            title: "Technical Director",
            name: "Bilal Baig",
            email: "tech@vatsimsa.com",
        },
        {
            cid: 1614633,
            code: "ACCSA7",
            title: "Pilot Training Director",
            name: "Nasser",
            email: "ptd@vatsimsa.com",
        },
        {
            cid: 1744576,
            code: "ACCSA71",
            title: "Deputy Pilot Training Director",
            name: "Thomas Osman",
            email: "ptd@vatsimsa.com",
        },
    ],
};

export default siteConfig;
