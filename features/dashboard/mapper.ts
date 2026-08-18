import { MonthlyTotalRaw, MonthlyTotalsDTO } from "./types/dto";

export function toMonthlyTotalsDTO(result: MonthlyTotalRaw[]): MonthlyTotalsDTO[]{
    const monthlyTotals: MonthlyTotalsDTO[] = Array.from(
    { length: 12 },
    (_, index) => ({
      month: index + 1,
      income: 0,
      expense: 0,
    })
  );

  for (const item of result) {
    const monthlyTotal = monthlyTotals[item.month - 1];

    if (item.type === "INCOME") {
      monthlyTotal.income = item.total;
    } else if (item.type === 'EXPENSE') {
      monthlyTotal.expense = item.total;
    }
  }

  return monthlyTotals;
}