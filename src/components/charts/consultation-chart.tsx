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
const chartData = [
    { date: "2024-04-02", sumConsultations: 97 },
    { date: "2024-04-01", sumConsultations: 222 },
    { date: "2024-04-03", sumConsultations: 167 },
    { date: "2024-04-04", sumConsultations: 242 },
    { date: "2024-04-05", sumConsultations: 373 },
    { date: "2024-04-06", sumConsultations: 301 },
    { date: "2024-04-07", sumConsultations: 245 },
    { date: "2024-04-08", sumConsultations: 409 },
    { date: "2024-04-09", sumConsultations: 59 },
    { date: "2024-04-10", sumConsultations: 261 },
    { date: "2024-04-11", sumConsultations: 327 },
    { date: "2024-04-12", sumConsultations: 292 },
    { date: "2024-04-13", sumConsultations: 342 },
    { date: "2024-04-14", sumConsultations: 137 },
    { date: "2024-04-15", sumConsultations: 120 },
    { date: "2024-04-16", sumConsultations: 138 },
    { date: "2024-04-17", sumConsultations: 446 },
    { date: "2024-04-18", sumConsultations: 364 },
    { date: "2024-04-19", sumConsultations: 243 },
    { date: "2024-04-20", sumConsultations: 89 },
    { date: "2024-04-21", sumConsultations: 137 },
    { date: "2024-04-22", sumConsultations: 224 },
    { date: "2024-04-23", sumConsultations: 138 },
    { date: "2024-04-24", sumConsultations: 387 },
    { date: "2024-04-25", sumConsultations: 215 },
    { date: "2024-04-26", sumConsultations: 75 },
    { date: "2024-04-27", sumConsultations: 383 },
    { date: "2024-04-28", sumConsultations: 122 },
    { date: "2024-04-29", sumConsultations: 315 },
    { date: "2024-04-30", sumConsultations: 454 },
    { date: "2024-05-01", sumConsultations: 165 },
    { date: "2024-05-02", sumConsultations: 293 },
    { date: "2024-05-03", sumConsultations: 247 },
    { date: "2024-05-04", sumConsultations: 385 },
    { date: "2024-05-05", sumConsultations: 481 },
    { date: "2024-05-06", sumConsultations: 498 },
    { date: "2024-05-07", sumConsultations: 388 },
    { date: "2024-05-08", sumConsultations: 149 },
    { date: "2024-05-09", sumConsultations: 227 },
    { date: "2024-05-10", sumConsultations: 293 },
    { date: "2024-05-11", sumConsultations: 335 },
    { date: "2024-05-12", sumConsultations: 197 },
    { date: "2024-05-13", sumConsultations: 197 },
    { date: "2024-05-14", sumConsultations: 448 },
    { date: "2024-05-15", sumConsultations: 473 },
    { date: "2024-05-16", sumConsultations: 338 },
    { date: "2024-05-17", sumConsultations: 499 },
    { date: "2024-05-18", sumConsultations: 315 },
    { date: "2024-05-19", sumConsultations: 235 },
    { date: "2024-05-20", sumConsultations: 177 },
    { date: "2024-05-21", sumConsultations: 82 },
    { date: "2024-05-22", sumConsultations: 81 },
    { date: "2024-05-23", sumConsultations: 252 },
    { date: "2024-05-24", sumConsultations: 294 },
    { date: "2024-05-25", sumConsultations: 201 },
    { date: "2024-05-26", sumConsultations: 213 },
    { date: "2024-05-27", sumConsultations: 420 },
    { date: "2024-05-28", sumConsultations: 233 },
    { date: "2024-05-29", sumConsultations: 78 },
    { date: "2024-05-30", sumConsultations: 340 },
    { date: "2024-05-31", sumConsultations: 178 },
    { date: "2024-06-01", sumConsultations: 178 },
    { date: "2024-06-02", sumConsultations: 470 },
    { date: "2024-06-03", sumConsultations: 103 },
    { date: "2024-06-04", sumConsultations: 439 },
    { date: "2024-06-05", sumConsultations: 88 },
    { date: "2024-06-06", sumConsultations: 294 },
    { date: "2024-06-07", sumConsultations: 323 },
    { date: "2024-06-08", sumConsultations: 385 },
    { date: "2024-06-09", sumConsultations: 438 },
    { date: "2024-06-10", sumConsultations: 155 },
    { date: "2024-06-11", sumConsultations: 92 },
    { date: "2024-06-12", sumConsultations: 492 },
    { date: "2024-06-13", sumConsultations: 81 },
    { date: "2024-06-14", sumConsultations: 426 },
    { date: "2024-06-15", sumConsultations: 307 },
    { date: "2024-06-16", sumConsultations: 371 },
    { date: "2024-06-17", sumConsultations: 475 },
    { date: "2024-06-18", sumConsultations: 107 },
    { date: "2024-06-19", sumConsultations: 341 },
    { date: "2024-06-20", sumConsultations: 408 },
    { date: "2024-06-21", sumConsultations: 169 },
    { date: "2024-06-22", sumConsultations: 317 },
    { date: "2024-06-23", sumConsultations: 480 },
    { date: "2024-06-24", sumConsultations: 132 },
    { date: "2024-06-25", sumConsultations: 141 },
    { date: "2024-06-26", sumConsultations: 434 },
    { date: "2024-06-27", sumConsultations: 448 },
    { date: "2024-06-28", sumConsultations: 149 },
    { date: "2024-06-29", sumConsultations: 103 },
    { date: "2024-06-30", sumConsultations: 446 },
];

interface ChartDataAttribute {
    date: string,
    sumConsultations: number
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
        const referenceDate = new Date("2024-06-30");

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
                                    nameKey="sumConsultations"
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
                        <Bar dataKey="sumConsultations" fill={chartConfig.sumConsultations.color} radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
