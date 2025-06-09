"use client"

import { Ellipsis, Eye, SquarePen, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import adminUtilities from "@/lib/adminUtilities";
import { redirect } from "next/navigation";

export default function TableAction({ view, edit, del, role }: { view: string, edit: string, del: string, role: string }) {
    async function handleDelete() {
        await adminUtilities.deleteAdmin(del);
        redirect(`/${role}`);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis size={17.5} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={view} className="flex flex-row items-center justify-between w-full">
                        <p>View</p>
                        <Eye color="black" size={20} />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={edit} className="flex flex-row items-center justify-between w-full">
                        <p>Edit</p>
                        <SquarePen color="black" size={20} />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="bg-red-500 text-white">
                    <Link href={`/${role}`} onClick={async () => handleDelete()} className="flex flex-row items-center justify-between w-full">
                        <p>Delete</p>
                        <Trash color="white" size={20} />
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}