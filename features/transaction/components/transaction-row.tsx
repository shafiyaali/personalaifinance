import { TableCell, TableRow } from '@/components/ui/table'
import { TransactionDTO } from '../types/dto'
import TransactionActionDropdown from './transaction-action-dropdown'
type TransactionRowProps = {
  transaction: TransactionDTO,
  onEdit: (transaction: TransactionDTO) => void
}
const TransactionRow = ({transaction, onEdit}:TransactionRowProps) => {
    
  return (
    <>
            <TableRow key={transaction.id}>
                <TableCell>{transaction.transactionDate}</TableCell>
                <TableCell>{transaction.merchantName}</TableCell>
                <TableCell>{transaction.categoryName}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                
                <TableCell>{transaction.amount}</TableCell>
                <TableCell><TransactionActionDropdown transaction={transaction} onEdit={onEdit}/></TableCell>
            </TableRow>

    </>
  )
}

export default TransactionRow