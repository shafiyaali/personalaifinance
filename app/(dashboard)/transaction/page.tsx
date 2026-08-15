import { getAllCategoriesAction } from '@/features/category/actions';
import { getTransactionAction } from '@/features/transaction/actions'
import TransactionFeatures from '@/features/transaction/components/transaction-features';
import { TransactionQueryParamsTypes } from '@/features/transaction/types';

export default async function Page (props: {
  searchParams?: Promise<{
    categoryId?: number;
    type? :"INCOME" | "EXPENSE";
    search?:string;
    page?: number;
    pageSize?: number;
  }>
}) {
 const searchParams = await props.searchParams;
 
  const filters: TransactionQueryParamsTypes = {
    categoryId: searchParams?.categoryId,
    search: searchParams?.search,
    type: searchParams?.type || undefined,
    page: searchParams?.page || 1,
    pageSize: searchParams?.pageSize || 10
  }

  const transactions = (await getTransactionAction(filters)).data?.items;
  const categories = (await getAllCategoriesAction()).data;

  return (
  <TransactionFeatures 
  transactions = {transactions}
  categories = {categories}
  />
  )
}

