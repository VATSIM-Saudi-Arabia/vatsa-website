import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
    Menu,
    ChevronDown,
    Home,
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
    Navigation,
    Building2,
    Shield,
    Files,
    Info,
} from "lucide-react";

export default function MainNav() {
    return (
        <div className="container flex items-center justify-between h-28">
            <Link href="/">
                <Image src="/assets/logo.png" alt="Logo" width={80} height={80} priority />
            </Link>

            <div className="hidden sm:flex items-center gap-2">
                <Link
                    href="/"
                    className={cn(buttonVariants({ variant: "link" }), "flex items-center gap-2")}
                >
                    <Home size={15} />
                    Home
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="link" className="flex items-center gap-2">
                            <Plane size={15} />
                            Pilots
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                            <Link href="/pilots/training" className="flex items-center gap-2">
                                <GraduationCap size={15} />
                                Pilot Training
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <a
                                href="https://chartfox.org/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-2"
                            >
                                <Map size={15} />
                                Charts
                            </a>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <a
                                href="https://my.vatsim.net/virtual-airlines"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center gap-2"
                            >
                                <PlaneTakeoff size={15} />
                                Virtual Airlines
                            </a>
                        </DropdownMenuItem>

                        {/* <DropdownMenuItem asChild>
                            <Link href="/pilots/training" className="flex items-center gap-2">
                                <NotebookText size={15} />
                                Airport Briefing
                            </Link>
                        </DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="link" className="flex items-center gap-2">
                            <Radar size={15} />
                            Controllers
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                            <Link href="/atc/join" className="flex items-center gap-2">
                                <TowerControl size={15} />
                                Become ATC
                            </Link>
                        </DropdownMenuItem>

                        {/* <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link href="/pilots/training" className="flex items-center gap-2">
                                <BaggageClaim size={15} />
                                Visit / Transfer
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/pilots/training" className="flex items-center gap-2">
                                <Users size={15} />
                                ATC Roster
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/pilots/training" className="flex items-center gap-2">
                                <MessageCircleHeart size={15} />
                                Feedback
                            </Link>
                        </DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="link" className="flex items-center gap-2">
                            <Building2 size={15} />
                            vACC
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                            <Link href="/vacc/staff" className="flex items-center gap-2">
                                <Shield size={15} />
                                Staff
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/vacc/policies" className="flex items-center gap-2">
                                <Files size={15} />
                                Policies
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/vacc/about-us" className="flex items-center gap-2">
                                <Info size={15} />
                                About Us
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="sm:hidden">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="link">
                            <Menu size={30} />
                        </Button>
                    </DrawerTrigger>

                    <DrawerContent>
                        <DrawerHeader className="text-left">
                            <DrawerTitle className="flex items-center gap-2">
                                <Navigation size={15} />
                                Navigation Menu
                            </DrawerTitle>
                        </DrawerHeader>

                        <div className="flex flex-col gap-2 p-4">
                            <Button variant="outline" className="w-full">
                                <DrawerClose asChild>
                                    <Link href="/" className="flex items-center gap-2">
                                        <Home size={15} />
                                        Home
                                    </Link>
                                </DrawerClose>
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-2">
                                        <Plane size={15} />
                                        Pilots
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/pilots/training"
                                                className="flex items-center gap-2"
                                            >
                                                <GraduationCap size={15} />
                                                Pilot Training
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <a
                                                href="https://chartfox.org/"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="flex items-center gap-2"
                                            >
                                                <Map size={15} />
                                                Charts
                                            </a>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <a
                                                href="https://my.vatsim.net/virtual-airlines"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="flex items-center gap-2"
                                            >
                                                <PlaneTakeoff size={15} />
                                                Virtual Airlines
                                            </a>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    {/* <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/pilots/training"
                                                className="flex items-center gap-2"
                                            >
                                                <NotebookText size={15} />
                                                Airport Briefing
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem> */}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-2">
                                        <Radar size={15} />
                                        Controllers
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/atc/join"
                                                className="flex items-center gap-2"
                                            >
                                                <TowerControl size={15} />
                                                Become ATC
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    {/* <DropdownMenuSeparator />

                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/pilots/training"
                                                className="flex items-center gap-2"
                                            >
                                                <BaggageClaim size={15} />
                                                Visit / Transfer
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/pilots/training"
                                                className="flex items-center gap-2"
                                            >
                                                <Users size={15} />
                                                ATC Roster
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/pilots/training"
                                                className="flex items-center gap-2"
                                            >
                                                <MessageCircleHeart size={15} />
                                                Feedback
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem> */}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-2">
                                        <Building2 size={15} />
                                        vACC
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/vacc/staff"
                                                className="flex items-center gap-2"
                                            >
                                                <Shield size={15} />
                                                Staff
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/vacc/policies"
                                                className="flex items-center gap-2"
                                            >
                                                <Files size={15} />
                                                Policies
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <DrawerClose asChild>
                                            <Link
                                                href="/vacc/about-us"
                                                className="flex items-center gap-2"
                                            >
                                                <Info size={15} />
                                                About Us
                                            </Link>
                                        </DrawerClose>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button variant="outline">
                                    <ChevronDown size={20} />
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    );
}
