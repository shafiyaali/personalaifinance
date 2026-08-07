
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

const CategoryHeader = ({canCreate, onCreate} : {canCreate : boolean, onCreate : ()=> void}) => {


  return (
   
        <CardHeader >
          <div className='flex justify-between '>
              <CardTitle>Categories</CardTitle>
              {canCreate && <Button onClick={onCreate}><PlusIcon /> Add Category</Button>}
          </div>
            <CardDescription>Manage categories used to clarify your transactions.</CardDescription>
        </CardHeader>
  
  )
}

export default CategoryHeader