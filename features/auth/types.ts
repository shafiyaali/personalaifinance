import {z } from "zod"
import { registerSchema } from "./schemas"

export type RegisterForm = z.infer<typeof registerSchema>
export type RegisterInput = Omit<RegisterForm, "confirmPassword">

export type RegisterResponse = {
  token: string | null;
  user: {
    id: string;
    email: string;
    name: string;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
    emailVerified: boolean;
  };
};