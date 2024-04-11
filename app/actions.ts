"use server";

import { z } from "zod";
import { feedbackFormSchema } from "./lib/validation";
import { transporter } from "./lib/mailer";

export async function sendFeedbackForm(values: z.infer<typeof feedbackFormSchema>): Promise<{ message: string }> {
    const res = feedbackFormSchema.safeParse(values);

    if (!res.success) return { message: "fail" };

    const info = await transporter.sendMail({
        from: "no-reply@vatsimsa.com",
        to: "director@vatsimsa.com, hr@vatsimsa.com, tech@vatsimsa.com",
        subject: "Feedback Form",
        html: `
        <div style="background-color: #09090b; color: white; padding: 1rem; border-radius: 0.5rem">
            <p>--- Controller CID ---</p>
            <p>${res.data.controller_cid}</p>
            <p>--- Controller Name ---</p>
            <p>${res.data.controller_name}</p>
            <p>--- Feedback ---</p>
            <p>${res.data.feedback}</p>
        </div>
        `,
    });

    if (!info) return { message: "fail" };

    console.log(`Message sent: ${info.messageId}`);

    return { message: "success" };
}
