"use server"
import { getCurrentUser } from "./current-user"
export  async function requireRole(role: "USER" | "ADMIN"){  
    const user = await getCurrentUser()
    if(user.role !== role) {
        throw new Error("Unauthorized")
    } else {
        
    return true;
    }

}