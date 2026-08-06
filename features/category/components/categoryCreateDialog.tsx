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
const CreateCategory = () => {
 const form = useForm<CreateCategoryType>({
        resolver : zodResolver(categorySchema), defaultValues:{
            name:""
        }
    })
    const {open, setOpen, setFormError, close, formError } = useCrudDialog(form);
   
    const onSubmit: SubmitHandler<CreateCategoryType> =async (data) =>{
               const result = await createCategoryAction(data);
    
                if(!result.success) {
                setFormError(result.message)
               } else {
                close("category created successfully");
                    
               }
        
               
        }
  return (

   <Dialog 
    open ={open} onOpenChange={setOpen}> 
       
            <DialogTrigger render={<Button ><PlusIcon /> Add Category</Button>} />
            <CategoryForm 
                form = {form}
                onSubmit = {onSubmit}
                formError = {formError}

            />
      
    </Dialog>
  )
}

export default CreateCategory