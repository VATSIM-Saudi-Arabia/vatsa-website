import { type RosterMember, Position, Approval } from "@/types";
import type { MembersResponse } from "@/types/api";

import ATCConfig from "@/config/atc";
import Divider from "@/components/ui/divider";
import ATCLegend from "@/components/ATCLegend";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Users, CheckCircle2, XCircle, GraduationCap } from "lucide-react";

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

// Fetch roster from the VATSIM API
async function getRoster(): Promise<RosterMember[]> {
    const initial_res = await fetch("https://api.vatsim.net/v2/orgs/subdivision/SAU?limit=1", {
        headers: {
            Accept: "application/json",
            "X-API-Key": process.env.VATSIM_CORE_API_KEY,
        },
        next: { revalidate: 3600 },
    });

    // Get an initial response for the count of total members
    var initial: MembersResponse = await initial_res.json();

    if (!initial_res.ok)
        throw new Error("Failed to fetch initial roster: " + JSON.stringify(initial));

    // Use the count from the initial response to fetch all members
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

    // Filter the response for useful data.
    const { inactive } = ATCConfig;
    const items: RosterMember[] = response.items
        ?.filter((item) => !inactive.includes(item.id) && item.rating > 1)
        .map((item) => ({
            cid: item.id,
            first_name: item.name_first,
            last_name: item.name_last,
            rating_id: item.rating,
            rating: ratings[item.rating],
        }));

    return items;
}

export default async function ATCRoster() {
    const residents = await getRoster();
    const { visitors } = ATCConfig;
    const { approvals } = ATCConfig;

    const filteredVisitors = visitors?.map((item) => ({
        cid: item.cid,
        first_name: item.first_name,
        last_name: item.last_name,
        rating_id: item.rating_id,
        rating: ratings[item.rating_id],
    }));

    // Generate a symbol for the given member and the position
    const generateSymbol = (item: RosterMember, position: Position): JSX.Element => {
        const approval = approvals.find((e) => e.cid == item.cid);

        if (!approval && item.rating_id >= 5)
            return <CheckCircle2 className="mx-auto text-green-500" />;
        if (approval?.positions[position] == Approval.Approved)
            return <CheckCircle2 className="mx-auto text-green-500" />;
        if (approval?.positions[position] == Approval.ApprovedT1)
            return <Badge className="bg-green-500">T1</Badge>;
        if (approval?.positions[position] == Approval.ApprovedT2)
            return <Badge className="bg-green-500">T2</Badge>;
        if (approval?.positions[position] == Approval.ApprovedT1T2)
            return <Badge className="bg-green-500">T1 + T2</Badge>;
        if (approval?.positions[position] == Approval.Training)
            return <GraduationCap className="mx-auto text-yellow-500" />;
        if (approval?.positions[position] == Approval.TrainingT1)
            return <Badge className="bg-yellow-500">T1</Badge>;
        if (approval?.positions[position] == Approval.TrainingT2)
            return <Badge className="bg-yellow-500">T2</Badge>;
        if (approval?.positions[position] == Approval.Solo)
            return <Badge className="bg-orange-500">Solo</Badge>;

        return <XCircle className="mx-auto text-red-500" />;
    };

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
                <div className="container flex flex-col gap-2 py-10">
                    <ATCLegend />
                    <Tabs defaultValue="resident" className="w-full">
                        <TabsList>
                            <TabsTrigger value="resident">Resident</TabsTrigger>
                            <TabsTrigger value="visiting">Visiting</TabsTrigger>
                        </TabsList>
                        <TabsContent value="resident">
                            {residents?.length ? (
                                <>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-0">CID</TableHead>
                                                <TableHead className="w-[15%]">Name</TableHead>
                                                <TableHead className="w-0">Rating</TableHead>
                                                <TableHead>Title</TableHead>
                                                <TableHead className="text-center">DEL</TableHead>
                                                <TableHead className="text-center">GND</TableHead>
                                                <TableHead className="text-center">TWR</TableHead>
                                                <TableHead className="text-center">APP</TableHead>
                                                <TableHead className="text-center">CTR</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {residents.map((member, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{member.cid}</TableCell>
                                                    <TableCell>
                                                        {member.first_name + " " + member.last_name}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge className={member.rating.color}>
                                                            {member.rating.short}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{member.rating.long}</TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.DEL)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.GND)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.TWR)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.APP)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.CTR)}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </>
                            ) : (
                                <h1 className="text-center text-lg">
                                    Unable to retrieve resident roster at the moment.
                                </h1>
                            )}
                        </TabsContent>
                        <TabsContent value="visiting">
                            {visitors?.length ? (
                                <>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-0">CID</TableHead>
                                                <TableHead className="w-[15%]">Name</TableHead>
                                                <TableHead className="w-0">Rating</TableHead>
                                                <TableHead>Title</TableHead>
                                                <TableHead className="text-center">DEL</TableHead>
                                                <TableHead className="text-center">GND</TableHead>
                                                <TableHead className="text-center">TWR</TableHead>
                                                <TableHead className="text-center">APP</TableHead>
                                                <TableHead className="text-center">CTR</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredVisitors.map((member, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{member.cid}</TableCell>
                                                    <TableCell>
                                                        {member.first_name + " " + member.last_name}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge className={member.rating.color}>
                                                            {member.rating.short}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{member.rating.long}</TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.DEL)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.GND)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.TWR)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.APP)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generateSymbol(member, Position.CTR)}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </>
                            ) : (
                                <h1 className="text-center text-lg">
                                    Unable to retrieve visiting roster at the moment.
                                </h1>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}
