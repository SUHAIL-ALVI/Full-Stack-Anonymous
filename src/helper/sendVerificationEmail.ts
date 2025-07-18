import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";



    export async function sendVerificationEmail(
        email: string,
        username:string,
        verifyCode: string,

    ): Promise<ApiResponse> {

        try {

            await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Mystery Message Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
    });

           return {
            success: true,
            message: "Verification email sent successfully.",
           }
            
        } catch (Emailerror) {
            console.error("Error sending verification email:", Emailerror);
            return {
                success: false,
                message: "Failed to send verification email. Please try again later.",
            }
        }
    }