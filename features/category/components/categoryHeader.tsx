import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import CategoryDialog from './categoryDialog'

const categoryHeader = () => {
  return (
   
        <CardHeader >
          <div className='flex justify-between '>
              <CardTitle>Categories</CardTitle>
              <CategoryDialog />
              {/* <Button ><PlusIcon /> Add Category</Button> */}
          </div>
            <CardDescription>Manage categories used to clarify your transactions.</CardDescription>
        </CardHeader>
  
  )
}

export default categoryHeader