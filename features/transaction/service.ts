import { getCurrentUser } from "@/lib/current-user";
import { CreateTransactionType, TransactionQueryParamsTypes, UpdateTransactionType } from "./types";
import { findCategoryById } from "../category/repository";
import { countTransactions, createTransaction, deleteTransaction, findTransactionById, getTransactions, updateTransaction } from "./repository";
import { toTransactionDTO } from "./mapper";

import { PaginatedTransactionsTypes } from "./types";
export async function createTransactionService(data: CreateTransactionType){
    const user =await getCurrentUser();
    const category = await findCategoryById(data.categoryId)
    if(!category) {
        throw new Error ("No Category found")
    }
    if(!category?.isActive) {
        throw new Error("Category is InActive")
    }
    return createTransaction(user.id, data)

}

export async function updateTransactionService(data:UpdateTransactionType) {
    const user =await getCurrentUser();
    const transaction = await findTransactionById(data.id)
    if(!transaction){
        throw new Error("No transaction Found");
    }
    if(transaction.userId !== user.id){
        throw new Error("Not Authorized")
    }
    if(transaction.categoryId !== data.categoryId) {
        const category = await findCategoryById(data.categoryId)
        if(!category) {
            throw new Error ("No Category found")
        }
        if(!category?.isActive) {
            throw new Error("Category is InActive")
        }
    }
    return updateTransaction(data)
}

export async function getTransactionService(filters: TransactionQueryParamsTypes) : Promise<PaginatedTransactionsTypes>{

    const user = await getCurrentUser();
    const skip = (filters.page - 1) * filters.pageSize;
    const take = filters.pageSize;
    const [transactions, totalTransactions ]= await Promise.all([getTransactions(user.id, filters, skip, take ), countTransactions(user.id, filters)]);
    const DTOTransactions = transactions.map(transaction => toTransactionDTO(transaction));

    return {
        items : DTOTransactions, pagination : {
           page:  filters.page,
           pageSize: filters.pageSize,
           total: totalTransactions,
           totalPages: Math.ceil(totalTransactions/filters.pageSize)
    }
}
}

export async function deleteTransactionService(id: string) {
    const user =await getCurrentUser();
    const transaction = await findTransactionById(id)
    if(!transaction){
        throw new Error("No transaction Found");
    }
    if(transaction.userId !== user.id){
        throw new Error("Not Authorized")
    }
    return deleteTransaction(id)
}