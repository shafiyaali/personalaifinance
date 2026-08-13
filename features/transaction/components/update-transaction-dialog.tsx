import { Category } from '@/generated/prisma/client'
import  { useEffect } from 'react'
import { TransactionDTO } from '../types/dto'
import { Dialog } from '@/components/ui/dialog'
import TransactionForm from './transaction-form'
import { useForm , SubmitHandler} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTransactionType } from '../types'
import { createTransactionSchema } from '../schemas'
import { toUpdateTransactionForm } from '../mapper'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import { updateTransactionAction } from '../actions'
type UpdateTransactionDialogProps = {
  categories: Category[] |undefined,
  open: boolean,
  onOpenChange: (open: boolean) => void,
  selectedTransaction: TransactionDTO 
}
const UpdateTransactionDialog = ({categories, open, onOpenChange, selectedTransaction}: UpdateTransactionDialogProps) => {

  const form = useForm<CreateTransactionType>({
          resolver: zodResolver(createTransactionSchema), 
          // defaultValues:{
          //     type:selectedTransaction?.type,
          //     amount: Number(selectedTransaction?.amount),
          //     transactionDate: selectedTransaction?.transactionDate,
          //     categoryId: selectedTransaction?.categoryId, 
          //     merchantName: selectedTransaction?.merchantName ,
          //     description: selectedTransaction?.description
          // }
      }
          
      )

      const { setFormError, close, formError } = useCrudDialog(form);
         
      const onSubmit: SubmitHandler<CreateTransactionType> =async (data) =>{

              console.log("data",data);
              
              const parsedData = {
                id: selectedTransaction?.id,
                ...data
              }
                     const result = await updateTransactionAction(parsedData);
          
                      if(!result.success) {
                      setFormError(result.message)
                     } else {
                      onOpenChange(false)
                      close("Transaction updated successfully");
                     }
              
                     
              }
      useEffect(()=>{
        if(!selectedTransaction)
          return;

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