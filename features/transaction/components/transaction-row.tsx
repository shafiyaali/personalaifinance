import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { Transaction } from '@/generated/prisma/client'
import { formatDate } from '@/utils/formatDate'
import { categoryType } from '@/features/category/types'
import { TransactionDTO } from '../types/dto'
const TransactionRow = ({transaction, categories}:{transaction: TransactionDTO, categories: categoryType[] | undefined}) => {
    const selectedCategory = categories?.find(category => category.id == transaction.categoryId)
  return (
    <>
            <TableRow key={transaction.id}>
                <TableCell>{transaction.transactionDate}</TableCell>
                <TableCell>{transaction.merchantName}</TableCell>
                <TableCell>{selectedCategory?.name}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                
                <TableCell>{transaction.amount}</TableCell>
            </TableRow>

    </>
  )
}

export default TransactionRow