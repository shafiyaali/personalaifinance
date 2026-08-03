"use client"
import { SidebarTrigger } from '../ui/sidebar'
import { Input } from '../ui/input'
import { BellIcon, MoonIcon , SearchIcon} from 'lucide-react'
import { Separator } from '../ui/separator'
import { InputGroup, InputGroupInput, InputGroupAddon } from '../ui/input-group'
const Header = () => {
  
  return (
    <><div className='sticky z-50 top-0'>
        <div className=" flex justify-between items-center gap-3 p-4">
            <SidebarTrigger className="md:hidden" />

          <InputGroup>
        <InputGroupInput placeholder="Search Transactions" />
        <InputGroupAddon align={'inline-end'}>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
        {/* <SearchIcon /> */}
        <MoonIcon />
    <BellIcon />


        </div>
    </div>
    <Separator />
        
       
    </>
  )
}

export default Header