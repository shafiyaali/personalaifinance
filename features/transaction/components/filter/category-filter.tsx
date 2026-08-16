import React, { useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Category } from '@/generated/prisma/client'
import { Select,SelectTrigger, SelectItem,SelectContent,SelectValue } from '@/components/ui/select'
const CategoryFilter =  ({categories}: {categories: Category[] | undefined}) => {
   const searchParams = useSearchParams();
      const pathname = usePathname();
    const { replace } = useRouter();
    const currentCategory = searchParams.get('categoryId') || undefined;
      const items = categories?.map((category) => ({
    label: category.name,
    value: String(category.id),
    isActive: category.isActive
  }));
  
const  handleFilter = (term: string | null)  => {
    const params = new URLSearchParams(searchParams);
    if(term && term != "ALL") {
      params.set('categoryId', term)
    } else {
      params.delete('categoryId')
    }
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    items?.push({
      label: "ALL",
      value: "ALL",
      isActive: false
    })
  },[]);

  return (
   <Select items={items} defaultValue={"ALL"}  onValueChange={handleFilter}>
  <SelectTrigger className="w-45">
    <SelectValue placeholder="Category" />
  </SelectTrigger>
  <SelectContent>
    
      {items && items.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
  </SelectContent>
</Select>
  )
}

export default CategoryFilter