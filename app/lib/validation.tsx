import { z } from "zod";

export const feedbackFormSchema = z.object({
    controller_cid: z.string().min(1, "Required.").max(7, "CID must be less than 7 characters."),
    controller_name: z.string().min(1, "Required."),
    feedback: z.string().min(1, "Required."),
});
