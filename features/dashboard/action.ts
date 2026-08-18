'use server';

import { ActionResult } from "@/types/action-result";
import { getDashboardDeltailsService } from "./service";
import { MonthlyTotalsDTO } from "./types/dto";

export async function getDashboardAction(): Promise<ActionResult<MonthlyTotalsDTO[]>>{

   
    try{
         const dashboardDetails = await getDashboardDeltailsService();

         return {
        success: true,
        data: dashboardDetails
    }
    } catch(error) {
         return{
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong",
                
            }
    }
   
}