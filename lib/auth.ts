import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    user: {
        additionalFields:{
            role: {
                type: ["user", "admin"],
                required:false,
                defaultValue:"user",
                input:false
            }
        }
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
    },
    plugins: [nextCookies()] // make sure this nextCookies is the last plugin in the array
})

