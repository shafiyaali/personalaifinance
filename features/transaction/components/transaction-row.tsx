import { TableCell, TableRow } from '@/components/ui/table'
import { TransactionDTO } from '../types/dto'
import { EllipsisVerticalIcon } from 'lucide-react'
const TransactionRow = ({transaction}:{transaction: TransactionDTO}) => {
    
  return (
    <>
            <TableRow key={transaction.id}>
                <TableCell>{transaction.transactionDate}</TableCell>
                <TableCell>{transaction.merchantName}</TableCell>
                <TableCell>{transaction.categoryName}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                
                <TableCell>{transaction.amount}</TableCell>
                <TableCell><EllipsisVerticalIcon /></TableCell>
            </TableRow>

    </>
  )
}

export default TransactionRow