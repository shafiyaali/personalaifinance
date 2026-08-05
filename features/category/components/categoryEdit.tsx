"use client"
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import CategoryForm from './categoryForm'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateCategoryInput, CreateCategoryType, UpdateCategoryInput } from '../types'
import { categorySchema } from '../schemas'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import { updateCategoryAction } from '../actions'
import { Category } from '@/generated/prisma/client'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

const UpdateCategory = ({category} : {category: Category}) => {

     const form = useForm<CreateCategoryType>({
              resolver : zodResolver(categorySchema), defaultValues:{
                  name:category.name
              }
    })
    const {open, setOpen, setFormError, close, formError } = useCrudDialog(form);
             
              const onSubmit: SubmitHandler<CreateCategoryType> =async (data) =>{
                const parsedData = {
                    name: data.name,
                    id: category.id
                }
                         const result = await updateCategoryAction(parsedData);
              
                          if(!result.success) {
                          setFormError(result.message)
                         } else {
                          close("category created successfully");
                              
                         }
                  
                         
                  }
  return (
    <>
    <DropdownMenuItem  onClick={() => setOpen(true)}>
        Edit
    </DropdownMenuItem>
            
     <Dialog 
    open ={open} onOpenChange={setOpen}> 
            <CategoryForm 
                category={category}
                form = {form}
                onSubmit = {onSubmit}
                formError = {formError}

            />
      
   
    </Dialog>
    </>
  )
}

export default UpdateCategory