"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { sendFeedbackForm } from "@/app/actions";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    controller_cid: z.string().min(1, "Required.").max(7, "CID must be less than 7 characters."),
    controller_name: z.string().min(1, "Required."),
    feedback: z.string().min(1, "Required."),
});

export default function FeedbackForm() {
    const [pending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        startTransition(async () => {
            const { message } = await sendFeedbackForm(values);
            if (message == "success") toast.success("Feedback submitted!");
            if (message == "fail") toast.error("There was an error!");
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <FormField
                        control={form.control}
                        name="controller_cid"
                        render={({ field }) => (
                            <FormItem className="basis-1/2">
                                <FormLabel>Controller CID</FormLabel>

                                <FormControl>
                                    <Input placeholder="1514902" {...field} />
                                </FormControl>

                                <FormDescription>
                                    VATSIM CID of the controller you&apos;re providing feedback for.
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="controller_name"
                        render={({ field }) => (
                            <FormItem className="basis-1/2">
                                <FormLabel>Controller Name</FormLabel>

                                <FormControl>
                                    <Input placeholder="Bilal Baig" {...field} />
                                </FormControl>

                                <FormDescription>
                                    Name of the controller you&apos;re providing feedback for.
                                </FormDescription>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Feedback</FormLabel>

                            <FormControl>
                                <Textarea placeholder="The controller was helpful and patient with me..." {...field} />
                            </FormControl>

                            <FormDescription>Write a few words as feedback.</FormDescription>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={pending}>
                    {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} {pending ? "Submitting" : "Submit"}
                </Button>
            </form>
        </Form>
    );
}
