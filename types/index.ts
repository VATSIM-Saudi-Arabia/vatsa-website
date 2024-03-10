export type Event = {
    link: string;
    title: string;
    date: string;
    type: string;
    image_url: string;
};

export type Staff = {
    cid: number;
    code: string;
    title: string;
    name: string;
    email: string;
};

export type RosterMember = {
    cid: number;
    first_name: string;
    last_name: string;
    rating_id: number;
    rating: {
        short: string;
        long: string;
        color: string;
    };
};

export enum Position {
    DEL = "del",
    GND = "gnd",
    TWR = "twr",
    APP = "app",
    CTR = "ctr",
}

export enum Approval {
    Approved,
    ApprovedT1,
    ApprovedT2,
    ApprovedT1T2,
    Training,
    TrainingT1,
    TrainingT2,
    Solo,
}
