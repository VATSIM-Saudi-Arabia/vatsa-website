import Typer from "@/components/Typer";
import Events from "@/components/Events";
import Config from "@/config/site";
import Divider from "@/components/ui/divider";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Discord from "@/public/assets/icons/discord.svg";

export default async function Home() {
    return (
        <main className="flex flex-col">
            <section className="h-[80vh] bg-[url('/assets/background.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center h-full">
                        <div className="text-4xl sm:text-6xl">
                            <h1>Welcome to </h1>
                            <h1 className="font-bold text-green-600">
                                VATSIM Saudi Arabia
                            </h1>
                        </div>

                        <h2 className="text-md sm:text-xl">
                            <Typer content={Config.subheadings} />
                        </h2>

                        <div id="events" />
                    </div>

                    <div className="relative text-green-900">
                        <div className="absolute bottom-0 left-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                            <Divider className="absolute bottom-0" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-green-900">
                <div className="container flex flex-col items-center gap-8 py-10">
                    <h2 className="text-4xl">Upcoming Events</h2>
                    <Events />
                </div>
            </section>

            <section className="bg-background">
                <div className="text-green-900">
                    <div className="block left-0 h-16 w-full overflow-hidden leading-0">
                        <Divider className="absolute" />
                    </div>
                </div>

                <div className="container flex flex-col items-center gap-6 py-10">
                    <h1 className="text-4xl">Join us today!</h1>
                    <p>
                        Join our Discord server and be a part of controlling the
                        airspaces over the Kingdom of Saudi Arabia
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "bg-discord"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <Discord fill="currentColor" className="w-4" />
                            Join our Discord
                        </div>
                    </a>
                </div>

                <Separator className="container" />
            </section>
        </main>
    );
}
