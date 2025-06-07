"use client"

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
const chartData = [
    { month: "January", male: 186, female: 80 },
    { month: "February", male: 305, female: 200 },
    { month: "March", male: 237, female: 120 },
    { month: "April", male: 73, female: 190 },
    { month: "May", male: 209, female: 130 },
    { month: "June", male: 214, female: 140 },
    { month: "July", male: 214, female: 140 },
    { month: "August", male: 214, female: 140 },
    { month: "October", male: 214, female: 140 },
    { month: "November", male: 214, female: 140 },
    { month: "December", male: 214, female: 140 },
]

const chartConfig = {
    male: {
        label: "Laki-laki",
        color: "hsl(var(--chart-1))",
    },
    female: {
        label: "Perempuan",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function UserChart() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>User by Gender Count</CardTitle>
                <CardDescription>Overall</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-65 w-full">
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
                            dataKey="male"
                            type="monotone"
                            stroke="#3B82F6"
                            strokeWidth={2}
                            dot={true}
                        />
                        <Line
                            dataKey="female"
                            type="monotone"
                            stroke="#EC4899"
                            strokeWidth={2}
                            dot={true}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
