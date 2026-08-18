import { getCurrentUser } from "@/lib/current-user";
import {  getMonthlyTotalResultType} from "./repository";
import { toMonthlyTotalsDTO } from "./mapper";
export async function getDashboardDeltailsService() {

    const user = await getCurrentUser();
    const userId= user.id;
    const year = new Date().getFullYear();
    const transactions  = await  getMonthlyTotalResultType(userId, year);
    return toMonthlyTotalsDTO(transactions);

  
  
}

