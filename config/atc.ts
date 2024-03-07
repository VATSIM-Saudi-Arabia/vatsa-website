import type { ATCConfig } from "@/types/config";
// import { Approval } from "@/types";

const atcConfig: ATCConfig = {
    visitors: [
        // {
        //     cid: 1514902,
        //     first_name: "Bilal",
        //     last_name: "Baig",
        //     rating_id: 3,
        // },
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

    // Inactive atc members
    inactive: [
        // 1514902
    ],
};

export default atcConfig;
