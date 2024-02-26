import type { EventResponse } from "@/types/api";

import Config from "@/config/site";
import Typer from "@/components/Typer";
import EventCard from "@/components/EventCard";
import Divider from "@/components/ui/divider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Discord from "@/public/assets/icons/discord.svg";

// Fetch events from the VATSIM API
async function getEvents(): Promise<EventResponse> {
    const res = await fetch("https://my.vatsim.net/api/v2/events/latest", {
        headers: {
            Accept: "application/json",
        },
    });

    if (!res.ok) throw new Error("Failed to fetch events");

    // Filter those events that includes an airport that is in Saudi Arabia
    var response: EventResponse = await res.json();
    response.data = response.data.filter((event) =>
        event.airports.some((event) => event.icao.startsWith("OE"))
    );

    return response;
}

export default async function Home() {
    const events = (await getEvents())?.data;

    return (
        <main className="flex flex-col">
            <section className="h-[80vh] bg-[url('/assets/background.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center h-full">
                        <div className="text-4xl sm:text-6xl">
                            <h1>Welcome to </h1>
                            <h1 className="font-bold text-green-600">VATSIM Saudi Arabia</h1>
                        </div>

                        <h2 className="text-md sm:text-xl">
                            <Typer content={Config.subheadings} />
                        </h2>
                    </div>

                    <div className="relative text-green-900">
                        <div className="absolute bottom-0 h-16 w-full overflow-hidden leading-0 rotate-180">
                            <Divider className="absolute bottom-0" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-green-900">
                <div className="container flex flex-col items-center gap-6 py-10">
                    <h1 className="text-4xl">Join us today!</h1>
                    <p>
                        Join our Discord server and be a part of controlling the airspaces over the
                        Kingdom of Saudi Arabia
                    </p>
                    <a
                        href={Config.links.discord}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cn(buttonVariants({ variant: "secondary" }), "bg-discord")}
                    >
                        <div className="flex items-center gap-2">
                            <Discord fill="currentColor" className="w-4" />
                            Join our Discord
                        </div>
                    </a>
                </div>
            </section>

            <section className="bg-background">
                <div className="text-green-900">
                    <div className="relative h-16 w-full overflow-hidden leading-0">
                        <Divider className="absolute" />
                    </div>
                </div>

                <div className="container flex flex-col items-center gap-8 py-10">
                    <h2 className="text-4xl">Upcoming Events</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {events?.length ? (
                            events.map((event, index) => (
                                <EventCard
                                    key={index}
                                    link={event.link}
                                    title={event.name}
                                    date={new Date(event.start_time).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                    type={event.type}
                                    image_url={event.banner}
                                />
                            ))
                        ) : (
                            <h1 className="text-lg">No upcoming events found.</h1>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
