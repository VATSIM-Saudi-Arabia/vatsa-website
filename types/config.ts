import type { Staff } from ".";

export type SiteConfig = {
    title: string;
    description: string;
    subheadings: string[];
    links: {
        discord: {
            mena: string;
            saudi: string;
        };
    };
    policies: {
        name: string;
        link: string;
    }[];
    staff: Staff[];
};
