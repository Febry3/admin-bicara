import { DailyRevenueChart } from "@/components/charts/daily-revenue-chart";
import PaymentCard from "@/components/payment-card";
import PaymentTable from "@/components/tables/payment-table";
import { apiUrl } from "@/lib/axiosClient";

export default async function ReportPage() {
    const response = await fetch(`${apiUrl}admin/payment`);
    const transactions = await response.json();

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Payments Page</h1>
            <div className="grid grid-cols-10 gap-4">
                <div className="col-span-8">
                    <DailyRevenueChart chartData={transactions.data.groupedData} />
                </div>
                <div className="col-span-2 grid grid-rows-3 gap-3">
                    <PaymentCard title="Payment" amount={transactions.data.countSuccess} status="Success" />
                    <PaymentCard title="Payment" amount={transactions.data.countPending} status="Pending" />
                    <PaymentCard title="Payment" amount={transactions.data.countFailed} status="Failed" />
                </div>
            </div>
            <h1 className="text-2xl font-medium pt-5">Recent Payments</h1>
            <div className="border-1 rounded-sm shadow-sm mt-3">
                <PaymentTable transactions={transactions.data.payments} />
            </div>
        </div>
    )
}