import SiteConfig from "@/config/site";
import Divider from "@/components/ui/divider";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Files, Eye } from "lucide-react";

export default function vACCPolicies() {
    const { policies } = SiteConfig;

    return (
        <main className="flex flex-col">
            <section className="h-[35vh] bg-[url('/assets/backgrounds/pt.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center items-center gap-2 h-full">
                        <Files size={50} />
                        <h1 className="text-2xl sm:text-4xl">Policies</h1>
                    </div>
                </div>

                <div className="relative text-background">
                    <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" />
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="container flex flex-col gap-4 py-10">
                    {policies.map((policy, index) => (
                        <Card key={index}>
                            <CardHeader className="flex flex-row justify-between items-center p-4">
                                <div className="flex items-center gap-2">
                                    <Files />
                                    <h2 className="text-xl">{policy.name}</h2>
                                </div>

                                <a
                                    href={policy.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={cn(buttonVariants({ variant: "secondary" }), "flex items-center gap-2")}
                                >
                                    View
                                    <Eye size={15} />
                                </a>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}
