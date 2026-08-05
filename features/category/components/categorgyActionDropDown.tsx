"use client"
import { EllipsisVerticalIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { deactivateCategoryAction, updateCategoryAction } from '../actions'
import { Button } from '@/components/ui/button'
import { CreateCategoryInput, CreateCategoryType, UpdateCategoryInput } from '../types'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { categorySchema } from '../schemas'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import CategoryForm from './categoryForm'
import { Category } from '@/generated/prisma/client'
import CategoryEditDialog from "./categoryEdit"
import UpdateCategory from './categoryEdit'
const CategorgyActionDropdown = ({category}: {category: Category}) => {

  
  const handledeActivate = async () => {
    await deactivateCategoryAction(category.id)
  }
  // const handleEditCategory = () => {

  // }
  return (
   <DropdownMenu>
    <DropdownMenuTrigger render={<EllipsisVerticalIcon />}/>
    <DropdownMenuContent>
        <UpdateCategory
          category={category}
        />
        {/* <DropdownMenuItem onClick={handleEditCategory}>Edit</DropdownMenuItem> */}
        <DropdownMenuItem onClick={handledeActivate}>Deactivate</DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default CategorgyActionDropdown