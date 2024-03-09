import SiteConfig from "@/config/site";
import Divider from "@/components/ui/divider";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Shield, ExternalLink } from "lucide-react";

export default function vACCStaff() {
    const { staff } = SiteConfig;

    return (
        <main className="flex flex-col">
            <section className="h-[35vh] bg-[url('/assets/backgrounds/pt.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center items-center gap-2 h-full">
                        <Shield size={50} />
                        <h1 className="text-2xl sm:text-4xl">Staff</h1>
                    </div>
                </div>

                <div className="relative text-background">
                    <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" />
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="container py-10">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-0">Code</TableHead>
                                <TableHead className="w-0">CID</TableHead>
                                <TableHead className="w-[25%]">Title</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="w-[20%]">Contact</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {staff.map((member, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{member.code}</TableCell>
                                    <TableCell>{member.cid || "N/A"}</TableCell>
                                    <TableCell>{member.title}</TableCell>
                                    <TableCell>{member.name}</TableCell>
                                    <TableCell>
                                        {member.name.startsWith("Vacant") ? (
                                            <Link
                                                href={`mailto:${staff[0].email}`}
                                                className={cn(
                                                    buttonVariants({ variant: "secondary" }),
                                                    "flex items-center gap-2 w-[100%] hover:opacity-50"
                                                )}
                                            >
                                                Apply <ExternalLink size={15} />
                                            </Link>
                                        ) : (
                                            <Link
                                                href={`mailto:${member.email}`}
                                                className={cn(
                                                    buttonVariants({ variant: "secondary" }),
                                                    "flex items-center gap-2 w-[100%] hover:opacity-50"
                                                )}
                                            >
                                                Contact <ExternalLink size={15} />
                                            </Link>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </main>
    );
}
