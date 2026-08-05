import React from 'react'
import { TableRow, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import CategorgyActionDropdown from './categorgyActionDropDown'
import { getAllCategoriesAction } from '../actions'
const CategoryRow = async () => {

  const categories = (await getAllCategoriesAction()).data;


  return (
    <>
  
    {categories && categories.map((category, idx) => {
      return (
         <TableRow key={idx}>
          <TableCell>{category.name}</TableCell>
          <TableCell><Badge variant={'destructive'} > {category.isActive ? "Active" : "InActive"} </Badge></TableCell>
          <TableCell>{category.createdBy}</TableCell>
          <TableCell>{category.createdAt.toISOString().split('T')[0]}</TableCell>
          <TableCell>
            <CategorgyActionDropdown category={category} />
            </TableCell>
        </TableRow>
      )
    })}
      </>
  )
}

export default CategoryRow