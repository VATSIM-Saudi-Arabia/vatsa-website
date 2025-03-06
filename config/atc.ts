import type { ATCConfig } from "@/types/config";
import { Rating } from "@/types/api";
import { Approval } from "@/types";

const atcConfig: ATCConfig = {
    visitors: [
        {
            cid: 1516924,
            first_name: "Emir",
            last_name: "Dhil-Maanli",
            rating_id: Rating.I1,
        },
        {
            cid: 1597249,
            first_name: "Salman",
            last_name: "Sikandar",
            rating_id: Rating.C1,
        },
        {
            cid: 1120988,
            first_name: "Fatih Mutlu",
            last_name: "Timurcioglu",
            rating_id: Rating.SUP,
        },
        {
            cid: 1503241,
            first_name: "Rashid",
            last_name: "Raikhy",
            rating_id: Rating.I3,
        },
        {
            cid: 1601155,
            first_name: "Rahul",
            last_name: "Chakraborty",
            rating_id: Rating.SUP,
        },
        {
            cid: 1612975,
            first_name: "Enrico",
            last_name: "Nicholas",
            rating_id: Rating.S3,
        },
        {
            cid: 1495440,
            first_name: "Tshepo",
            last_name: "Lekata",
            rating_id: Rating.C1,
        },
        {
            cid: 1496933,
            first_name: "Rayan",
            last_name: "Javed",
            rating_id: Rating.S2,
        },
        {
            cid: 1434781,
            first_name: "Samuel",
            last_name: "Hepworth",
            rating_id: Rating.S3,
        },
        {
            cid: 1424752,
            first_name: "Muhammad",
            last_name: "Abdullah",
            rating_id: Rating.C1,
        },
        {
            cid: 1648952,
            first_name: "Abdulrahman",
            last_name: "Alamoodi",
            rating_id: Rating.S3,
        },
        {
            cid: 1427130,
            first_name: "Taha",
            last_name: "Khan",
            rating_id: Rating.I3,
        },
        {
            cid: 1662347,
            first_name: "Tarek",
            last_name: "Najib",
            rating_id: Rating.S2,
        },
        {
            cid: 1702604,
            first_name: "Mustaeen",
            last_name: "Hossain",
            rating_id: Rating.S2,
        },
        {
            cid: 1702382,
            first_name: "Majid",
            last_name: "Bin Theniah",
            rating_id: Rating.S2,
        },
        {
            cid: 1797446,
            first_name: "Dhiaeddine",
            last_name: "Keskes",
            rating_id: Rating.S2,
        },
        {
            cid: 1505454,
            first_name: "Mehdi",
            last_name: "Azzouzi",
            rating_id: Rating.S2,
        },
        {
            cid: 1707224,
            first_name: "Ian",
            last_name: "Bijl",
            rating_id: Rating.S2,
        },
    ],

    // ATC roster approvals
    approvals: [
        {
            cid: 1597249,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1707224,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1702604,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved
            },
        },
        {
            cid: 1344871,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1621439,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1581461,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1665565,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Training,
            },
        },
        {
            cid: 1610046,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1465729,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1409617,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1404713,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1543984,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1600052,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1262584,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1328668,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1495940,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1522418,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1506586,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1327111,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1516924,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1612975,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1120988,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
            },
        },
        {
            cid: 1402301,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1424752,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1340014,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1281279,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1601155,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
            },
        },
        {
            cid: 1503241,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
                ctr: Approval.Approved,
            },
        },
        {
            cid: 1590527,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1496933,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1542212,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1434781,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1523442,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1442675,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Training,
            },
        },
        {
            cid: 1495440,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
            },
        },
        {
            cid: 1663421,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Training,
            },
        },
        {
            cid: 1744576,
            positions: {
                del: Approval.Training,
                gnd: Approval.Training,
            },
        },
        {
            cid: 1477790,
            positions: {
                del: Approval.Training,
                gnd: Approval.Training,
            },
        },
        {
            cid: 1323685,
            positions: {
                del: Approval.Training,
                gnd: Approval.Training,
            },
        },
        {
            cid: 1593704,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1648952,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
            },
        },
        {
            cid: 1427130,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
                app: Approval.Approved,
            },
        },
        {
            cid: 1662347,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1574371,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1670345,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1205178,
            positions: {
                del: Approval.Training,
                gnd: Approval.Training,
                twr: Approval.Training,
                app: Approval.Training,    
            },
        },
        {
            cid: 1752760,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Training,
            },
        },
        {
            cid: 1488168,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
            },
        },
        {
            cid: 1797446,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1505454,
            positions: {
                del: Approval.Approved,
                gnd: Approval.Approved,
                twr: Approval.Approved,
            },
        },
        {
            cid: 1722615,
            positions: {
                del: Approval.Training,
                gnd: Approval.Training,
            },
        },
    ],

    // Inactive atc members
    inactive: [1366935, 1612975, 1744576, 1564275, 1327111, 1526156, 1495940, 1492904, 1259821, 1514902, 1262584, 1328668, 1465729, 1493532, 1581461, 1610046, 1621439 ],
};

export default atcConfig;
