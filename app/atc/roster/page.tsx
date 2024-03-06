import type { Roster } from "@/types";
import type { MembersResponse } from "@/types/api";

import Divider from "@/components/ui/divider";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Users } from "lucide-react";

// Fetch roster from the VATSIM API
async function getRoster(): Promise<Roster> {
    const initial_res = await fetch("https://api.vatsim.net/v2/orgs/subdivision/SAU?limit=1", {
        headers: {
            Accept: "application/json",
            "X-API-Key": process.env.VATSIM_CORE_API_KEY,
        },
        next: { revalidate: 3600 },
    });

    var initial: MembersResponse = await initial_res.json();

    if (!initial_res.ok)
        throw new Error("Failed to fetch initial roster: " + JSON.stringify(initial));

    const count = initial.count;

    const res = await fetch(`https://api.vatsim.net/v2/orgs/subdivision/SAU?limit=${count}`, {
        headers: {
            Accept: "application/json",
            "X-API-Key": process.env.VATSIM_CORE_API_KEY,
        },
        next: { revalidate: 3600 },
    });

    const response: MembersResponse = await res.json();

    if (!res.ok) throw new Error("Failed to fetch roster: " + JSON.stringify(response));

    const ratings = [
        { short: "SUS", long: "Suspended", color: "bg-gray-500" },
        { short: "OBS", long: "Pilot / Observer", color: "bg-gray-500" },
        { short: "S1", long: "Tower Trainee", color: "bg-yellow-500" },
        { short: "S2", long: "Tower Controller", color: "bg-yellow-500" },
        { short: "S3", long: "TMA Controller", color: "bg-yellow-500" },
        { short: "C1", long: "Enroute Controller", color: "bg-green-500" },
        { short: "C2", long: "Senior Controller", color: "bg-green-500" },
        { short: "C3", long: "Senior Controller", color: "bg-green-500" },
        { short: "I1", long: "Instructor", color: "bg-red-500" },
        { short: "I2", long: "Senior Instructor", color: "bg-red-500" },
        { short: "I3", long: "Senior Instructor", color: "bg-red-500" },
        { short: "SUP", long: "Supervisor", color: "bg-purple-500" },
        { short: "ADM", long: "Administrator", color: "bg-purple-500" },
    ];

    // Filter the response for useful data.
    const items: Roster = response.items
        ?.filter((item) => item.rating > 1)
        .map((item) => ({
            first_name: item.name_first,
            last_name: item.name_last,
            rating: ratings[item.rating],
        }));

    return items;
}

export default async function ATCRoster() {
    const roster = await getRoster();

    return (
        <main className="flex flex-col">
            <section className="h-[35vh] bg-[url('/assets/backgrounds/pt.png')] bg-cover bg-no-repeat bg-center">
                <div className="h-full bg-black/30">
                    <div className="container flex flex-col justify-center items-center gap-2 h-full">
                        <Users size={50} />
                        <h1 className="text-2xl sm:text-4xl">ATC Roster</h1>
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
                    {roster?.length ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[15%]">Name</TableHead>
                                    <TableHead className="w-0">Rating</TableHead>
                                    <TableHead>Title</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {roster.map((member, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {member.first_name + " " + member.last_name}
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={member.rating.color}>
                                                {member.rating.short}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{member.rating.long}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <h1 className="text-center text-lg">
                            Unable to retrieve ATC roster at the moment.
                        </h1>
                    )}
                </div>
            </section>
        </main>
    );
}
