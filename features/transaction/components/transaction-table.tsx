import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { Transaction } from '@/generated/prisma/client'
import React from 'react'
import TransactionRow from './transaction-row'
import { TransactionDTO } from '../types/dto'

type TableProps = {
  transactions: TransactionDTO[] | undefined,
  onEdit : (transaction: Transaction) => void,
 }
const TransactionTable = ({transactions,  onEdit} : TableProps) => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Merchant</TableHead>
                <TableHead>Catgegory</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Actions</TableHead>
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
                             />
                        ))}

        </TableBody>
    </Table>
  )
}

export default TransactionTable