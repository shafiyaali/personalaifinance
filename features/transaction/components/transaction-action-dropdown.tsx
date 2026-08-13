import { EllipsisVerticalIcon } from "lucide-react"
import { TransactionDTO } from "../types/dto"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { deleteTransactionAction } from "../actions"

type TransactionActionProps = {
  transaction: TransactionDTO,
  onEdit : (transaction: TransactionDTO) => void

}
const TransactionActionDropdown
 = ({ transaction, onEdit }: TransactionActionProps) => {


  const handleDelete = async () => {
    if(confirm("Do you want to permanently delete this transaction?"))
    {  
       await deleteTransactionAction(transaction.id)
    }
  }

  return (
    <>

    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant={'ghost'}><EllipsisVerticalIcon /></Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() =>onEdit(transaction)}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default TransactionActionDropdown
