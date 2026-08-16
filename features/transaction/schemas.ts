import { z } from "zod";

export const createTransactionSchema = z.strictObject({
    type: z.enum(["INCOME", "EXPENSE"]), 
    amount: z.number().gt(0, {
        message: "Amount must be greater than 0" 
    }),
    merchantName: z.string().trim().max(50, {
        message: "Merchant name must be maximum of 50 characters"
    }).optional(),
    transactionDate: z.date({
        message:"Please select a corrent date"
    }),
    description: z.string().trim().max(200, {
        message: "Description must be maximum of 200 characters"
    }).optional(),
    categoryId: z.number().int().positive({
        message: "Select an active category"
    })
});

export const updateTransactionSchema = createTransactionSchema.extend({
    id: z.string()
});

export const TransactionQueryParamsSchema = z.strictObject({
    page : z.coerce.number().gte(1),
    pageSize: z.coerce.number().gte(1).max(30),
    search : z.string().optional(),
    type: z.enum(["INCOME", "EXPENSE"]).optional(),
    categoryId: z.coerce.number().optional(),
})
