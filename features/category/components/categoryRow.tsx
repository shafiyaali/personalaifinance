"use client"
import { TableRow, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import CategorgyActionDropdown from './categorgyActionDropDown'
import { Category } from '@/generated/prisma/client'
import { formatDate } from '@/utils/formatDate'
type RowProps = {
  category: Category ,
  onEdit : (category: Category) => void
canUpdateDeactivate : boolean
}

const CategoryRow = ({category, onEdit, canUpdateDeactivate}: RowProps) => {


  return (
    <>
   
         <TableRow>
          <TableCell>{category.name}</TableCell>
          <TableCell><Badge variant={'destructive'} > {category.isActive ? "Active" : "InActive"} </Badge></TableCell>
          <TableCell>{category.createdBy}</TableCell>
          <TableCell>{formatDate(category.createdAt)}</TableCell>
         {canUpdateDeactivate &&  <TableCell>
            <CategorgyActionDropdown category={category} onEdit={onEdit} />
            </TableCell> }
        </TableRow>
    
      </>
  )
}

export default CategoryRow