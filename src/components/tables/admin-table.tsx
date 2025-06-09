import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import TableAction from "../table-action"
import { UserAttribute } from "@/types/app-type";
import NoDataCell from "./no-data-cell";

export default function AdminTable({ admins }: { admins: UserAttribute[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[5%] text-center">No</TableHead>
                    <TableHead >Name</TableHead>
                    <TableHead >Phone Number</TableHead>
                    <TableHead >Gender</TableHead>
                    <TableHead >Role</TableHead>
                    <TableHead >Joined at</TableHead>
                    <TableHead ></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    admins.length > 0 ?
                        admins.map((admin, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium text-center">{index + 1}</TableCell>
                                <TableCell>{admin.name}</TableCell>
                                <TableCell>{admin.phone_number}</TableCell>
                                <TableCell>{admin.gender}</TableCell>
                                <TableCell>{admin.role}</TableCell>
                                <TableCell>{admin.created_at}</TableCell>
                                <TableCell className="text-center">
                                    <TableAction view={`/admin/${admin.id}/view`} edit={`/admin/${admin.id}/edit`} del={admin.id} role="admin" />
                                </TableCell>
                            </TableRow>
                        )) :
                        <TableRow>
                            <TableCell colSpan={9} className="text-center py-12">
                                <NoDataCell />
                            </TableCell>
                        </TableRow>
                }
            </TableBody>
        </Table >
    )
}
