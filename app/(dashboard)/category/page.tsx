import React from 'react'
import { Card } from '@/components/ui/card'
import CategoryHeader from '@/features/category/components/categoryHeader'
import CategoryToolbar from '@/features/category/components/categoryToolbar'
import CategoryTable from '@/features/category/components/categoryTable'
const page = () => {
  return (
   <>
    <Card>
    
    <CategoryHeader />

    <CategoryToolbar />
    <CategoryTable />
    </Card>

   </>
  )
}

export default page