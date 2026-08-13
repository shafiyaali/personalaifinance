import { Category } from '@/generated/prisma/client'
import  { useEffect } from 'react'
import { TransactionDTO } from '../types/dto'
import { Dialog } from '@/components/ui/dialog'
import TransactionForm from './transaction-form'
import { useForm , SubmitHandler} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTransactionType, UpdateTransactionType } from '../types'
import { createTransactionSchema, updateTransactionSchema } from '../schemas'
import { toUpdateTransactionForm } from '../mapper'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import { updateTransactionAction } from '../actions'
import { updateCategorySchema } from '@/features/category/schemas'
import { CreateCategoryType } from '@/features/category/types'
type UpdateTransactionDialogProps = {
  categories: Category[] |undefined,
  open: boolean,
  onOpenChange: (open: boolean) => void,
  selectedTransaction: TransactionDTO | undefined
}
const UpdateTransactionDialog = ({categories, open, onOpenChange, selectedTransaction}: UpdateTransactionDialogProps) => {

  const form = useForm<CreateTransactionType>({
          resolver: zodResolver(createTransactionSchema), 
      }
          
      )

      const { setFormError, close, formError } = useCrudDialog(form);
         
      const onSubmit: SubmitHandler<CreateTransactionType> =async (data) =>{


              console.log("data",data);
              if(!selectedTransaction) 
                return;
              
                const updateData : UpdateTransactionType = {
                id: selectedTransaction.id,
                ...data
              }
                     const result = await updateTransactionAction(updateData);
          
                      if(!result.success) {
                      setFormError(result.message)
                     } else {
                      onOpenChange(false)
                      close("Transaction updated successfully");
                      form.reset();
                     }

                    
              }
      useEffect(()=>{
        if(selectedTransaction)
        form.reset(toUpdateTransactionForm(selectedTransaction))
      },[selectedTransaction,form])
  return (
  <Dialog
  open={open} onOpenChange={onOpenChange}>

<TransactionForm 
mode ={"edit"}
  categories={categories}
  form={form}
  onSubmit={onSubmit}
  formError={formError}
/>
  </Dialog>
  )
}

export default UpdateTransactionDialog