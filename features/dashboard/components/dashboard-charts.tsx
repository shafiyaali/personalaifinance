import React from 'react'
import { MonthlyTotalsDTO } from '../types/dto'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
type ChartType = {
    monthlyTransactionDetails : MonthlyTotalsDTO[] | undefined
}
const DashboardCharts = ({monthlyTransactionDetails}: ChartType) => {

   
    const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  expense: {
    label: "Expense",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig
  return (
     <Card size={'sm'}>
      <CardHeader>
        <CardTitle>Bar Chart - Income vs Expense</CardTitle>
        <CardDescription>January - December 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={monthlyTransactionDetails}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            //   tickFormatter={}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       
        <div className="leading-none text-muted-foreground">
          Showing total Income and Expense of this year via Bar Chart
        </div>
      </CardFooter>
    </Card>
  )
}

export default DashboardCharts