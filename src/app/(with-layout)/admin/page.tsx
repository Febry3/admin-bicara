import RouteButton from "@/components/buttons/RouteButton";
import SearchBox from "@/components/search-box";
import AdminTable from "@/components/tables/admin-table";

export default async function AdminPage() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Halaman Admin</h1>
            <div className="w-full flex flex-row justify-between">
                <SearchBox />
                <RouteButton title="Create New Admin" path="/admin/create" />
            </div>
            <div className="border-1 rounded-sm shadow-sm mt-3">
                <AdminTable />
            </div>
        </div>
    )
}