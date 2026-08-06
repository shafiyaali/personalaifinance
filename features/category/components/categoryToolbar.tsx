import { Button } from '@/components/ui/button'
import { ArrowDown, Search } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import React from 'react'

const CategoryToolbar = () => {
  return (
<>

    
    <div className='p-2 md:p-4 flex justify-between'>
        <div className='w-full'>
            <InputGroup>
        <InputGroupInput placeholder="Search Categories..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>    
        </div>
        <div className="flex justify-between">
            <Button variant={"ghost"}>
                Status <ArrowDown />
            </Button>
            <Button variant={"ghost"}>
                Sort <ArrowDown />
            </Button>
        </div>

    </div>
    

</>
  )
}

export default CategoryToolbar