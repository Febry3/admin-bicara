
import { apiUrl } from "@/lib/axiosClient";
import { UserAttribute } from "@/types/app-type";
import ViewAdminForm from "./editCounselorForm";

export default async function EditCounselorPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const response = await fetch(`${apiUrl}admin/account/${id}`, { method: 'GET' })
    let counselor = await response.json();
    counselor = counselor.data as UserAttribute;

    return (
        <>
            <ViewAdminForm admin={counselor} />
        </>
    )
}