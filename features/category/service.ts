import { ActionResult } from "@/types/action-result";
import { requireRole} from "@/lib/role-check";
import { createCategory, findByName } from "./repository"; 
import { CreateCategoryInput, categoryType } from "./types";
export async function createCategoryService (data: CreateCategoryInput): Promise<ActionResult<categoryType>> {

    await requireRole("admin");
  
   const categoryName = data.name.trim().toLowerCase()
   const isExist = await findByName(categoryName)
   if(isExist) {
    return {
        success : false,
        message: "Already Exist"
    }
   }

    const category = await createCategory(data);
    return {
        success: true,
        data: category,
        message:"category created successfully"
    }

}

export async function updateCategoryService () {
    
}

export async function getCategoriesService () {
    
}

export async function deactivateCategoryService () {
    
}