import type { SiteConfig } from "@/types/config";
import { Approval } from "@/types";

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
    },

    // Policy files
    policies: [{ name: "GDPR Policy", link: "/assets/files/policies/GDPR.pdf" }],

    // Staff list
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
            name: "Bilal Baig",
            email: "tech@vatsimsa.com",
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

    // ATC roster approvals
    approvals: [
        // {
        //     cid: 1514902,
        //     positions: {
        //         del: Approval.Approved,
        //         gnd: Approval.ApprovedT1,
        //         twr: Approval.ApprovedT2,
        //         app: Approval.ApprovedT1T2,
        //     },
        // },
        // {
        //     cid: 1543984,
        //     positions: {
        //         del: Approval.Training,
        //         gnd: Approval.TrainingT1,
        //         twr: Approval.TrainingT1,
        //     },
        // },
    ],
};

export default siteConfig;
