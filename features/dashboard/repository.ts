import { prisma } from "@/lib/prisma";
import { MonthlyTotalRaw } from "./types/dto";

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



