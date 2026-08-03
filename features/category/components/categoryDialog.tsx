"use client"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,  } from '@/components/ui/dialog'
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

const CategoryDialog = () => {

    const { register, handleSubmit, formState:{
        errors, isSubmitting
    }} =useForm<CreateCategoryType>({
        resolver : zodResolver(categorySchema)
    })
   
    const onSubmit: SubmitHandler<CreateCategoryType> =async (data) =>{
           const result = await createCategoryAction(data);
    }
  return (

   <Dialog>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTrigger render={<Button ><PlusIcon /> Add Category</Button>} />
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create Category</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        
                    <Label htmlFor='category-name'>Category Name</Label>
                    <Input {...register("name")} id='category-name' name='category-name' placeholder='eg: Food'/>

                    </Field>
                    <FieldError>{errors.name?.message}</FieldError>
                </FieldGroup>
<DialogFooter>
    <DialogClose render={<Button variant={"outline"}>Cancel</Button>}/>
    <Button type='submit' disabled={isSubmitting}>Create</Button>
</DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
  )
}

export default CategoryDialog