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

// const transactions = [
//     {
//         name: "John Doe",
//         bank: "BCA",
//         transactionId: "TXN123456789",
//         method: "Transfer",
//         status: "Pending",
//         amount: 150000
//     },
//     {
//         name: "Jane Smith",
//         bank: "BNI",
//         transactionId: "TXN987654321",
//         method: "Credit Card",
//         status: "Success",
//         amount: 250000
//     },
//     {
//         name: "Alice Johnson",
//         bank: "BRI",
//         transactionId: "TXN112233445",
//         method: "E-Wallet",
//         status: "Failed",
//         amount: 50000
//     },
//     {
//         name: "Bob Williams",
//         bank: "Mandiri",
//         transactionId: "TXN556677889",
//         method: "Transfer",
//         status: "Success",
//         amount: 100000
//     },
//     {
//         name: "Clara Lee",
//         bank: "BCA",
//         transactionId: "TXN667788990",
//         method: "Credit Card",
//         status: "Pending",
//         amount: 175000
//     },
//     {
//         name: "David Kim",
//         bank: "CIMB",
//         transactionId: "TXN334455667",
//         method: "E-Wallet",
//         status: "Success",
//         amount: 89000
//     },
//     {
//         name: "Emily Davis",
//         bank: "Danamon",
//         transactionId: "TXN445566778",
//         method: "Transfer",
//         status: "Failed",
//         amount: 200000
//     },
//     {
//         name: "Frank Miller",
//         bank: "BTN",
//         transactionId: "TXN778899001",
//         method: "Credit Card",
//         status: "Success",
//         amount: 130000
//     },
//     {
//         name: "Grace Lee",
//         bank: "BCA",
//         transactionId: "TXN991122334",
//         method: "E-Wallet",
//         status: "Pending",
//         amount: 72000
//     },
//     {
//         name: "Henry Tan",
//         bank: "Permata",
//         transactionId: "TXN223344556",
//         method: "Transfer",
//         status: "Success",
//         amount: 110000
//     }
// ];



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
                {transactions.map((transaction, index) => (
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
                ))}
            </TableBody>
        </Table >
    )
}
