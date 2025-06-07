import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface IDashboardCard {
    title: string,
    amount: number,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

interface IPaymentCard {
    title: string,
    amount: number,
    status: string
}

interface UserAttribute {
    id: string,
    email: string,
    phone_number: string,
    password: string,
    role: string,
    name: string,
    nickname: string,
    gender: string,
    birthdate: Date,
    image: Blob | string,
    created_at: string
}

interface TransactionAttribute {
    name: string,
    bank: string,
    transactionId: string,
    method: string,
    status: string,
    amount: number
}

interface PaymentChartAttribute {
    time: string,
    totalTransactions: number
}

export type {
    IDashboardCard,
    IPaymentCard,
    UserAttribute,
    TransactionAttribute,
    PaymentChartAttribute
}