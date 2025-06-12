"use client"

import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import useUser from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function DropDownProfile() {
    const { logout } = useUser();
    const router = useRouter();
    async function handleLogout() {
        await logout();
        router.push("/login");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <EllipsisVertical size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="bg-red-500" onClick={handleLogout}>
                    <p className="text-white" >Logout</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    );
}