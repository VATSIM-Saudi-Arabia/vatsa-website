export type EventResponse = {
    data: Array<{
        id: number;
        type: string;
        name: string;
        link: string;
        organisers: Array<{
            region?: string;
            division?: string;
            organised_by_vatsim: boolean;
        }>;
        airports: Array<{
            icao: string;
        }>;
        routes: Array<{
            departure: string;
            arrival: string;
            route: string;
        }>;
        start_time: string;
        end_time: string;
        short_description: string;
        description: string;
        banner: string;
    }>;
};
