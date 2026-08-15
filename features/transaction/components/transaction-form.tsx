import React from 'react'
import { DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, } from '@/components/ui/dialog'
import { CreateTransactionType  } from '../types'
import { Controller, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Field, FieldGroup, FieldError, FieldLabel, FieldSet, FieldLegend,
  FieldTitle, FieldContent
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { categoryType } from '@/features/category/types';
import { Select, SelectItem,  SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
type TransactionFormProps = {
  mode: "create" | "edit",
  categories: categoryType[] | undefined,
  form: UseFormReturn<CreateTransactionType>,
  onSubmit: SubmitHandler<CreateTransactionType>,
  formError?: string
}
const TransactionForm = (
  {mode, categories, form, onSubmit, formError }: TransactionFormProps
) => {

  const isEdit = mode == "edit" ? true : false;

  const categoryItems = categories?.map((category) => ({
    label: category.name,
    value: String(category.id),
    isActive: category.isActive
  }));
  

  const title = isEdit ? "Update Transaction" : "Create Transaction";
  const buttonText = isEdit ? "Update" : "Create"
  const loadingButtonText = isEdit ? "Updating" : "Creating"

  return (
    <>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={form.handleSubmit(onSubmit,(errors) => {
          console.log("Form Validation err",errors)
        })} className="space-y-2">
          <DialogHeader className='text-center'>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>


          <FieldGroup>
            <Controller
              name="type"
              control={form.control}
              render={({ field, fieldState }) => {
                const isInvalid = fieldState.invalid
                return (
                  <FieldSet>
                    <FieldLegend variant="label">Transaction Type</FieldLegend>

                    <RadioGroup
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                      aria-invalid={isInvalid}
                    >
                      <FieldLabel htmlFor="form-rhf-complex-basic">
                        <Field orientation="horizontal">
                          <FieldContent>
                            <FieldTitle>Income</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value="INCOME"
                            id="form-rhf-complex-basic"
                          />
                        </Field>
                      </FieldLabel>
                      <FieldLabel htmlFor="form-rhf-complex-pro">
                        <Field orientation="horizontal">
                          <FieldContent>
                            <FieldTitle>Expense</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value="EXPENSE"
                            id="form-rhf-complex-pro"
                          />
                        </Field>
                      </FieldLabel>
                    </RadioGroup>
                    {isInvalid && <FieldError errors={[fieldState.error]} />}
                  </FieldSet>
                )
              }}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="merchantName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Merchant Name</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type='text'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="categoryId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation="responsive"
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent>
                    <FieldLabel htmlFor="form-rhf-select-category">
                      Select Category
                    </FieldLabel>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                  <Select
                  items={categoryItems}
                    name={field.name}
                    value={field.value ? String(field.value) : ""}
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger
                      id="form-rhf-select-category"
                      aria-invalid={fieldState.invalid}
                      className="min-w-30"
                    >
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent >
                      {categoryItems?.map((item) => (
                        <SelectItem key={item.value} value={String(item.value)}
                        disabled={!item.isActive}>
                          {item.label}

                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>

            <FieldLabel>Amount</FieldLabel>
            <Input 
            {...form.register("amount", {
              valueAsNumber: true
            })}
              type='number'
              step={'any'}
            autoComplete=''
            />
             <FieldError>{form.formState.errors.amount?.message}</FieldError>
          </FieldGroup>
          <FieldGroup>
          <Controller
            name="transactionDate"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="transactionDate">
                  Transaction date
                </FieldLabel>

                <Input
                  id="transactionDate"
                  type="date"
                  value={
                    field.value
                      ? field.value.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => {
                    const value = e.target.value;

                    field.onChange(
                      value ? new Date(`${value}T00:00:00`) : undefined
                    );
                  }}
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          </FieldGroup>
<FieldGroup>
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-textarea-about">Description</FieldLabel>
                <Textarea
                  {...field}
                  id="form-rhf-textarea-about"
                  aria-invalid={fieldState.invalid}
                  placeholder=""
                // className="min-h-[120px]"
                />

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          </FieldGroup>
          <FieldError >{formError}</FieldError>


          <DialogFooter>
            <DialogClose render={<Button variant={"outline"}>Cancel</Button>} />
            <Button type='submit' disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? loadingButtonText : buttonText}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>

    </>
  )
}

export default TransactionForm