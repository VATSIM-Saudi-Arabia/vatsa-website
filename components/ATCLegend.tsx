import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { Table as TableIcon, CheckCircle2, XCircle, GraduationCap } from "lucide-react";


export default function ATCLegend() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="ml-auto flex items-center gap-2">
                    Legend <TableIcon size={15} />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                        <TableIcon /> ATC Legend
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <Table className="mx-auto">
                    <TableBody className="[&_td:first-child]:w-[20%] [&_td]:p-2">
                        <TableRow>
                            <TableCell>
                                <XCircle className="inline text-red-500" />
                            </TableCell>
                            <TableCell>Unapproved</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <CheckCircle2 className="inline text-green-500" />
                            </TableCell>
                            <TableCell>Approved</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Badge className="inline bg-green-500">T1</Badge>
                            </TableCell>
                            <TableCell>Tier 1 Approved</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Badge className="inline bg-green-500">T2</Badge>
                            </TableCell>
                            <TableCell>Tier 2 Approved</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Badge className="inline bg-green-500">T1 + T2</Badge>
                            </TableCell>
                            <TableCell>Tier 1 + Tier 2 Approved</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <GraduationCap className="inline text-yellow-500" />
                            </TableCell>
                            <TableCell>Training</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Badge className="inline bg-yellow-500">T1</Badge>
                            </TableCell>
                            <TableCell>Tier 1 Training</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Badge className="inline bg-yellow-500">T2</Badge>
                            </TableCell>
                            <TableCell>Tier 2 Training</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Badge className="inline bg-orange-500">Solo</Badge>
                            </TableCell>
                            <TableCell>Solo Validation. More Information <a href="https://staff.vatsim.me/solos" style={{ color: "blue" }}>here.</a> </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
