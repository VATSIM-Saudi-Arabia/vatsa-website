export type EventResponse = {
    data: {
        id: number;
        type: string;
        name: string;
        link: string;
        organisers: {
            region?: string;
            division?: string;
            organised_by_vatsim: boolean;
        }[];
        airports: {
            icao: string;
        }[];
        routes: {
            departure: string;
            arrival: string;
            route: string;
        }[];
        start_time: string;
        end_time: string;
        short_description: string;
        description: string;
        banner: string;
    }[];
};

export type MembersResponse = {
    items: {
        id: number;
        name_first: string;
        name_last: string;
        email: string;
        countrystate: string;
        country: string;
        rating: number;
        pilotrating: number;
        militaryrating: number;
        susp_date: number;
        reg_date: number;
        region_id: number;
        division_id: number;
        subdivision_id: number;
        lastratingchange: string;
    }[];
    count: number;
};
