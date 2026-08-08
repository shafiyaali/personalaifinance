"use client";
import React , {useState} from 'react'
import { Transaction } from '@/generated/prisma/client'
import { AppUser } from '@/types/AppUser'
import TransactionHeader from './transaction-header'
import TransactionToolbar from './transaction-toolbar'
import TransactionTable from './transaction-table'
import CreateTransactionDialog from './create-transaction-dialog';
import UpdateTransactionDialog from './update-transaction-dialog';
import { categoryType } from '@/features/category/types';
type TransactionFeatureProps = {
    transactions: Transaction[] |undefined,
    categories: categoryType[] | undefined
}
const TransactionFeatures = ({transactions, categories} : TransactionFeatureProps) => {
    
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [editOpen, setEditOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false)
  return (
    <>
         <TransactionHeader 
    onCreate = {() => setCreateOpen(true)}/>
    <TransactionToolbar />
    <TransactionTable 
        transactions = {transactions}
        categories = {categories}
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
    {/* <UpdateTransactionDialog 
        editOpen={editOpen}
            setEditOpen={setEditOpen}
            selectedTransaction ={selectedTransaction}
    /> */}
    </>
   
  )
}

export default TransactionFeatures