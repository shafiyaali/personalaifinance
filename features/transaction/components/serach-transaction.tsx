import React from 'react'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/components/ui/input-group'
import { SearchIcon } from 'lucide-react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Field } from '@/components/ui/field'
import {useDebouncedCallback } from 'use-debounce'
const SearchTransaction = () => {

  const searchParams = useSearchParams();
    const pathname = usePathname();
  const { replace } = useRouter();

  const  handleSearch =useDebouncedCallback( (term: string)  => {
    const params = new URLSearchParams(searchParams);
    if(term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <>
    <Field className="max-w-sm">
      <InputGroup>
        <InputGroupInput 
        onChange={(e) => {
          handleSearch(e.target.value)
        }}

        
        id="inline-start-input" placeholder="Search Merchant..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
      
</>
  )
}

export default SearchTransaction