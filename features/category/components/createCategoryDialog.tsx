"use client"
import { Dialog,  DialogTrigger  } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { createCategoryAction } from '../actions'
import { CreateCategoryType } from '../types'
import { categorySchema } from '../schemas'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import CategoryForm from './categoryForm'
type CreateCategoryDialogProps ={
    open: boolean
    onOpenChange: (open : boolean)=>void
}
const CreateCategoryDialog = ({open, onOpenChange} :CreateCategoryDialogProps) => {
 const form = useForm<CreateCategoryType>({
        resolver : zodResolver(categorySchema), defaultValues:{
            name:""
        }
    })
    const { setFormError, close, formError } = useCrudDialog(form);
   
    const onSubmit: SubmitHandler<CreateCategoryType> =async (data) =>{
               const result = await createCategoryAction(data);
    
                if(!result.success) {
                setFormError(result.message)
               } else {
                onOpenChange(false)
                close("category created successfully");
               }
        
               
        }
  return (

   <Dialog 
    open ={open} onOpenChange={onOpenChange}> 
       
            <CategoryForm 
                form = {form}
                onSubmit = {onSubmit}
                formError = {formError}

            />
      
    </Dialog>
  )
}

export default CreateCategoryDialog