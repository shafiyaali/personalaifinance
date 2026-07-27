"use server"

import { registerSchema } from "./schemas";

import { registerUser } from "./service";
import {z } from "zod"
type registerInput = z.infer<typeof registerSchema>

export async function registerAction(data: registerInput) {
    
    // const value = Object.fromEntries(formData);
    const validated = registerSchema.safeParse(data);

    if(!validated.success) {
        return {
            success: false,
            errors : validated.error.flatten().fieldErrors
        }
    }


     try {
    // 2. Call your service function
    const result = await registerUser(validated.data);
    return { success: true, user: result.user };
    
  } catch (error) {
    // 3. Catch Better Auth errors (e.g., email already exists)
    return { error: error || "Something went wrong." };
  }

}