
import { EllipsisVerticalIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const CategorgyActionDropdown = ({id}: {id: number}) => {
  return (
   <DropdownMenu>
    <DropdownMenuTrigger render={<EllipsisVerticalIcon />}/>
    <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>DeActivate</DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default CategorgyActionDropdown