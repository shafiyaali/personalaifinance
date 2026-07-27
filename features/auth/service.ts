import { auth } from "@/lib/auth"
import {z } from "zod"
import { registerSchema } from "./schemas"
type registerInput = z.infer<typeof registerSchema>
export async function registerUser(data: registerInput) {

    console.log("data",data);
    
    const result = await auth.api.signUpEmail({
        body: {
            name: data.name,
            email: data.email,
            password: data.password
            // password: data.password
        }
    })

   console.log(result);
   
     return result;

}