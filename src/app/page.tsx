import DashboardCard from "@/components/dashboard-card";
import Image from "next/image";

export default function Home() {
  console.log("rerender")
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Dashboard Teman Bicara</h1>
      <div className="grid grid-cols-4 gap-3">
        <DashboardCard>
          <h1>Testasdasds</h1>
        </DashboardCard>
        <DashboardCard>
          <h1>Test</h1>
        </DashboardCard>
        <DashboardCard>
          <h1>Test</h1>
        </DashboardCard>
        <DashboardCard>
          <h1>Test</h1>
        </DashboardCard>
      </div>
    </div>
  );
}
