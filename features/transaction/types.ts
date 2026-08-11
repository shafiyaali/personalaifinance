import z from "zod";
import { createTransactionSchema, updateTransactionSchema } from "./schemas";
import { Prisma } from "@/generated/prisma/client";
import { transactionWithCategory } from "./repository";
export type CreateTransactionType = z.infer<typeof createTransactionSchema>;
export type UpdateTransactionType = z.infer<typeof updateTransactionSchema>;


export type transactionWithCategory = Prisma.TransactionGetPayload<typeof transactionWithCategory>;