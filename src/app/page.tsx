import DashboardCard from "@/components/dashboard-card";
import RevenueChart from "@/components/charts/revenue-chart";
import { Banknote, Handshake, UserRound, Users } from "lucide-react";
import ConsultationChart from "@/components/charts/consultation-chart";
import UserChart from "@/components/charts/user-chart";
import UserPieChart from "@/components/charts/user-piechart";

export default function Home() {
  const dashboardCardData = [
    {
      title: "Total Counselor",
      amount: 6990,
      icon: Users
    },
    {
      title: "Total Pengguna",
      amount: 1234,
      icon: Users
    },
    {
      title: "Total Konsultasi",
      amount: 6990,
      icon: Handshake
    },
    {
      title: "Total Pendapatan",
      amount: 6990,
      icon: Banknote
    },
  ]
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Dashboard Teman Bicara</h1>
      <div className="grid grid-cols-4 gap-3">
        {
          dashboardCardData.map((item, index) => (
            <DashboardCard key={index} title={item.title} amount={item.amount} icon={item.icon} />
          ))
        }
      </div>
      <RevenueChart />
      <ConsultationChart />
      <div className="grid grid-cols-8 gap-5 pt-3">
        <div className="col-span-5">
          <UserChart />
        </div>
        <div className="col-span-3 ">
          <UserPieChart />
        </div>
      </div>
    </div>
  );
}
