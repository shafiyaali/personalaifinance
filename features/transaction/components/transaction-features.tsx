"use client";
import React , {useState} from 'react'
import TransactionHeader from './transaction-header'
import TransactionToolbar from './transaction-toolbar'
import TransactionTable from './transaction-table'
import CreateTransactionDialog from './create-transaction-dialog';
import UpdateTransactionDialog from './update-transaction-dialog';
import { categoryType } from '@/features/category/types';
import { TransactionDTO } from '../types/dto';
type TransactionFeatureProps = {
    transactions: TransactionDTO[] |undefined,
    categories: categoryType[] | undefined
}
const TransactionFeatures = ({transactions, categories} : TransactionFeatureProps) => {
    
    const [selectedTransaction, setSelectedTransaction] = useState<TransactionDTO>();
    const [editOpen, setEditOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false)
  return (
    <>
         <TransactionHeader 
    onCreate = {() => setCreateOpen(true)}/>
    <TransactionToolbar />
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
    {selectedTransaction &&
       <UpdateTransactionDialog 
    categories={categories}
        open={editOpen}
            onOpenChange={setEditOpen}
            selectedTransaction ={selectedTransaction}
    />

    }
   
    </>
   
  )
}

export default TransactionFeatures