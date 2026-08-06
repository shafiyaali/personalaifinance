import React from 'react'
import { Table, TableHeader, TableBody, TableHead, TableRow} from '@/components/ui/table'
import CategoryRow from './categoryRow'
import { Category } from '@/generated/prisma/client'
type TableProps = {
  categories: Category[] | undefined,
  onEdit : (category: Category) => void

}
const CategoryTable = ({categories, onEdit} : TableProps) => {
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
      {categories && categories.map(category => (
          <CategoryRow key={category.id} category={category} onEdit={onEdit}/>
      ))}
    </TableBody>

    </Table>
   
    </>
  )
}

export default CategoryTable