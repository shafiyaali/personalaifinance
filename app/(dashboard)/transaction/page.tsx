import { getAllCategoriesAction } from '@/features/category/actions';
import { getTransactionAction } from '@/features/transaction/actions'
import TransactionFeatures from '@/features/transaction/components/transaction-features';
import { getCurrentUser } from '@/lib/current-user';
import React from 'react'

const page = async () => {

  const transactions = (await getTransactionAction()).data;
  const categories = (await getAllCategoriesAction()).data;
  return (
  <TransactionFeatures 
  transactions = {transactions}
  categories = {categories}
  />
  )
}

export default page