import { DailyRevenueChart } from "@/components/charts/daily-revenue-chart";
import PaymentCard from "@/components/payment-card";
import PaymentTable from "@/components/tables/payment-table";
import { randomInt } from "crypto";

export default function ReportPage() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Payments Page</h1>
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-8">
                    <DailyRevenueChart />
                </div>
                <div className="col-span-2 grid grid-rows-3 gap-3">
                    <PaymentCard title="Payment" amount={randomInt(1000)} status="Success" />
                    <PaymentCard title="Payment" amount={randomInt(1000)} status="Pending" />
                    <PaymentCard title="Payment" amount={randomInt(1000)} status="Failed" />
                </div>
            </div>
            <h1 className="text-2xl font-medium pt-5">Recent Payments</h1>
            <PaymentTable />
        </div>
    )
}