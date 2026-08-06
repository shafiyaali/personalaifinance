import { Card } from '@/components/ui/card'
import CategoryHeader from '@/features/category/components/categoryHeader'
import CategoryToolbar from '@/features/category/components/categoryToolbar'
import CategoryTable from '@/features/category/components/categoryTable'
import { getAllCategoriesAction } from '@/features/category/actions'
const page = async () => {
    const categories = (await getAllCategoriesAction()).data;
  return (
   <div className='p-2'>
    
    
    <CategoryHeader />

    <CategoryToolbar />
    <CategoryTable categories={categories}/>
  

   </div>
  )
}

export default page