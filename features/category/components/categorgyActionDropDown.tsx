"use client"
import { EllipsisVerticalIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { deactivateCategoryAction } from '../actions'
import { Category } from '@/generated/prisma/client'
import { Dialog } from '@/components/ui/dialog'
import CategoryForm from './categoryForm'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateCategoryType } from '../types'
import { categorySchema } from '../schemas'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import { updateCategoryAction } from '../actions'
import { Button } from '@/components/ui/button'

type ActionProps = {
  category: Category,
  onEdit : (category: Category) => void

}
const CategorgyActionDropdown = ({ category, onEdit }: ActionProps) => {


  const handledeActivate = async () => {
    if(confirm("Are you sure?"))
    {  
    await deactivateCategoryAction(category.id)
    }
  }
  //  const form = useForm<CreateCategoryType>({
  //         resolver: zodResolver(categorySchema), defaultValues: {
  //             name: category.name
  //         }
  //     })
      // const {  setFormError, close, formError } = useCrudDialog(form);
  
      // const onSubmit: SubmitHandler<CreateCategoryType> = async (data) => {
      //     const parsedData = {
      //         name: data.name,
      //         id: category.id
      //     }
      //     const result = await updateCategoryAction(parsedData);
  
      //     if (!result.success) {
      //         setFormError(result.message)
      //     } else {
      //         close("Category updated successfully");
  
      //     }
  
  
      // }

  return (
    <>

    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant={'ghost'}><EllipsisVerticalIcon /></Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem disabled={!category.isActive} onClick={() =>onEdit(category)}>Edit</DropdownMenuItem>
        <DropdownMenuItem disabled={!category.isActive} onClick={handledeActivate}>Deactivate</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default CategorgyActionDropdown