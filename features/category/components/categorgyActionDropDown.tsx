"use client"
import { EllipsisVerticalIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { deactivateCategoryAction } from '../actions'
import { Category } from '@/generated/prisma/client'
import { Button } from '@/components/ui/button'

type ActionProps = {
  category: Category,
  onEdit : (category: Category) => void

}
const CategorgyActionDropdown = ({ category, onEdit }: ActionProps) => {


  const handledeActivate = async () => {
    if(confirm("Are you sure?"))
    {  
    await deactivateCategoryAction(category.id)
    }
  }

  return (
    <>

    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant={'ghost'}><EllipsisVerticalIcon /></Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem disabled={!category.isActive} onClick={() =>onEdit(category)}>Edit</DropdownMenuItem>
        <DropdownMenuItem disabled={!category.isActive} onClick={handledeActivate}>Deactivate</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default CategorgyActionDropdown