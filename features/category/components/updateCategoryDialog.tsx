"use client"
import { Dialog } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
import CategoryForm from './categoryForm'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateCategoryType } from '../types'
import { categorySchema } from '../schemas'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import { updateCategoryAction } from '../actions'
import { Category } from '@/generated/prisma/client'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
type UpdateCategoryDialogProps = {
    category: Category ,
    open: boolean,
    onOpenChange: (open : boolean) => void
}
const UpdateCategoryDialog = ({ category , open, onOpenChange}: UpdateCategoryDialogProps) => {

    
    const form = useForm<CreateCategoryType>({
        resolver: zodResolver(categorySchema), defaultValues: {
            name: category.name
        }
    })
    const { setFormError, close, formError } = useCrudDialog(form);

    const onSubmit: SubmitHandler<CreateCategoryType> = async (data) => {
        const parsedData = {
            name: data.name,
            id: category.id
        }
        const result = await updateCategoryAction(parsedData);

        if (!result.success) {
            setFormError(result.message)
        } else {
            close("category created successfully");
            onOpenChange(false);
            form.reset()

        }
    }

    useEffect(() => {
    form.reset({
        name: category.name
    });
}, [category]);
    return (
        <>
            <Dialog
                open={open} onOpenChange={onOpenChange}>
                <CategoryForm
                    category={category}
                    form={form}
                    onSubmit={onSubmit}
                    formError={formError}

                />


            </Dialog>
        </>
    )
}

export default UpdateCategoryDialog