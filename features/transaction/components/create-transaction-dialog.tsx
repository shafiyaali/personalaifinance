"use client"
import { Dialog } from '@/components/ui/dialog'
import { createTransactionAction } from '../actions'
import { CreateTransactionType } from '../types'
import { createTransactionSchema} from '../schemas'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCrudDialog } from '@/hooks/use-form-dialog'
import TransactionForm from './transaction-form'
import { categoryType } from '@/features/category/types'

type CreateTransactionDialogProps ={
    categories: categoryType[] | undefined
    open: boolean
    onOpenChange: (open : boolean)=>void
}
const CreateTransactionDialog = ({categories, open, onOpenChange} :CreateTransactionDialogProps) => {
    const form = useForm<CreateTransactionType>({
        resolver: zodResolver(createTransactionSchema), defaultValues:{
            type:"INCOME",
             amount: 1,
      transactionDate: new Date(),
      categoryId: undefined, 
      merchantName: "",
      description: ""
        }

    }
        
    )

    const { setFormError, close, formError } = useCrudDialog(form);
   
    const onSubmit: SubmitHandler<CreateTransactionType> =async (data) =>{
               const result = await createTransactionAction(data);
    
                if(!result.success) {
                setFormError(result.message)
               } else {
                onOpenChange(false)
                close("Transaction created successfully");
               }
        
               
        }
  return (

   <Dialog 
    open ={open} onOpenChange={onOpenChange}> 
       
            <TransactionForm 
                form = {form}
                onSubmit = {onSubmit}
                formError = {formError}
                categories={categories}

            />
      
    </Dialog>
  )
}

export default CreateTransactionDialog