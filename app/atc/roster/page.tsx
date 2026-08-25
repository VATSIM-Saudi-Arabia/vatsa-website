import { type RosterMember, Position } from "@/types";
import { Rating } from "@/types/api";
import { fetchSaudiRoster, type RosterController } from "@/lib/hq";

import ATCConfig from "@/config/atc";
import Divider from "@/components/ui/divider";
import ATCLegend from "@/components/ATCLegend";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Users, CheckCircle2, XCircle } from "lucide-react";

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

const RATING_ID: Record<string, number> = {
    SUS: 0, OBS: 1, S1: 2, S2: 3, S3: 4, C1: 5, C2: 6, C3: 7, I1: 8, I2: 9, I3: 10, SUP: 11, ADM: 12,
};

type RowMember = RosterMember & { positions: string[]; solo: string[] };

const byCid = (a: RowMember, b: RowMember) => a.cid - b.cid;

const hasApproval = (m: RowMember) => m.positions.length > 0 || m.solo.length > 0;

function mapController(c: RosterController): RowMember {
    const parts = String(c.name || "").trim().split(/\s+/);
    const first_name = parts.shift() || "";
    const last_name = parts.join(" ");
    const rating_id = RATING_ID[String(c.rating || "").toUpperCase()] ?? Rating.OBS;
    return {
        cid: Number(c.cid),
        first_name,
        last_name,
        rating_id,
        rating: ratings[rating_id],
        positions: (c.positions || []).map((p) => String(p).toUpperCase()),
        solo: (c.solo || []).map((p) => String(p).toUpperCase()),
    };
}

async function getRoster(): Promise<RowMember[]> {
    const { home } = await fetchSaudiRoster();
    const { inactive } = ATCConfig;
    return (home || [])
        .filter((c) => {
            const rid = RATING_ID[String(c.rating || "").toUpperCase()] ?? Rating.OBS;
            return !inactive.includes(Number(c.cid)) && rid > Rating.OBS;
        })
        .map(mapController)
        .filter(hasApproval)
        .sort(byCid);
}

async function getVisiting(): Promise<RowMember[]> {
    const { visiting } = await fetchSaudiRoster();
    return (visiting || []).map(mapController).filter(hasApproval).sort(byCid);
}

const POSITION_LABEL: Record<Position, string> = {
    [Position.DEL]: "DEL",
    [Position.GND]: "GND",
    [Position.TWR]: "TWR",
    [Position.APP]: "APP",
    [Position.CTR]: "CTR",
};

const generatePositionSymbol = (member: RowMember, position: Position): JSX.Element => {
    const label = POSITION_LABEL[position];
    if (member.solo.includes(label)) return <Badge className="mx-auto bg-green-500 animate-pulse">Solo</Badge>;
    if (member.positions.includes(label)) return <CheckCircle2 className="mx-auto text-green-500" />;
    return <XCircle className="mx-auto text-red-500" />;
};

export default async function ATCRoster() {
    const residents = await getRoster();
    const visitors = await getVisiting();

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
                <div className="container flex flex-col gap-2 my-10">
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
                                                        <Badge className={member.rating.color}>
                                                            {member.rating.short}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{member.rating.long}</TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.DEL)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.GND)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.TWR)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.APP)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.CTR)}
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
                                            {visitors.map((member, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{member.cid}</TableCell>
                                                    <TableCell>
                                                        <Badge className={member.rating.color}>
                                                            {member.rating.short}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell>{member.rating.long}</TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.DEL)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.GND)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.TWR)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.APP)}
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {generatePositionSymbol(member, Position.CTR)}
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
