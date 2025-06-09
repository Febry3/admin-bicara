import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function DropDownProfile() {
    async function handleLogout() {
        console.log("asdasd")
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