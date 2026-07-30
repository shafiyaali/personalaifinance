import {z } from "zod"
import { registerSchema } from "./schemas"
import { LogInSchema } from "./schemas"

//REgister user
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


//Login
export type LoginForm = z.infer<typeof LogInSchema>
export type LoginResponse = {
 redirect: boolean;
 token: string;
 url?: string | undefined;
 user: {
 id: string;
 createdAt: Date;
 updatedAt: Date;
 email: string;
 emailVerified: boolean;
 name: string;
 image?: string | null | undefined;
 };
}
