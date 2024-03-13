import type { Staff, RosterMember, Position, Approval } from ".";

export type SiteConfig = {
    title: string;
    description: string;
    subheadings: string[];
    links: {
        discord: {
            mena: string;
            saudi: string;
        };
        pilot_training: {
            pilot: string;
            instructor: string;
        };
    };
    policies: {
        name: string;
        link: string;
    }[];
    staff: Staff[];
};

export type ATCConfig = {
    visitors: Omit<RosterMember, "rating">[];
    approvals: {
        cid: number;
        positions: { [key in Position]?: Approval };
    }[];
    inactive: number[];
};
