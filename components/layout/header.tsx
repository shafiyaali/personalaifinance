"use client"
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Input } from '../ui/input'
import { BellIcon, MoonIcon , SearchIcon} from 'lucide-react'
import { Separator } from '../ui/separator'
const Header = () => {
  
  return (
    <><div className='sticky z-50 top-0'>
        <div className=" flex justify-between items-center gap-3 p-4">
            <SidebarTrigger className="md:hidden" />

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