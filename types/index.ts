export type Event = {
    link: string;
    title: string;
    date: string;
    type: string;
    image_url: string;
};

export type Staff = {
    code: string;
    title: string;
    name: string;
    email: string;
};

export type Roster = {
    first_name: string;
    last_name: string;
    rating: {
        short: string;
        long: string;
        color: string;
    };
}[];
