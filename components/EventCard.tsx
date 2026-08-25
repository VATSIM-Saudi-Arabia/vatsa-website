import type { Event } from "@/types";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default function EventCard({ link, title, type, date, image_url }: Event) {
    const card = (
        <Card className="w-[75vw] md:w-[25vw] overflow-hidden">
            <CardContent className="p-0">
                {image_url ? (
                    <Image
                        src={image_url}
                        alt={title}
                        width={0}
                        height={0}
                        sizes="75vh"
                        className="w-full h-auto"
                        priority
                    />
                ) : (
                    <div className="w-full aspect-[16/9] bg-green-900" />
                )}
            </CardContent>
            <CardHeader>
                <CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</CardTitle>
                <CardDescription>{type + " • " + date}</CardDescription>
            </CardHeader>
        </Card>
    );

    if (!link) return card;

    return (
        <a href={link} target="_blank" rel="noreferrer noopener" className="hover:opacity-80 transition-opacity">
            {card}
        </a>
    );
}
