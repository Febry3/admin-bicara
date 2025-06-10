import RouteButton from "@/components/buttons/RouteButton";
import SearchBox from "@/components/search-box";
import CounselorTable from "@/components/tables/counselor-table";
import { Suspense } from "react";

export default function CounselorPage() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Halaman Counselor</h1>
            <div className="w-full flex flex-row justify-between">
                <SearchBox />
                <RouteButton title="Create New Counselor" path="/counselor/create" />
            </div>
            <div className="border-1 rounded-sm shadow-sm mt-3">
                <Suspense fallback={<p>Loading...</p>}>
                    <CounselorTable />
                </Suspense>
            </div>
        </div>
    )
}