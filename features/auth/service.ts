import { auth } from "@/lib/auth"
import { RegisterInput, RegisterResponse, LoginForm, LoginResponse } from "./types"
import { ActionResult } from "@/types/action-result"
import { headers } from "next/headers";
import { APIError } from "better-auth";
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

        if (error instanceof APIError ) {
           return {
                success: false,
                message: error.message,
            };
        }

        return {
            success: false,
            message: "Unable to create account.",
        };
    }
}

export async function SigninUser(data: LoginForm): Promise<ActionResult<LoginResponse>>{

    try{

 
    const user = await auth.api.signInEmail({
        body: {
            email: data.email,
            password: data.password
        },
        headers: await headers()
    })

    return {
            success: true,
            data: user,
            message: "user registered successfully"
        };
    } 
        catch (error) {
        if (error instanceof APIError) {
            return {
                success: false,
                message: error.message,
            };
        }
        return {
            success: false,
            message: "Unable to Login. Something went wrong",
        };
    }
}

export async function SignoutUser() {

    await auth.api.signOut({
        headers: await headers(),
    })
}