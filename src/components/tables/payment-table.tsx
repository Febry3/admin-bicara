import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import PaymentStatusBadge from "../payment-status-badge"
import { TransactionAttribute } from "@/types/app-type"
import NoDataCell from "./no-data-cell"

export default function PaymentTable({ transactions }: { transactions: TransactionAttribute[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[5%] text-center ">No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Bank</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    transactions.length > 0 ?
                        transactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium text-center">{index + 1}</TableCell>
                                <TableCell>{transaction.name}</TableCell>
                                <TableCell>{transaction.bank}</TableCell>
                                <TableCell>{transaction.transactionId}</TableCell>
                                <TableCell>{transaction.method}</TableCell>
                                <TableCell>
                                    <PaymentStatusBadge status={transaction.status} />
                                </TableCell>
                                <TableCell>{transaction.amount}</TableCell>
                            </TableRow>
                        )) :
                        <TableRow>
                            <TableCell rowSpan={5} colSpan={9} className="text-center py-12">
                                <NoDataCell />
                            </TableCell>
                        </TableRow>
                }
            </TableBody>
        </Table >
    )
}
