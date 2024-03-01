import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import {
    Plane,
    Radar,
    GraduationCap,
    Map,
    PlaneTakeoff,
    NotebookText,
    TowerControl,
    BaggageClaim,
    Users,
    MessageCircleHeart,
    Building2,
    Shield,
    Files,
    Info,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="container w-full">
            <Separator />

            <div className="hidden sm:flex flex-wrap justify-around py-10">
                <div className="flex flex-col gap-2 items-center">
                    <Image src="/assets/logo.png" alt="Logo" width={80} height={80} />
                    <p>© VATSIM Saudi Arabia 2024</p>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2">
                        <Plane size={15} />
                        Pilots
                    </span>

                    <Separator />

                    <nav className="flex flex-col">
                        <Link
                            href="/pilots/training"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <GraduationCap size={15} />
                            Pilot Training
                        </Link>

                        <a
                            href="https://chartfox.org/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <Map size={15} />
                            Charts
                        </a>

                        <a
                            href="https://my.vatsim.net/virtual-airlines"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <PlaneTakeoff size={15} />
                            Virtual Airlines
                        </a>

                        {/* <Link
                            href="/pilots/training"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <NotebookText size={15} />
                            Airport Briefing
                        </Link> */}
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2">
                        <Radar size={15} />
                        Controllers
                    </span>

                    <Separator />

                    <nav className="flex flex-col">
                        <Link href="/atc/join" className="flex items-center gap-2 hover:opacity-50">
                            <TowerControl size={15} />
                            Become ATC
                        </Link>

                        {/* <Link
                            href="/pilots/training"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <BaggageClaim size={15} />
                            Visit / Transfer
                        </Link>

                        <Link
                            href="/pilots/training"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <Users size={15} />
                            ATC Roster
                        </Link>

                        <Link
                            href="/pilots/training"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <MessageCircleHeart size={15} />
                            Feedback
                        </Link> */}
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2">
                        <Building2 size={15} />
                        vACC
                    </span>

                    <Separator />

                    <nav className="flex flex-col">
                        <Link
                            href="/vacc/staff"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <Shield size={15} />
                            Staff
                        </Link>

                        <Link
                            href="/vacc/policies"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <Files size={15} />
                            Policies
                        </Link>

                        <Link
                            href="/vacc/about-us"
                            className="flex items-center gap-2 hover:opacity-50"
                        >
                            <Info size={15} />
                            About Us
                        </Link>
                    </nav>
                </div>
            </div>

            <h2 className="py-4 text-center">
                made by{" "}
                <a
                    href="http://bil.al"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline hover:opacity-50"
                >
                    bil.al
                </a>{" "}
                :)
            </h2>
        </footer>
    );
}
