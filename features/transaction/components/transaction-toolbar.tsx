import React from 'react'
import {  ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SearchTransaction from './serach-transaction'
import { Category } from '@/generated/prisma/client'
import CategoryFilter from './filter/category-filter'
import TypeFilter from './filter/type-filter'
const TransactionToolbar = ({categories}: {categories: Category[] | undefined}) => {
  return (
     <div className='p-2 md:p-4 flex justify-between'>
        <div className='w-full'>
         <SearchTransaction  />
        </div>
        <div className="flex justify-between">
         
            <CategoryFilter categories={categories}/>
            <TypeFilter />

        </div>

    </div>
  )
}

export default TransactionToolbar