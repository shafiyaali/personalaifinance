import { getCurrentSession } from "./session"


export async function requireRole(role: "user" | "admin"){
    const session = await getCurrentSession();
    if(!session) {
        
        throw new Error("Authentication required.")
    } 
    if(session.user.role !== role) {
        
        throw new Error("Unauthorized")
    }
     return session.user;

}