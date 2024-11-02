"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A multiple line chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, other: 280 },
  { month: "February", desktop: 305, mobile: 200, other: 380 },
  { month: "March", desktop: 237, mobile: 120, other: 480 },
  { month: "April", desktop: 73, mobile: 190, other: 80 },
  { month: "May", desktop: 209, mobile: 130, other: 680 },
  { month: "June", desktop: 214, mobile: 140, other: 180 },
]

const chartConfig = {
  desktop: {
    label: "Ambato",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Manta",
    color: "hsl(var(--chart-2))",
  },
  other: {
    label: "Quevedo",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function LineChartCity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas por Ciudad</CardTitle>
        <CardDescription>Enero - Junio</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="other"
              type="monotone"
              stroke="var(--color-other)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Total de ventas por ciudad seleccionada
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
