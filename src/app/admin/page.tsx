import SearchBox from "@/components/search-box";
import AdminTable from "@/components/tables/admin-table";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Halaman Admin</h1>
            <div className="w-full flex flex-row justify-between">
                <SearchBox />
                <Button>Create New Admin</Button>
            </div>
            <div className="border-1 rounded-sm shadow-sm mt-3">
                <AdminTable />
            </div>
        </div>
    )
}