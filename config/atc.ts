import type { ATCConfig } from "@/types/config";
// import { Approval } from "@/types";

const atcConfig: ATCConfig = {
    visitors: [
        {
            cid: 1516924,
            first_name: "Emir",
            last_name: "Dhil-Maanli",
            rating_id: 8,
        },
        {
            cid: 1120988,
            first_name: "Fatih Mutlu",
            last_name: "Timurcioglu",
            rating_id: 11,
        },
        {
            cid: 1503241,
            first_name: "Rashid",
            last_name: "Raikhy",
            rating_id: 10,
        },
        {
            cid: 1442675,
            first_name: "Tran",
            last_name: "Gia Huy",
            rating_id: 4,
        },
        {
            cid: 1601155,
            first_name: "Rahul",
            last_name: "Chakraborty",
            rating_id: 11,
        },
        {
            cid: 1281279,
            first_name: "Parham",
            last_name: "Fooladvand",
            rating_id: 5,
        },
        {
            cid: 1612975,
            first_name: "Enrico",
            last_name: "Nicholas",
            rating_id: 4,
        },
        {
            cid: 1495440,
            first_name: "Tshepo",
            last_name: "Lekata",
            rating_id: 4,
        },
        {
            cid: 1496933,
            first_name: "Rayan",
            last_name: "Javed",
            rating_id: 3,
        },
        {
            cid: 1542212,
            first_name: "Riviru",
            last_name: "Gunasinghe",
            rating_id: 3,
        },
        {
            cid: 1434781,
            first_name: "Samuel",
            last_name: "Hepworth",
            rating_id: 4,
        },
        {
            cid: 1424752,
            first_name: "Muhammad",
            last_name: "Abdullah",
            rating_id: 5,
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

    // Inactive atc members
    inactive: [
        // 1514902
    ],
};

export default atcConfig;
