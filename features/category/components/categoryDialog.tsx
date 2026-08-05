"use client"
import { Dialog,  DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,  } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { Field, FieldGroup } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { createCategoryAction } from '../actions'
import { CreateCategoryType } from '../types'
import { categorySchema } from '../schemas'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldError } from '@/components/ui/field'
import { useCrudDialog } from '@/hooks/use-form-dialog'
const CategoryDialog = () => {

    // const { register, handleSubmit, reset, formState:{
    //     errors, isSubmitting
    // }} =useForm<CreateCategoryType>({
    //     resolver : zodResolver(categorySchema)
    // })
    const form = useForm<CreateCategoryType>({
        resolver : zodResolver(categorySchema)
    })
    const dialog = useCrudDialog(form);
    // const [formError, setFormError] = useState<string | undefined>()
    // const [open, setOpen] = useState(false)
    
   
    const onSubmit: SubmitHandler<CreateCategoryType> =async (data) =>{
           const result = await createCategoryAction(data);

            if(!result.success) {
            dialog.setFormError(result.message)
           } else {
            dialog.close("category created successfully");
                // reset()
                // dialog.setFormError(undefined)
                // dialog.setOpen(false)
                
           }
    
           
    }
  return (

   <Dialog 
    open ={dialog.open} onOpenChange={dialog.setOpen}> 
       
            <DialogTrigger render={<Button ><PlusIcon /> Add Category</Button>} />
            <DialogContent className="sm:max-w-sm">
                 <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader>
                    <DialogTitle>Create Category</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        
                    <Label htmlFor='category-name'>Category Name</Label>
                    <Input {...form.register("name")} id='category-name' placeholder='eg: Food'/>

                    </Field>
                    <FieldError>{form.formState.errors.name?.message}</FieldError>
                    <FieldError >{dialog.formError}</FieldError>
                </FieldGroup>
                
            <DialogFooter>
                <DialogClose render={<Button variant={"outline"}>Cancel</Button>}/>
                <Button type='submit' disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Creating" : "Create"}
                </Button>
            </DialogFooter>
  </form>
            </DialogContent>
      
    </Dialog>
  )
}

export default CategoryDialog