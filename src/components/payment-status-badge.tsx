import { Badge } from "./ui/badge";

export default function PaymentStatusBadge({ status }: { status: string }) {
    let style: string = "";
    switch (status) {
        case "Pending":
            style = "border-yellow-400 bg-yellow-50 text-yellow-800";
            break;
        case "Success":
            style = "border-green-400 bg-green-50 text-green-800";
            break;
        case "Failed":
            style = "border-red-400 bg-red-50 text-red-800";
            break;
        default:
            break;
    }

    return (
        <Badge className={style + " px-3"} variant="outline">{status}</Badge>
    );
}