import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { PaginationType } from '@/types/Pagination'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
const TransactionPagination = ({pagination} : {pagination: PaginationType}) => {

     const searchParams = useSearchParams();
              const pathname = usePathname();
            const { replace } = useRouter();
    const {page, pageSize, total, totalPages} = pagination;
    const createPageUrl = (pageNumber : number) => {
        
    const params = new URLSearchParams(searchParams);
        params.set('page', String(pageNumber))
        replace(`${pathname}?${params.toString()}`);
    }
    
    // replace(`${pathname}?${params.toString()}`);
  return (
   <Pagination>
    <PaginationContent>
        <PaginationItem>
            <PaginationPrevious 
            onClick={()=>{createPageUrl(Math.max(1,page-1))}}
            className={page <= 1 ? "pointer-events-none": "" }/>
        </PaginationItem>

 {/* First Page */}
        <PaginationItem>
          <PaginationLink onClick={() => createPageUrl(1)} isActive={page === 1}>
            1
          </PaginationLink>
        </PaginationItem>

        {/* Left Ellipsis */}
        {page > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Center Active Page Pages */}
        {page > 2 && page < totalPages && (
          <PaginationItem>
            <PaginationLink onClick={() => createPageUrl(page)} isActive>
              {page}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Right Ellipsis */}
        {page < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
            <PaginationNext
            onClick={() => {createPageUrl(Math.min(totalPages,page+1))}}
            className={page >= totalPages ? "pointer-events-none": "" }/>
        </PaginationItem>

    </PaginationContent>
   </Pagination>
  )
}

export default TransactionPagination