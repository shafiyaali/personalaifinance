import { getAllCategoriesAction } from '@/features/category/actions';
import { getTransactionAction } from '@/features/transaction/actions'
import TransactionFeatures from '@/features/transaction/components/transaction-features';
import { getCurrentUser } from '@/lib/current-user';
import React from 'react'

const page = async () => {

  const transactions = (await getTransactionAction()).data;
  // const user = await getCurrentUser();
  const categories = (await getAllCategoriesAction()).data;
  return (
  <TransactionFeatures 
  transactions = {transactions}
  categories = {categories}
  // user={user}
  />
  )
}

export default page