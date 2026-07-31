import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Input } from '../ui/input'
import { BellIcon, MoonIcon , SearchIcon} from 'lucide-react'
import { Controller } from 'react-hook-form'
import { Separator } from '../ui/separator'
const Header = () => {
  return (
    <><div className='sticky'>
        <div className="bg-#FAFAFA flex justify-between items-center gap-3 p-4">
            

        <Input type='text' placeholder='Search transaction' />
        <SearchIcon />
        <MoonIcon />
    <BellIcon />


        </div>
    </div>
    <Separator />
        
       
    </>
  )
}

export default Header