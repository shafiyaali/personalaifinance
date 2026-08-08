import { getAllCategoriesAction } from "@/features/category/actions"

type categorySelectItem = {
    label: string,
    value: number
}
export async function getCategorySelectItems(): Promise<categorySelectItem []> {
        const categories = (await getAllCategoriesAction()).data
const items: categorySelectItem[] = [];
categories?.forEach(category => (
    items.push({label: category.name, value :category.id})
))

return items;
}

