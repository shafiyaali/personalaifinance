import { auth } from "@/lib/auth"
import { RegisterInput, RegisterResponse } from "./types"
import { ActionResult } from "@/types/action-result"
export async function registerUser(data: RegisterInput): Promise<ActionResult<RegisterResponse>> {

    try {

        const user = await auth.api.signUpEmail({
            body: {
                name: data.name,
                email: data.email,
                password: data.password,
            },
        });

        return {
            success: true,
            data: user,
            message: "user registered successfully"
        };

    } catch (error) {

        if (
            error instanceof Error &&
            error.message.includes("User already exists")
        ) {

            return {
                success: false,
                message: "Email already exists.",
            };
        }

        return {
            success: false,
            message: "Unable to create account.",
        };
    }
}