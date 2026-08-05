import { ActionResult } from "@/types/action-result";
import { requireRole} from "@/lib/role-check";
import { createCategory, findByName, getAllCategories } from "./repository"; 
import { CreateCategoryInput, CreateCategoryType, categoryType } from "./types";
import { normalizeCategoryName} from "./utils";
import { getCurrentUser } from "@/lib/current-user";
export async function createCategoryService (data: CreateCategoryType): Promise<categoryType> {

    
    const user = await getCurrentUser();
    await requireRole(user,"ADMIN");
   const categoryName = normalizeCategoryName(data.name)
   const isExist = await findByName(categoryName)
   if(isExist) {
        throw new Error ("Category Already Exist")
   }
   const parsedData = {
    name: categoryName,
    createdBy: user.id
   }

    return createCategory(parsedData);

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