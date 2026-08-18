import React from 'react'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Select, SelectContent, SelectTrigger,SelectValue, SelectItem } from '@/components/ui/select'
const TypeFilter = () => {
    const searchParams = useSearchParams();
          const pathname = usePathname();
        const { replace } = useRouter();
        // const currentType= searchParams.get('type') || undefined;
    const items = [
        {label: "ALL", value:"ALL"},
        {label: "INCOME", value: "INCOME"},
        {label: "EXPENSE", value: "EXPENSE"}
    ]

    const  handleFilter = (term: string | null)  => {
    const params = new URLSearchParams(searchParams);
    if(term && term != "ALL") {
      params.set('type', term)
    } else {
      params.delete('type')
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Select items={items} defaultValue={"ALL"} onValueChange={handleFilter}>
  <SelectTrigger className="w-45">
    <SelectValue placeholder="Category" />
  </SelectTrigger>
  <SelectContent>
      {items.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
  </SelectContent>
</Select>
  )
}

export default TypeFilter