import React, { useEffect } from 'react'
import { DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose,  } from '@/components/ui/dialog'
import { categoryType, CreateCategoryType } from '../types'
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type CategoryFormProps = {
  category? :categoryType,
  form:UseFormReturn<CreateCategoryType>,
  onSubmit: SubmitHandler<CreateCategoryType>,
  formError?: string

}
const CategoryForm = ({category, form,  onSubmit, formError}: CategoryFormProps) => {

    const isEdit = !!category;
    
    useEffect(() => {
        form.reset({
            name: category?.name
        })
    },[category])
   
    const title = isEdit ? "Update Category" : "Create Category";
    const buttonText = isEdit? "Update" : "Create"
    const loadingButtonText = isEdit ? "Updating" : "Creating"

  return (
    <DialogContent className="sm:max-w-sm">
                 <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        
                    <Label htmlFor='category-name'>Category Name</Label>
                    <Input {...form.register("name")} id='category-name' placeholder='eg: Food'/>

                    </Field>
                    <FieldError>{form.formState.errors.name?.message}</FieldError>
                    <FieldError >{formError}</FieldError>
                </FieldGroup>
                
            <DialogFooter>
                <DialogClose render={<Button variant={"outline"}>Cancel</Button>}/>
                <Button type='submit' disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? loadingButtonText : buttonText}
                </Button>
            </DialogFooter>
  </form>
            </DialogContent>
  )
}

export default CategoryForm