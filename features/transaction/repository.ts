import { prisma } from "@/lib/prisma";
import { CreateTransactionType, UpdateTransactionType } from "./types";

export function createTransaction(userId : string, data: CreateTransactionType) {
    return prisma.transaction.create({
        data :{
            userId:userId,
            ...data
        }
    })
}

export function updateTransaction(data: UpdateTransactionType) {
    return prisma.transaction.update({
        where:{ id: data.id},
        data
    })
}

export function getTransactions(userId: string) {
    return prisma.transaction.findMany({
        where: {userId},
        orderBy:{
            transactionDate:"desc"
        }
    })
}

export function findTransactionById(id: string) {
    return prisma.transaction.findUnique({
        where: {id}
    })
}

export function countTransactions(userId: string){
    return prisma.transaction.count({
        where: {userId}
    })
}
export function deleteTransaction(id: string){
    return prisma.transaction.delete({
        where:{id}
    })
}