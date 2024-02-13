import type { NavItem } from "@/types/nav";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function MainNav({ items }: { items: NavItem[] }) {
    return (
        <div className="container flex items-center justify-between h-20">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />

            <div className="flex gap-6">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={buttonVariants({ variant: "outline" })}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
