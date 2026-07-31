import {z } from "zod"

export const categorySchema = z.strictObject({
    name : z.string()
    .trim().min(2,{
        error:"Minimum of 2 charactes"
    }).max(50, {
        error:"Maximum of 50 characters"
    })
})

export const updateCategorySchema = categorySchema.extend({
    id: z.number()
})

