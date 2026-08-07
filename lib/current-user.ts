
import { getCurrentSession } from "./session";
export const getCurrentUser = async () => {
    const session = await getCurrentSession();
    if(!session) {
        throw new Error("Authentication Required")
    }
    const user={
        id: session.user.id,
        name: session.user.name,
        role: session.user.role,
        email:session.user.email
    }
    return user;
}