import { IPaymentCard } from "@/types/app-type";
import PaymentStatusBadge from "./payment-status-badge";
import { Card } from "./ui/card";



export default function PaymentCard({ title, amount, status }: IPaymentCard) {
    return (
        <Card className="row-span-1 p-6">
            <div className="flex flex-row justify-between">
                <div>
                    <p className="text-xl font-light">{title}</p>
                    <p className="font-semibold text-4xl">{amount}</p>
                </div>
                <div className="">
                    <PaymentStatusBadge status={status}></PaymentStatusBadge>
                </div>
            </div>
        </Card>
    );
}