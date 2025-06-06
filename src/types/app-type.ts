import { Blob } from "buffer"
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
    image: any,
    created_at: string
}

export type {
    IDashboardCard,
    IPaymentCard,
    UserAttribute
}