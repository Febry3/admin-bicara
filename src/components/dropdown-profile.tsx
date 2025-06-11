"use client"

import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { redirect } from "next/navigation";
import useUser from "@/hooks/use-user";

export default function DropDownProfile() {
    const { logout } = useUser();
    async function handleLogout() {
        await logout();
        redirect("/login");
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