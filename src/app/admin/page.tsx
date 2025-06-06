import RouteButton from "@/components/buttons/RouteButton";
import SearchBox from "@/components/search-box";
import AdminTable from "@/components/tables/admin-table";
import adminUtilities from "@/lib/adminUtilities";
import { apiUrl } from "@/lib/axiosClient";
import { UserAttribute } from "@/types/app-type";

export default async function AdminPage() {
    const response = await fetch(`${apiUrl}admin/account/admin`, { method: 'GET' })
    const admins = await response.json();

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Halaman Admin</h1>
            <div className="w-full flex flex-row justify-between">
                <SearchBox />
                <RouteButton title="Create New Admin" path="/admin/create" />
            </div>
            <div className="border-1 rounded-sm shadow-sm mt-3">
                <AdminTable admins={admins.data} />
            </div>
        </div>
    )
}