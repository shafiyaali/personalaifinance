"use client";
import React , {useState} from 'react'
import TransactionHeader from './transaction-header'
import TransactionToolbar from './transaction-toolbar'
import TransactionTable from './transaction-table'
import CreateTransactionDialog from './create-transaction-dialog';
import UpdateTransactionDialog from './update-transaction-dialog';
import { categoryType } from '@/features/category/types';
import { TransactionDTO } from '../types/dto';
import TransactionPagination from './transaction-pagination';
import { PaginationType } from '@/types/Pagination';
type TransactionFeatureProps = {
    transactions: TransactionDTO[] |undefined,
    categories: categoryType[] | undefined,
    pagination: PaginationType | undefined
}
const TransactionFeatures = ({transactions, categories, pagination} : TransactionFeatureProps) => {
    
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionDTO>();
    const [editOpen, setEditOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false)
  return (
    <>
         <TransactionHeader 
    onCreate = {() => setCreateOpen(true)}/>
    <TransactionToolbar categories={categories} />
    <TransactionTable 
        transactions = {transactions}
         onEdit={(transaction)=> {
        setSelectedTransaction(transaction)
        setEditOpen(true)
      }}
    />
    <CreateTransactionDialog 
    categories={categories}
        open = {createOpen}
        onOpenChange = {setCreateOpen}
    />
       <UpdateTransactionDialog 
    categories={categories}
        open={editOpen}
            onOpenChange={setEditOpen}
            selectedTransaction ={selectedTransaction}
    />
{pagination &&
  <TransactionPagination 
    pagination = {pagination}/>

   
   
}
     </>
   
  )
}

export default TransactionFeatures