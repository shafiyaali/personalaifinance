import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import React from 'react'
import TransactionRow from './transaction-row'
import { TransactionDTO } from '../types/dto'

type TableProps = {
  transactions: TransactionDTO[] | undefined,
  onEdit : (transaction: TransactionDTO) => void,
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
                                  <TableCell className={"text-center"} colSpan={5} >No Transactions found
            
            
                                  </TableCell>
                                </TableRow>}
                        {transactions && transactions.map( transaction => (
                            <TransactionRow key={transaction.id}
                            transaction={transaction}
                            onEdit={onEdit}
                             />
                        ))}

        </TableBody>
    </Table>
  )
}

export default TransactionTable