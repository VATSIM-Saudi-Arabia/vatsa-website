import type { NavItem } from "./nav";

export type SiteConfig = {
    title: string;
    description: string;
    subheadings: string[];
    navigation: NavItem[];
};
