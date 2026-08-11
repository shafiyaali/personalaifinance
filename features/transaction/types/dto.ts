// features/transaction/types/dto.ts

export type TransactionDTO = {
  id: string
  type: "INCOME" | "EXPENSE"
  amount: string
  merchantName: string | null
  transactionDate: string
  description: string | null
  categoryId: number
}