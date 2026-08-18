import { getCurrentUser } from "@/lib/current-user";
import { getExpenseByCategory, getMonthlyTotalResultType, getRecentTransaction } from "./repository";
import { MonthlyTotalsDTO } from "./types/dto";
import { string } from "zod";
import { toMonthlyTotalsDTO } from "./mapper";
export async function getDashboardDeltailsService() {

    const user = await getCurrentUser();
    const userId= user.id;

    const transactions  = await  getMonthlyTotalResultType(userId, 2026);
    return toMonthlyTotalsDTO(transactions);

  
  
}


// export async function getExpenseByCategoryService(){
//     const user = await getCurrentUser();
//     return getExpenseByCategory(user.id);
// }

// export async function getRecentTransactionService(){
//     const user = await getCurrentUser();
//     return get
// }