import { prisma } from "@/lib/prisma";
import { CreateTransactionType, TransactionQueryParamsTypes, UpdateTransactionType } from "./types";
import { Prisma } from "@/generated/prisma/client";
export function createTransaction(userId: string, data: CreateTransactionType) {
    return prisma.transaction.create({
        data: {
            userId: userId,
            ...data
        }
    })
}

export function updateTransaction(data: UpdateTransactionType) {
    return prisma.transaction.update({
        where: { id: data.id },
        data
    })
}

export function getTransactions(userId: string, filters: TransactionQueryParamsTypes, skip:number, take: number ) {
    
    return prisma.transaction.findMany({
        where: whereConditions(userId,filters),
        skip,
        take,
        orderBy: {
            transactionDate: "desc"
        },
        ...transactionWithCategory
    })
}

export function getPaginatedTransactions (){
    // const [total , transactions] = Promise.all()
} 
export function findTransactionById(id: string) {
    return prisma.transaction.findUnique({
        where: { id }
    })
}

export function countTransactions(userId: string, filters: TransactionQueryParamsTypes) {
    return prisma.transaction.count({
        where: whereConditions(userId, filters)
    })
}
export function deleteTransaction(id: string) {
    return prisma.transaction.delete({
        where: { id }
    })
}

export const transactionWithCategory = {
  select: {
    id: true,
    type: true,
    amount: true,
    merchantName: true,
    transactionDate: true,
    description: true,
    categoryId: true,
    category: {
        select: {
            name: true
        } 
    },
  },
} satisfies Prisma.TransactionFindManyArgs;
const whereConditions = (userId: string, filters: TransactionQueryParamsTypes) => {

    return {
        userId,
        ...(filters.categoryId) && {categoryId: filters.categoryId},
        ...(filters.type) && {type: filters.type} 
    }
}
