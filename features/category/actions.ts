"use server"
import { ActionResult } from "@/types/action-result";
import { createCategoryService, getCategoriesService } from "./service";
import { categoryType, CreateCategoryType } from "./types";
import { categorySchema } from "./schemas";
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
        console.log("Action error");
        
        return{
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
            
        }
    }


}

export async function getAllCategoriesAction(){

    return await getCategoriesService();
    
}
export async function updateCategoryAction(){
    
}

export async function deactivateCategoryAction(){
    
}

