"use server"
import { revalidatePath } from "next/cache";
import { createTransactionSchema, updateTransactionSchema } from "./schemas";
import { createTransactionService, getTransactionService, updateTransactionService } from "./service";
import { CreateTransactionType, UpdateTransactionType } from "./types";
import { ActionResult } from "@/types/action-result";
import { Transaction } from "@/generated/prisma/client";

export async function createTransactionAction(data: CreateTransactionType): Promise<ActionResult>{

    const validated = createTransactionSchema.safeParse(data);
    if(!validated.success){
        return {
                success: false,
                errors : validated.error.flatten().fieldErrors,
                message: "Validation failed"
            }
        }
        try {
            await createTransactionService(validated.data) 
            revalidatePath("/transaction")
            return {
                success: true,
                message: "Transaction created successfully"
            }
             
        } catch (error) {
            
            return{
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong",
                
            }
        }

}

export async function getTransactionAction():Promise<ActionResult<Transaction[]>> {
    
        try {
            const transactions = await getTransactionService() 
            
            return {
                success: true,
                data: transactions,
                message: "Transaction fetched successfully"
            }
             
        } catch (error) {
            
            return{
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong",
                
            }
        }
}

export async function updateTransactionAction(data:UpdateTransactionType): Promise<ActionResult> {
    const validated = updateTransactionSchema.safeParse(data);
    if(!validated.success){
        return {
                success: false,
                errors : validated.error.flatten().fieldErrors,
                message: "Validation failed"
            }
        }
        try {
            await updateTransactionService(validated.data) 
            revalidatePath("/transaction")
            return {
                success: true,
                message: "Transaction updated successfully"
            }
             
        } catch (error) {
            
            return{
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong",
                
            }
        }
}