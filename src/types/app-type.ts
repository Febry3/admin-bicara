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

interface CounselorAttribute {
    email: string,
    phone_number: string,
    password: string,
    role: string,
    name: string,
    nickname: string,
    gender: string,
    birthdate: Date,
    image: any,
}

export type {
    IDashboardCard,
    IPaymentCard,
    CounselorAttribute
}