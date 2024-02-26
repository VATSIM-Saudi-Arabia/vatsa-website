import type { NavItem } from "@/types/nav";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
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

import { Menu, ChevronDown } from "lucide-react";

export default function MainNav({ items }: { items: NavItem[] }) {
    return (
        <div className="container flex items-center justify-between h-28">
            <Link href="/">
                <Image src="/assets/logo.png" alt="Logo" width={80} height={80} priority />
            </Link>

            <div className="hidden sm:flex items-center gap-2">
                {items.map((item, index) => {
                    if (item.options)
                        return (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="link">{item.title}</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {item.options.map((option, index) => (
                                        <DropdownMenuItem key={index} asChild>
                                            <Link href={option.href}>{option.title}</Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        );

                    return (
                        <Link
                            key={index}
                            href={item.href ?? ""}
                            className={buttonVariants({ variant: "link" })}
                        >
                            {item.title}
                        </Link>
                    );
                })}
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
                            <DrawerTitle>Navigation Menu</DrawerTitle>
                        </DrawerHeader>

                        <div className="flex flex-col gap-2 p-4">
                            {items.map((item, index) => {
                                if (item.options)
                                    return (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline">{item.title}</Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                {item.options.map((option, index) => (
                                                    <DropdownMenuItem key={index} asChild>
                                                        <Link href={option.href}>
                                                            {option.title}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    );

                                return (
                                    <Button key={index} variant="outline" className="w-full">
                                        <Link href={item.href ?? ""}>{item.title}</Link>
                                    </Button>
                                );
                            })}
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
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {items.map((item, index) => (
                            <DropdownMenuItem key={index} asChild>
                                <Link href={item.href}>{item.title}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu> */}
            </div>
        </div>
    );
}
