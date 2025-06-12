import DashboardCard from "@/components/dashboard-card";
import RevenueChart from "@/components/charts/revenue-chart";
import { Banknote, Handshake, Users } from "lucide-react";
import ConsultationChart from "@/components/charts/consultation-chart";
import UserChart from "@/components/charts/user-chart";
import UserPieChart from "@/components/charts/user-piechart";
import { randomInt } from "crypto";
import { apiUrl } from "@/lib/axiosClient";

interface DashboardAttribute {
  counselorCount: number,
  userCount: number,
  consultationCount: number,
  totalRevenue: number,
  maleUser: number,
  femaleUser: number,
  userChart: any,
  revenueChart: any,
  consultationChart: any
}


export default async function Home() {
  const response = await fetch(`${apiUrl}admin/dashboard`)
  const responseJson = await response.json();
  const data = responseJson.data as DashboardAttribute;
  console.log(data);

  const dashboardCardData = [
    {
      title: "Total Counselor",
      amount: data.counselorCount,
      icon: Users
    },
    {
      title: "Total Pengguna",
      amount: data.userCount,
      icon: Users
    },
    {
      title: "Total Konsultasi",
      amount: data.consultationCount,
      icon: Handshake
    },
    {
      title: "Total Pendapatan",
      amount: data.totalRevenue,
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
      <RevenueChart revenueData={data.revenueChart} />
      <ConsultationChart chartData={data.consultationChart} />
      <div className="grid grid-cols-8 gap-5 pt-3">
        <div className="col-span-5">
          <UserChart userData={data.userChart} />
        </div>
        <div className="col-span-3 ">
          <UserPieChart userCount={data.userCount} femaleCount={data.femaleUser} maleCount={data.maleUser} />
        </div>
      </div>
    </div>
  );
}
