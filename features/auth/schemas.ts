import * as z from "zod";

const SYMBOLS = "!@#$%^&*()_+\\-=[]{};':\"\\\\|,.<>/?`~";
const symbolClass = new RegExp(`[${SYMBOLS.replace(/[-\\\]^]/g, "\\$&")}]`);

export const registerSchema = z.strictObject({

    name: z.string().trim().min(2, "Name must be atleast 2 characters"),
    email: z.email({
        error: "Please enter a valid email"
    }),
    password: z.string()
        .min(8, {error: "Password must be atleast 8 characters"})
        .regex(/\d/, {error: "Password must include at least 1 digit"})
        .regex(symbolClass, { error: "Password must include at least 1 symbol" }),
    confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"]

  });

