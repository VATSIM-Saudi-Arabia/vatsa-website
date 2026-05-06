import type { SiteConfig } from "@/types/config";

const siteConfig: SiteConfig = {
    // Site information
    title: "Saudi Arabian vACC",
    description: "Saudi Arabian vACC.",

    // Hero subheadings
    subheadings: [
        "Watching the skies over the vast deserts of the Kingdom of Saudi Arabia.",
        "Experience the thrill of managing Saudi Arabian airspace with VATSIM Saudi Arabia.",
        "Begin your journey as an air traffic controller in VATSIM Saudi Arabia today.",
        "We are the largest airspace in the Middle East Region.",
        "We are the Saudi Arabian vACC.",
    ],

    // Social links
    links: {
        discord: {
            mena: "community.vatsim.net",
            saudi: "community.vatsim.net",
        },
        pilot_training: {
            pilot: "https://forum.vatsim.net/t/vacancy-flight-instructor-saudi-arabian-vacc/5057",
            instructor: "https://forum.vatsim.net/t/vacancy-flight-instructor-saudi-arabian-vacc/5057",
        },
    },

    // Policy files
    policies: [
        {
            name: "01/2024 - ATC Training Policy",
            link: "https://cdn.vatsimsa.com/files/SAU_POL%20_ATP_01-2024.pdf",
        },
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
            cid: 1670345,
            code: "SAUOPS1",
            title: "Operations Team Lead",
            name: "Muhammed Sinada",
            email: "muhammed.sinada@vatsimsa.com",
        },
        {
            cid: 1574371,
            code: "SAUOPS",
            title: "Operations Team Member",
            name: "Shayan Saeed",
            email: "operations@vatsimsa.com",
        },
        {
            cid: 1855454,
            code: "ACCSA41",
            title: "Deputy Events and Marketing Director",
            name: "William Farren",
            email: "william.farren@vatsimsa.com",
        },
        {
            cid: 1779782,
            code: "SAUEVT",
            title: "Events Team Member",
            name: "Ahmad Ghandoora",
            email: "events@vatsimsa.com",
        },
        {
            cid: 1752760,
            code: "ACCSA5",
            title: "Membership Director",
            name: "Ali Reza",
            email: "ali.reza@vatsimsa.com",
        },
        {
            cid: 1514902,
            code: "SAUTECH",
            title: "Tech Team Member",
            name: "Bilal Baig",
            email: "tech@vatsimsa.com",
        },
        {
            cid: 1614633,
            code: "ACCSA7",
            title: "Pilot Training Director",
            name: "Nasser Al-Osaimi",
            email: "nasser.a@vatsimsa.com",
        },
        {
            cid: 1366935,
            code: "ACCSA72",
            title: "Chief Flight Instructor",
            name: "Ahmed Al-Ghamdi",
            email: "ahmed.alghamdi@vatsimsa.com",
        },
    ],
};

export default siteConfig;
