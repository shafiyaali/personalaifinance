import React from 'react'
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell} from '@/components/ui/table'
import CategoryRow from './categoryRow'
import { Category } from '@/generated/prisma/client'
type TableProps = {
  categories: Category[] | undefined,
  onEdit : (category: Category) => void,
  canUpdateDeactivate: boolean

}
const CategoryTable = ({categories, onEdit, canUpdateDeactivate} : TableProps) => {
  return (
    <>
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Category</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Created By</TableHead>
        <TableHead>Created At</TableHead>
        {canUpdateDeactivate && <TableHead>Actions</TableHead>}
      </TableRow>
    </TableHeader>
    <TableBody>
      {categories?.length == 0 && <TableRow > 
          <TableCell colSpan={4} >No categories found. Create your first category</TableCell>
        </TableRow>}
      {categories && categories.map(category => (
          <CategoryRow key={category.id} category={category} onEdit={onEdit}
          canUpdateDeactivate = {canUpdateDeactivate}/>
      ))}
    </TableBody>

    </Table>
   
    </>
  )
}

export default CategoryTable