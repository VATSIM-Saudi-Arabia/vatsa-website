import type { NavItem } from "@/types/nav";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

export default function MainNav({ items }: { items: NavItem[] }) {
    return (
        <div className="container flex items-center justify-between h-28">
            <Link href="/">
                <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    priority
                />
            </Link>

            <div className="hidden sm:flex items-center gap-2">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={buttonVariants({ variant: "link" })}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className="sm:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button>
                            <Menu size={30} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {items.map((item, index) => (
                            <DropdownMenuItem key={index} asChild>
                                <Link href={item.href}>{item.title}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
