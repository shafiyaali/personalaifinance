import { prisma } from "@/lib/prisma";
import { CreateCategoryInput, deleteCategoryInput, UpdateCategoryInput } from "./types";
export async function createCategory(data: CreateCategoryInput) {
    
    return prisma.category.create({
        data
    })
}

export async function updateCategory(data:UpdateCategoryInput) {
    return prisma.category.update({
        where: {id: data.id},
        data: {name: data.name}
    })
}

export async function getAllCategories() {
    return prisma.category.findMany({
        orderBy:{
            name: "asc"
        }, include:{
            creator: true
        }
        // , where: {
        //     isActive: true
        // }
    })
}

export async function deactivateCategory(id: number) {
    return prisma.category.update({
        where:{id},
        data:{
            isActive: false
        }
    })
}

export async function countTransactions(id: number) {
    return prisma.transaction.count({
        where:{ categoryId: id}
    })
    
}
export async function findByName(name: string){
    return prisma.category.findUnique({
        where: {name},
    })

}

export async function findById(id:number){
    return prisma.category.findUnique({
        where: {id }
    })

}
