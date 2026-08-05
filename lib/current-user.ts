import { getCurrentSession } from "./session";
export const getCurrentUser = async () => {
    const session = await getCurrentSession();
    if(!session) {
        throw new Error("Authentication Required")
    }
    return session.user;
}