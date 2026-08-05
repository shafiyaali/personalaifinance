import {z} from "zod"
import { categorySchema, updateCategorySchema, deleteCategorySchema } from "./schemas"

export type CreateCategoryType = z.infer<typeof categorySchema>
export type CreateCategoryInput = {
    name: string,
    createdBy: string
}
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>

export type categoryType = {
 id: number;
 name: string;
 isActive: boolean;
 createdBy: string;
 createdAt: Date;
 updatedAt: Date;
} 

export type deleteCategoryInput = z.infer<typeof deleteCategorySchema>