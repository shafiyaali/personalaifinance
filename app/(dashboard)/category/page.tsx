import { getAllCategoriesAction } from '@/features/category/actions'
import CategoryFeatures from '@/features/category/components/CategoryFeatures';
const page = async () => {
    const categories = (await getAllCategoriesAction()).data;
  return (
   <div className='p-2'>
    
    <CategoryFeatures
      categories={categories}
    />


   </div>
  )
}

export default page