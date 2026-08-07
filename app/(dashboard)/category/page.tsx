import { getAllCategoriesAction } from '@/features/category/actions'
import CategoryFeatures from '@/features/category/components/CategoryFeatures';
import { getCurrentUser } from '@/lib/current-user';
const page = async () => {
    const categories = (await getAllCategoriesAction()).data;
    const user = await getCurrentUser();
  return (
   <div className='p-2'>
    
    <CategoryFeatures
      categories={categories}
      user= {user}
    />


   </div>
  )
}

export default page