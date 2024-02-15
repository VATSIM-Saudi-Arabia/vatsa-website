import type { EventResponse } from "@/types/api";

import EventCard from "@/components/main/EventCard";
import Typer from "@/components/main/Typer";
import Config from "@/config/site";

// Fetch events from the VATSIM API
async function getEvents(): Promise<EventResponse> {
    const res = await fetch(
        "https://my.vatsim.net/api/v2/events/view/division/mena",
        {
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (!res.ok) throw new Error("Failed to fetch events");

    // Filter those events that includes an airport that is in Saudi Arabia
    var response: EventResponse = await res.json();
    response.data = response.data.filter((event) =>
        event.airports.some((event) => event.icao.startsWith("OE"))
    );

    return response;
}

export default async function Home() {
    const res = await getEvents();

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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                                className="absolute bottom-0 h-16 w-[calc(100%+1.3px)] opacity-50"
                            >
                                <path
                                    d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                                className="absolute bottom-0 h-16 w-[calc(100%+1.3px)] [transform:rotateY(180deg)]"
                            >
                                <path
                                    d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-green-900">
                <div className="container flex flex-col items-center gap-10 py-8">
                    <h2 className="text-4xl">Upcoming Events</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {res.data.map((event) => (
                            <EventCard
                                key={event.id}
                                link={event.link}
                                title={event.name}
                                date={new Date(
                                    event.start_time
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                                type={event.type}
                                image_url={event.banner}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
