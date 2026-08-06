import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import CategoryDialog from './createCategoryDialog'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

const categoryHeader = ({onCreate} : {onCreate : ()=> void}) => {
  return (
   
        <CardHeader >
          <div className='flex justify-between '>
              <CardTitle>Categories</CardTitle>
              <Button onClick={onCreate}><PlusIcon /> Add Category</Button>
          </div>
            <CardDescription>Manage categories used to clarify your transactions.</CardDescription>
        </CardHeader>
  
  )
}

export default categoryHeader