import { ActionResult } from "@/types/action-result";
import { createCategoryService, getCategoriesService } from "./service";
import { categoryType, CreateCategoryType } from "./types";
import { categorySchema } from "./schemas";
export async function createCategoryAction(data: CreateCategoryType):Promise<ActionResult<categoryType>>{
    const validated = categorySchema.safeParse(data);
if(!validated.success){
    return {
            success: false,
            errors : validated.error.flatten().fieldErrors,
            message: "Validation failed"
        }
    }

    return await createCategoryService(data)


}

export async function getAllCategoriesAction(){

    return await getCategoriesService();
    
}
export async function updateCategoryAction(){
    
}

export async function deactivateCategoryAction(){
    
}

