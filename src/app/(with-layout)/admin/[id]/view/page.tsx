
import { apiUrl } from "@/lib/axiosClient";
import { UserAttribute } from "@/types/app-type";
import ViewAdminForm from "./viewAdminForm";

export default async function ViewAdminPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const response = await fetch(`${apiUrl}admin/account/${id}`, { method: 'GET' })
    let admin = await response.json();
    admin = admin.data as UserAttribute;
    return (
        <>
            <ViewAdminForm admin={admin} />
        </>
    )
}