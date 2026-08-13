import { TransactionDTO } from "./types/dto"
import { CreateTransactionType, transactionWithCategory, UpdateTransactionType } from "./types"
export function  toTransactionDTO(transaction: transactionWithCategory): TransactionDTO {
  return {
    id: transaction.id,
    type: transaction.type,
    amount: transaction.amount.toString(),
    merchantName: transaction.merchantName,
    transactionDate: transaction.transactionDate.toISOString().split("T")[0],
    description: transaction.description,
    categoryId: transaction.categoryId,
    categoryName: transaction.category.name
  }
}

export function toUpdateTransactionForm(transaction: TransactionDTO): CreateTransactionType {
  return {
    // id: transaction.id,
    type: transaction.type,
    amount: Number(transaction.amount),
    merchantName: transaction.merchantName ?? undefined,
    transactionDate: new Date(`${transaction.transactionDate}T00:00:00`),
    description: transaction.description ?? undefined,
    categoryId: transaction.categoryId,
  }
}