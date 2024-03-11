import SiteConfig from "@/config/site";
import Divider from "@/components/ui/divider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Discord from "@/public/assets/icons/discord.svg";

export default async function ATCJoin() {
    return (
        <main className="flex flex-col">
            <section className="h-screen">
                <video autoPlay loop muted playsInline className="fixed object-cover w-full h-full -z-10">
                    <source src="/assets/backgrounds/atc.mov" type="video/mp4" />
                </video>

                <div className="h-full bg-black/60 z-50">
                    <div className="container flex flex-col justify-center items-center h-full">
                        <h1 className="text-4xl md:text-6xl text-center">Do you have what it takes?</h1>
                        <h2 className="text-center opacity-65">
                            Control the largest airspace in the Middle East. More information below.
                        </h2>
                    </div>
                </div>

                <div className="relative text-background">
                    <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                        <Divider className="absolute bottom-0" />
                    </div>
                </div>
            </section>

            <section className="bg-background">
                <div className="container flex flex-col gap-6 py-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl text-vacc-green">Ready to join?</h2>
                        <p>
                            Once your account region for VATSIM is set to Europe, Middle East, and Africa (EMEA), you
                            can create a ticket inside the{" "}
                            <a
                                href={SiteConfig.links.discord.mena}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-vacc-green font-bold underline hover:opacity-50"
                            >
                                VATMENA Discord
                            </a>{" "}
                            server in order to change your vACC to the Saudi Arabian vACC. After this you can begin your
                            journey within the Saudi Arabian vACC.
                        </p>
                        <p>Join our Discord server to request training once your vACC request has been processed.</p>
                        <a
                            href={SiteConfig.links.discord.saudi}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={cn(buttonVariants({ variant: "secondary" }), "mx-auto bg-discord")}
                        >
                            <div className="flex items-center gap-2">
                                <Discord fill="currentColor" className="w-4" />
                                Join our Discord
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
