"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { time: "00:00", payment: 224 },
    { time: "03:00", payment: 186 },
    { time: "06:00", payment: 305 },
    { time: "09:00", payment: 237 },
    { time: "12:00", payment: 73 },
    { time: "15:00", payment: 209 },
    { time: "18:00", payment: 214 },
    { time: "21:00", payment: 534 },
    { time: "24:00", payment: 534 },
]

const chartConfig = {
    transaction: {
        label: "Time",
        color: "(var(--primary-color))",
    },
} satisfies ChartConfig

export function DailyRevenueChart() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Transactions Chart</CardTitle>
                <CardDescription>
                    Showing Daily Transaction Volume
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-65 w-full">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}

                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="payment"
                            type="natural"
                            fill="var(--primary-color)"
                            fillOpacity={0.4}
                            stroke="var(--primary-color)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
