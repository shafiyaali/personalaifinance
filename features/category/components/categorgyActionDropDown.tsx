import React from 'react'
import { EllipsisVerticalIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
const CategorgyActionDropdown = ({id}: {id: number}) => {
  return (
   <DropdownMenu>
    <DropdownMenuTrigger render={<Button variant={'ghost'}><EllipsisVerticalIcon /></Button>}/>
    <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>DeActivate</DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default CategorgyActionDropdown