import { ActionResult } from "@/types/action-result";
import { requireRole} from "@/lib/role-check";
import { createCategory, findByName, getAllCategories } from "./repository"; 
import { CreateCategoryType, categoryType } from "./types";
export async function createCategoryService (data: CreateCategoryType): Promise<ActionResult<categoryType>> {

    const user = await requireRole("admin");
  
   const categoryName = data.name.trim().toLowerCase()
   const isExist = await findByName(categoryName)
   if(isExist) {
    return {
        success : false,
        message: "Already Exist"
    }
   }
   const parsedData = {
    name: categoryName,
    createdBy: user.id
   }

    const category = await createCategory(parsedData);
    return {
        success: true,
        data: category,
        message:"category created successfully"
    }

}

export async function updateCategoryService () {
    
}

export async function getCategoriesService (): Promise<ActionResult<categoryType[]>> {
    const categories = await getAllCategories();

    return{
        success: true,
        data: categories,
        message: "Categories fetched Successfully"
    }

}

export async function deactivateCategoryService () {
    
}