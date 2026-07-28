"use server"

import { registerSchema } from "./schemas";
import { RegisterForm, RegisterInput } from "./types";

import { registerUser } from "./service";

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