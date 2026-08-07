
import { requireRole} from "@/lib/role-check";
import { createCategory, deactivateCategory, findByName, getAllCategories, updateCategory } from "./repository"; 
import { CreateCategoryType, UpdateCategoryInput, categoryType } from "./types";
import { normalizeCategoryName} from "./utils";
import { getCurrentUser } from "@/lib/current-user";
export async function createCategoryService (data: CreateCategoryType): Promise<categoryType> {

    
    const user = await getCurrentUser();
    await requireRole("ADMIN");
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

export async function updateCategoryService (data:UpdateCategoryInput) {
    await getCurrentUser();
    await requireRole("ADMIN");
   const categoryName = normalizeCategoryName(data.name)
   const isExist = await findByName(categoryName)
   if(isExist) {
        throw new Error ("Category Already Exist")
   }
   return updateCategory(data)
    
}

export async function getCategoriesService (): Promise<categoryType[]> {
    await getCurrentUser();
   return getAllCategories();

  

}

export async function deactivateCategoryService (id:number) {
    await getCurrentUser();
    await requireRole("ADMIN");


    return deactivateCategory(id);
}