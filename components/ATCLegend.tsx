import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { Table, CheckCircle2, XCircle, GraduationCap } from "lucide-react";

export default function ATCLegend() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="ml-auto flex items-center gap-2">
                    Legend <Table size={15} />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                        <Table /> ATC Legend
                    </AlertDialogTitle>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-center items-center gap-2">
                            Unapproved - <XCircle className="inline text-red-500" />
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            Approved - <CheckCircle2 className="inline text-green-500" />
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            Tier 1 Approved - <Badge className="inline bg-green-500">T1</Badge>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            Tier 2 Approved - <Badge className="inline bg-green-500">T2</Badge>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            Tier 1 + Tier 2 Approved -{" "}
                            <Badge className="inline bg-green-500">T1 + T2</Badge>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            Training - <GraduationCap className="inline text-yellow-500" />
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            Tier 1 Training - <Badge className="inline bg-yellow-500">T1</Badge>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            Tier 2 Training - <Badge className="inline bg-yellow-500">T2</Badge>
                        </div>
                    </div>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
