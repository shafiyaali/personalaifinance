import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { MonthlyTotalRaw } from "./types/dto";
// export type RawGroupedTotals = Prisma.PickEnumerable<Prisma.TransactionGroupByOutputType, 'type'>[];

// export type MonthlyTotalResultType = Awaited<ReturnType<typeof getMonthlyTotals>>;
// export async function getMonthlyTotals(userId: string){
//     return prisma.transaction.groupBy({
//         by:['type'],
//         _sum:{
//             amount: true,
//         },
//         where:{
//             userId,
//             transactionDate: {
//                 lte: new Date('2026-08-31T00:00:00Z'),
//                 gte: new Date('2026-08-01T00:00:00Z')
//             }
//         },
//     });
// }
export async function getMonthlyTotalResultType(userId :string, year: number) {
    return  prisma.$queryRaw<MonthlyTotalRaw[]>`
  SELECT
    EXTRACT(MONTH FROM "transactionDate")::int AS month,
    "type",
    SUM(amount)::float8 AS total
  FROM "Transaction"
  WHERE "userId" = ${userId}
    AND "transactionDate" >= ${new Date(`${year}-01-01T00:00:00Z`)}
    AND "transactionDate" < ${new Date(`${year + 1}-01-01T00:00:00Z`)}
  GROUP BY
    EXTRACT(MONTH FROM "transactionDate"),
    "type"
  ORDER BY month;
`;
}



export async function getExpenseByCategory(userId: string){
    return prisma.transaction.groupBy({
        by:['categoryId'],
     _sum:{
        amount:true
     }, where: {
        userId
     }

    })
}

export async function getRecentTransaction(userId: string){
    return prisma.transaction.findMany({
        where:{ userId},
        take: 5
    })
}