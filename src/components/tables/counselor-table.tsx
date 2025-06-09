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
import { apiUrl } from "@/lib/axiosClient"
import { Suspense } from "react"
import NoDataCell from "./no-data-cell"

interface CounselorAttribute extends UserAttribute {
    totalConsultations: number,
    revenue: number
}

export default async function CounselorTable() {
    const response = await fetch(`${apiUrl}admin/account/counselor`, { method: 'GET' })
    const responseJson = await response.json();
    const counselors = responseJson.data as CounselorAttribute[];

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
                <Suspense fallback={<p>Loading...</p>}>
                    {
                        (counselors.length > 0) ?
                            counselors.map((counselor, index) => (
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
                                        <TableAction view={`/counselor/${counselor.id}/view`} edit={`/counselor/${counselor.id}/edit`} del={counselor.id.toString()} role="counselor" />
                                    </TableCell>
                                </TableRow>
                            )) :
                            <TableRow>
                                <TableCell rowSpan={5} colSpan={9} className="text-center py-12">
                                    <NoDataCell />
                                </TableCell>
                            </TableRow>
                    }
                </Suspense>
            </TableBody>
        </Table >
    )
}
