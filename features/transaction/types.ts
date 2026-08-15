import z from "zod";
import { createTransactionSchema, TransactionQueryParamsSchema, updateTransactionSchema } from "./schemas";
import { Prisma } from "@/generated/prisma/client";
import { transactionWithCategory } from "./repository";
import { TransactionDTO } from "./types/dto";
export type CreateTransactionType = z.infer<typeof createTransactionSchema>;
export type UpdateTransactionType = z.infer<typeof updateTransactionSchema>;


export type transactionWithCategory = Prisma.TransactionGetPayload<typeof transactionWithCategory>;
export type TransactionQueryParamsTypes = z.infer<typeof TransactionQueryParamsSchema>;
// export type TransactionQueryParamsTypes = {
//     categoryId? : string
//     type?: "INCOME" | "EXPENSE"
//     search? : string
//     page: string
//     pageSize: string
// }


export type PaginatedTransactionsTypes = {
    items: TransactionDTO[],
    pagination: {
        page: number
        pageSize: number
        total: number
        totalPages: number
    }
}
