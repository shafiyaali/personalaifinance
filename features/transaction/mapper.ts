import { Transaction } from "@/generated/prisma/client"
import { TransactionDTO } from "./types/dto"
export function toTransactionDTO(transaction: Transaction): TransactionDTO {
  return {
    id: transaction.id,
    type: transaction.type,
    amount: transaction.amount.toString(),
    merchantName: transaction.merchantName,
    transactionDate: transaction.transactionDate.toISOString(),
    description: transaction.description,
    categoryId: transaction.categoryId,
  }
}