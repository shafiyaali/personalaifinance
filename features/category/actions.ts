"use server"
import { ActionResult } from "@/types/action-result";
import { createCategoryService, getCategoriesService, updateCategoryService, deactivateCategoryService } from "./service";
import { categoryType, CreateCategoryType, UpdateCategoryInput } from "./types";
import { categorySchema, updateCategorySchema } from "./schemas";
import { revalidatePath } from "next/cache";
export async function createCategoryAction(data: CreateCategoryType):Promise<ActionResult<categoryType>>{
    const validated = categorySchema.safeParse(data);
if(!validated.success){
    return {
            success: false,
            errors : validated.error.flatten().fieldErrors,
            message: "Validation failed"
        }
    }
    try {
         await createCategoryService(validated.data)
         
    revalidatePath("/category")
         return {
            success: true,
            message: "category created successfully"
         }
         
    } catch (error) {
        
        return{
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
            
        }
    }


}

export async function getAllCategoriesAction(){
try {
     const categories = await getCategoriesService();
    
      return{
        success: true,
        data: categories,
        message: "Categories fetched Successfully"
    }
} catch (error) {
        return{
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
            
        }
    }
   
}
export async function updateCategoryAction(data: UpdateCategoryInput) :Promise<ActionResult<categoryType>>{

    const validated = updateCategorySchema.safeParse(data);
if(!validated.success){
    return {
            success: false,
            errors : validated.error.flatten().fieldErrors,
            message: "Validation failed"
        }
    }

    try {
        await updateCategoryService(validated.data)

         revalidatePath("/category")
    return {
        success: true,
    }
    } catch(error) {
       return{
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
            
        }
    }
   
    
}

export async function deactivateCategoryAction(id: number){
//     const validated = updateCategorySchema.safeParse(data);
// if(!validated.success){
//     return {
//             success: false,
//             errors : validated.error.flatten().fieldErrors,
//             message: "Validation failed"
//         }
//     }

    try {
        await deactivateCategoryService(id)

         revalidatePath("/category")
    return {
        success: true,
        message: "Category is deactivated"
    }
    } catch(error) {
       return{
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
            
        }
    }
}

