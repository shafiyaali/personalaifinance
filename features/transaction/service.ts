import { getCurrentUser } from "@/lib/current-user";
import { CreateTransactionType, UpdateTransactionType } from "./types";
import { findCategoryById } from "../category/repository";
import { createTransaction, deleteTransaction, findTransactionById, getTransactions, updateTransaction } from "./repository";

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

export async function getTransactionService(){
    const user = await getCurrentUser()
    return getTransactions(user.id)
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