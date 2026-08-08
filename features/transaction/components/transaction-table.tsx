import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { categoryType } from '@/features/category/types'
import { Transaction } from '@/generated/prisma/client'
import { formatDate } from '@/utils/formatDate'
import React from 'react'
import TransactionRow from './transaction-row'

type TableProps = {
  transactions: Transaction[] | undefined,
  categories : categoryType[] | undefined,
  onEdit : (transaction: Transaction) => void,
 }
const TransactionTable = ({transactions, categories, onEdit} : TableProps) => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Merchant</TableHead>
                <TableHead>Catgegory</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
             {transactions?.length == 0 && <TableRow > 
                                  <TableCell className={"text-center"} colSpan={5} >No Transactions found. Create your first Transaction
            
            
                                  </TableCell>
                                </TableRow>}
                        {transactions && transactions.map( transaction => (
                            <TransactionRow key={transaction.id}
                            transaction={transaction}
                            categories = {categories} />
                        ))}

        </TableBody>
    </Table>
  )
}

export default TransactionTable