import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TableAction from "../table-action"
import { UserAttribute } from "@/types/app-type"

interface CounselorAttribute extends UserAttribute {
    totalConsultations: number,
    revenue: number
}



export default function CounselorTable({ counselors }: { counselors: CounselorAttribute[] }) {
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
                    <TableHead >Total Consultation</TableHead>
                    <TableHead >Revenue</TableHead>
                    <TableHead ></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {counselors.map((counselor, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell>{counselor.name}</TableCell>
                        <TableCell>{counselor.phone_number}</TableCell>
                        <TableCell>{counselor.gender}</TableCell>
                        <TableCell>{counselor.role}</TableCell>
                        <TableCell>{counselor.created_at}</TableCell>
                        <TableCell>{counselor.totalConsultations}</TableCell>
                        <TableCell>{counselor.revenue}</TableCell>
                        <TableCell className="text-center">
                            <TableAction view={`/admin/${counselor.id}/view`} edit={`/admin/${counselor.id}/edit`} del={counselor.id.toString()} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table >
    )
}
