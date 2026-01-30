import { resendClient } from "../lib/resend.js";

import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email,name,clientURL) => {
    const {data,error} = await resendClient.emails.send(
        {
            from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
            to: email,
            subject: "Welcome to Chatify!",
            html: createWelcomeEmailTemplate(name,clientURL)
        }
    );

    if(error)
    {
        console.error("Error sending welcome email:",error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully", data);
};