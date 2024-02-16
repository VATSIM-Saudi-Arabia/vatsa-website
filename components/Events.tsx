import type { EventResponse } from "@/types/api";

import EventCard from "./EventCard";

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

export default async function Events() {
    const events = (await getEvents())?.data;

    return (
        <div className="flex flex-wrap justify-center gap-8">
            {events ? (
                events.map((event) => (
                    <EventCard
                        key={event.id}
                        link={event.link}
                        title={event.name}
                        date={new Date(event.start_time).toLocaleDateString(
                            "en-US",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            }
                        )}
                        type={event.type}
                        image_url={event.banner}
                    />
                ))
            ) : (
                <h1 className="text-lg">No upcoming events found.</h1>
            )}
        </div>
    );
}
