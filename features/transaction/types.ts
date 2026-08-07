import z from "zod";
import { createTransactionSchema, updateTransactionSchema } from "./schemas";

export type CreateTransactionType = z.infer<typeof createTransactionSchema>;
export type UpdateTransactionType = z.infer<typeof updateTransactionSchema>;
