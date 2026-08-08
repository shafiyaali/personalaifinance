import React, { useEffect } from 'react'
import { DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, } from '@/components/ui/dialog'
import { CreateTransactionType } from '../types'
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Transaction } from '@/generated/prisma/client';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { categoryType } from '@/features/category/types';


type TransactionFormProps = {
    categories: categoryType[] | undefined,
    transaction?: Transaction,
    form: UseFormReturn<CreateTransactionType>,
    onSubmit: SubmitHandler<CreateTransactionType>,
    formError?: string

}
const TransactionForm = (
    { categories, transaction, form, onSubmit, formError }: TransactionFormProps
) => {

    const isEdit = !!transaction;



    const title = isEdit ? "Update Transaction" : "Create Transaction";
    const buttonText = isEdit ? "Update" : "Create"
    const loadingButtonText = isEdit ? "Updating" : "Creating"

    return (

        <DialogContent className="sm:max-w-sm">
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogContent>
                    <RadioGroup defaultValue="INCOME" className="w-fit ">
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="INCOME" id="r1" />
                            <Label htmlFor="r1">Income</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="EXPENSE" id="r3" />
                            <Label htmlFor="r3">Expense</Label>
                        </div>

                        <FieldError>{form.formState.errors.type?.message}</FieldError>
                    </RadioGroup>
                    

                    <FieldGroup>
                        <Field>

                            <Label htmlFor='transaction-name'>Merchant Name</Label>
                            <Input {...form.register("merchantName")} id='transaction-name' placeholder='eg: H&M' />

                        </Field>
                        <FieldError>{form.formState.errors.merchantName?.message}</FieldError>
                    </FieldGroup>
                    <FieldGroup>
                        <Field>

                            <Label htmlFor='transaction-date'>Transaction Date</Label>
                            <Input {...form.register("transactionDate")} id='transaction-date'
                                type='date' />

                        </Field>
                        <FieldError>{form.formState.errors.transactionDate?.message}</FieldError>
                    </FieldGroup>
                    <FieldGroup>
                        <Field>

                            <Label htmlFor='amount'>Amount</Label>
                            <Input {...form.register("amount")} id='amount'
                                type='number' />

                        </Field>
                        <FieldError>{form.formState.errors.transactionDate?.message}</FieldError>
                    </FieldGroup>
                    <FieldError >{formError}</FieldError>
                </DialogContent>


                <DialogFooter>
                    <DialogClose render={<Button variant={"outline"}>Cancel</Button>} />
                    <Button type='submit' disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? loadingButtonText : buttonText}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}

export default TransactionForm