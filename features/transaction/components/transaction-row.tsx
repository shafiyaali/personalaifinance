import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { Transaction } from '@/generated/prisma/client'
import { formatDate } from '@/utils/formatDate'
import { categoryType } from '@/features/category/types'
const TransactionRow = ({transaction, categories}:{transaction: Transaction, categories: categoryType[] | undefined}) => {
    const selectedCategory = categories?.find(category => category.id == transaction.categoryId)
  return (
    <>
            <TableRow key={transaction.id}>
                <TableCell>{formatDate(transaction.transactionDate)}</TableCell>
                <TableCell>{transaction.merchantName}</TableCell>
                <TableCell>{selectedCategory?.name}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount.toFixed(2)}</TableCell>
            </TableRow>

    </>
  )
}

export default TransactionRow