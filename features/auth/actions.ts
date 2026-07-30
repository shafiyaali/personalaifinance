"use server"

import { registerSchema, LogInSchema } from "./schemas";
import { RegisterForm, RegisterInput, LoginForm } from "./types";

import { registerUser, SigninUser, SignoutUser } from "./service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function registerAction(data: RegisterForm) {
    
    const validated = registerSchema.safeParse(data);

    if(!validated.success) {
        return {
            success: false,
            errors : validated.error.flatten().fieldErrors,
            message: "Validation failed"
        }
    }
    const parsedData: RegisterInput  = {
        name: validated.data.name,
        email: validated.data.email,
        password: validated.data.password
    }
    return await registerUser(parsedData);

}

export async function LoginAction(data: LoginForm) {
    const validated = LogInSchema.safeParse(data);
    if(!validated.success) {
        return {
            success: false,
            errors : validated.error.flatten().fieldErrors,
            message: "Validation failed"
        }
    }

    return await SigninUser(validated.data)
}

export async function SignOutAction () {
    await SignoutUser();
    revalidatePath("/sign-in");
    redirect("sign-in")
    
}