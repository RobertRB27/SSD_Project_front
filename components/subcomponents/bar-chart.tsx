"use client"

import { TrendingUp } from "lucide-react"
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
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, tablet: 80 },
  { month: "February", desktop: 305, mobile: 200, tablet: 180 },
  { month: "March", desktop: 237, mobile: 120, tablet: 97 },
  { month: "April", desktop: 73, mobile: 190, tablet: 180 },
  { month: "May", desktop: 209, mobile: 130, tablet: 280 },
  { month: "June", desktop: 214, mobile: 140, tablet: 210 },
]

const chartConfig = {
  desktop: {
    label: "Chicken Eggs SM",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Chicken Eggs MD",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Quali Eggs",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function BarChartProduct() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas por producto</CardTitle>
        <CardDescription>Enero - Junio</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Total de ventas por producto seleccionado
        </div>
      </CardFooter>
    </Card>
  )
}
