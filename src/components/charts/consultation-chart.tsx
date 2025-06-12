"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface ChartDataAttribute {
    date: string,
    total: number
}

const chartConfig = {
    sumConsultations: {
        label: "Jumlah Konsultasi",
        color: "var(--primary-color)",
    },
} satisfies ChartConfig

export default function ConsultationChart({ chartData }: { chartData: ChartDataAttribute[] }) {
    const [timeRange, setTimeRange] = React.useState("30d")

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date);
        const referenceDate = new Date(Date.now());

        let daysToSubtract = 30;
        if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })

    return (
        <Card className="mt-3">
            <CardHeader className="flex items-center gap-2 space-y-0 border- py-5 sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>Grafik Data Konsultasi</CardTitle>
                    <CardDescription>
                        Menampilkan data konsultasi per harinya selama {timeRange === "7d" ? "7 hari" : "30 hari"} ke belakang
                    </CardDescription>
                </div>

                <Select value={timeRange} onValueChange={setTimeRange} >
                    <SelectTrigger
                        className="w-[160px] rounded-lg sm:ml-auto"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="30d" className="rounded-lg">
                            Last 30 days
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            Last 7 days
                        </SelectItem>
                    </SelectContent>
                </Select>

            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
                    <BarChart
                        accessibilityLayer
                        data={filteredData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="total"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Bar dataKey="total" fill={chartConfig.sumConsultations.color} radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
