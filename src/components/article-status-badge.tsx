import { Badge } from "./ui/badge";

export default function ArticleStatusBadge({ status }: { status: string }) {
    let style: string = "";
    switch (status) {
        case "pending":
            style = "border-yellow-400 bg-yellow-50 text-yellow-800";
            break;
        case "published":
            style = "border-green-400 bg-green-50 text-green-800";
            break;
        case "rejected":
            style = "border-red-400 bg-red-50 text-red-800";
            break;
        default:
            break;
    }

    return (
        <Badge className={style + " px-3"} variant="outline">{status}</Badge>
    );
}