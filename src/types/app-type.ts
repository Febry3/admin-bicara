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

export type {
    IDashboardCard,
    IPaymentCard
}