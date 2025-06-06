
import { apiUrl } from "@/lib/axiosClient";
import { UserAttribute } from "@/types/app-type";
import EditAdminForm from "./editAdminForm";

export default async function ViewAdminPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const response = await fetch(`${apiUrl}admin/account/${id}`, { method: 'GET' })
    let admin = await response.json();
    admin = admin.data as UserAttribute;
    return (
        <>
            <EditAdminForm admin={admin} />
        </>
    )
}