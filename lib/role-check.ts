import type {user } from "@/types/user" 
export function requireRole(user: user, role: "USER" | "ADMIN"){  
    if(user.role !== role) {
        throw new Error("Unauthorized")
    }

}