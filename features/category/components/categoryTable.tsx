import React from 'react'
import { Table, TableHeader, TableBody, TableHead, TableRow} from '@/components/ui/table'
import CategoryRow from './categoryRow'
import { Category } from '@/generated/prisma/client'
const CategoryTable = ({categories} : {categories: Category[] | undefined}) => {
  return (
    <>
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Category</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Created By</TableHead>
        <TableHead>Created At</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {categories && 
        <CategoryRow categories ={categories}/>}
    </TableBody>

    </Table>
   
    </>
  )
}

export default CategoryTable