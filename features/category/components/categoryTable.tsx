import React from 'react'
import { Table, TableHeader, TableBody, TableHead, TableRow} from '@/components/ui/table'
import CategoryRow from './categoryRow'
const CategoryTable = () => {
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
        <CategoryRow />
    </TableBody>

    </Table>
   
    </>
  )
}

export default CategoryTable