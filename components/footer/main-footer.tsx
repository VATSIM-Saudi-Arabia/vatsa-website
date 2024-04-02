import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import {
    Plane,
    Radar,
    GraduationCap,
    Map,
    PlaneTakeoff,
    TowerControl,
    Users,
    Building2,
    Shield,
    Files,
    Info,
    Landmark,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-background">
            <div className="container hidden sm:block">
                <Separator />

                <div className="flex flex-wrap justify-around py-10">
                    <div className="flex flex-col gap-2 items-center">
                        <Image src="/assets/logo.png" alt="Logo" width={80} height={80} />
                        <p>Copyright © 2024 VATSIM Saudi Arabia</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="flex items-center gap-2">
                            <Plane size={15} /> Pilots
                        </span>

                        <Separator />

                        <nav className="flex flex-col">
                            <Link href="/pilots/training" className="flex items-center gap-2 hover:opacity-50">
                                <GraduationCap size={15} /> Pilot Training
                            </Link>

                            <a
                                href="https://chartfox.org/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-2 hover:opacity-50"
                            >
                                <Map size={15} /> Charts
                            </a>

                            <a
                                href="https://my.vatsim.net/virtual-airlines"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-2 hover:opacity-50"
                            >
                                <PlaneTakeoff size={15} /> Virtual Airlines
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
                            <Radar size={15} /> Controllers
                        </span>

                        <Separator />

                        <nav className="flex flex-col">
                            <Link href="/atc/join" className="flex items-center gap-2 hover:opacity-50">
                                <TowerControl size={15} /> Become ATC
                            </Link>

                            <Link href="/atc/roster" className="flex items-center gap-2 hover:opacity-50">
                                <Users size={15} /> ATC Roster
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
                            <MessageCircleHeart size={15} />
                            Feedback
                        </Link> */}
                        </nav>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="flex items-center gap-2">
                            <Building2 size={15} /> vACC
                        </span>

                        <Separator />

                        <nav className="flex flex-col">
                            <a
                                href="https://hayya.vatsim.me/SAU"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-2 hover:opacity-50"
                            >
                                <Landmark size={15} /> HQ
                            </a>

                            <Link href="/vacc/staff" className="flex items-center gap-2 hover:opacity-50">
                                <Shield size={15} /> Staff
                            </Link>

                            <Link href="/vacc/policies" className="flex items-center gap-2 hover:opacity-50">
                                <Files size={15} /> Policies
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
