import React from 'react'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/components/ui/input-group'
import { Search, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
const TransactionToolbar = () => {
  return (
     <div className='p-2 md:p-4 flex justify-between'>
        <div className='w-full'>
            <InputGroup>
        <InputGroupInput placeholder="Search Transaction..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>    
        </div>
        <div className="flex justify-between">
            <Button variant={"ghost"}>
                 Date <ArrowDown />
            </Button>
            <Button variant={"ghost"}>
                Category <ArrowDown />
            </Button>
            <Button variant={"ghost"}>
                Types <ArrowDown />
            </Button>
            <Button variant={"ghost"}>
                Sort <ArrowDown />
            </Button>
        </div>

    </div>
  )
}

export default TransactionToolbar