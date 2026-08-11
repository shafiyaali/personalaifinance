import { TransactionDTO } from "./types/dto"
import { transactionWithCategory } from "./types"
export function  toTransactionDTO(transaction: transactionWithCategory): TransactionDTO {
  return {
    id: transaction.id,
    type: transaction.type,
    amount: transaction.amount.toString(),
    merchantName: transaction.merchantName,
    transactionDate: transaction.transactionDate.toISOString(),
    description: transaction.description,
    categoryId: transaction.categoryId,
    categoryName: transaction.category.name
  }
}