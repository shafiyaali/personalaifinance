import { z } from "zod";

export const createTransactionSchema = z.strictObject({
    type: z.enum(["INCOME", "EXPENSE"]), 
    amount: z.number().gt(0, {
        message: "Amount must be greater than 0" 
    }),
    merchantName: z.string().trim().max(50, {
        message: "Merchant name must be maximum of 50 characters"
    }).optional(),
    transactionDate: z.date(),
    description: z.string().trim().max(200, {
        message: "Description must be maximum of 200 characters"
    }).optional(),
    categoryId: z.number().int().positive({
        message: "Select a category"
    })
});

export const updateTransactionSchema = createTransactionSchema.extend({
    id: z.string()
});
