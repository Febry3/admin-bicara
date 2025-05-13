import { IDashboardCard } from "@/types/app-type";
import { UsersRound } from "lucide-react";



export default function DashboardCard(data: IDashboardCard) {
    return (
        <div className="border-1 shadow-sm rounded-sm px-5 py-3 flex h-35 justify-between">
            <div className="flex flex-col justify-between">
                <p className="text-xl font-[500]">{data.title}</p>
                <div className="flex flex-col">
                    <p className="text-3xl font-[600]">{data.amount}</p>
                    <p className="text-sm text-[var(--primary-color)]">All time</p>
                </div>
            </div>
            <div className="mt-4 rounded-4xl border-1 border-[var(--primary-color)] p-2 h-fit shadow-sm">
                <data.icon color="var(--primary-color)" />
            </div>
        </div>
    )
}