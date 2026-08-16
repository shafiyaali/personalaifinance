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
const TransactionPagination = ({pagination} : {pagination: PaginationType}) => {

    const {page, pageSize, total, totalPages} = pagination;
    const createPageUrl = (pageNumber : number) => `?page=${pageNumber}`;
    
  return (
   <Pagination>
    <PaginationContent>
        <PaginationItem>
            <PaginationPrevious 
            href={createPageUrl(Math.max(1,page-1))}
            className={page <= 1 ? "pointer-events-none": "" }/>
        </PaginationItem>

 {/* First Page */}
        <PaginationItem>
          <PaginationLink href={createPageUrl(1)} isActive={page === 1}>
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
            <PaginationLink href={createPageUrl(page)} isActive>
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
            href={createPageUrl(Math.min(totalPages,page+1))}
            className={page >= totalPages ? "pointer-events-none": "" }/>
        </PaginationItem>

    </PaginationContent>
   </Pagination>
  )
}

export default TransactionPagination