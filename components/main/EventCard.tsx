import type { Event } from "@/types";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Image from "next/image";

export default function EventCard({
    title,
    date,
    image_url,
    description,
}: Event) {
    return (
        <Card className="dark max-w-sm">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src={image_url}
                    alt="Card Image"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-full h-auto"
                />
            </CardContent>
            <CardFooter>
                <p>{description}</p>
            </CardFooter>
        </Card>
    );
}
