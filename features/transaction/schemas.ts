import {z } from "zod"

export const createTransactionSchema = z.strictObject({
    type : z.enum(["INCOME", "EXPENSE"]),
    amount: z.coerce.number().gt(0,{
        error:"Amount must be greater than 0"
    }),
    merchantName : z.string().trim().max(50, {
        error:"Merchant name must be maximum of 50 characters"
    }).optional(),
    transactionDate: z.coerce.date(),
    description: z.string().trim().max(200, {
        error: "Description must be maximum of 200 characters"
    }).optional(),
    categoryId: z.coerce.number({
        error:"Select a category"
    })
})

export const updateTransactionSchema = createTransactionSchema.extend({
    id: z.string()
})