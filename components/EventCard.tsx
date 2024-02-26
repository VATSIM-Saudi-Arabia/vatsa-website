import type { Event } from "@/types";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default function EventCard({ link, title, type, date, image_url }: Event) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:opacity-80 transition-opacity ease-in-out"
        >
            <Card className="dark w-[75vw] md:w-[25vw] overflow-hidden">
                <CardContent className="p-0">
                    <Image
                        src={image_url}
                        alt="Card Image"
                        width={0}
                        height={0}
                        sizes="75vh"
                        className="w-full h-auto"
                        priority
                    />
                </CardContent>
                <CardHeader>
                    <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">
                        {title}
                    </CardTitle>
                    <CardDescription>{type + " • " + date}</CardDescription>
                </CardHeader>
            </Card>
        </a>
    );
}
