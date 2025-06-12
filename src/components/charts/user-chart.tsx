"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

interface UserChartAttribute {
    month: string,
    male: number,
    female: number
}

export default function UserChart({ userData }: { userData: UserChartAttribute[] }) {
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
                        data={userData}
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
