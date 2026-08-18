
export type MonthlyTotalRaw = {
    month: number,
    type: "INCOME" | "EXPENSE",
    total: number
}
export type MonthlyTotalsDTO = {
    month: number
    income: number,
    expense: number
}

export type expenseByCategory = {
    categoryId: number,
    expense: string,
}

