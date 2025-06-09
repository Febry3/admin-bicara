import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import TableAction from "../table-action"
import BadgeDropDown from "../badge-dropdown"
import { apiUrl } from "@/lib/axiosClient"
import { ArticleAttribute } from "@/types/app-type"

export default async function ArticleTable() {
    const response = await fetch(`${apiUrl}admin/article`);
    const responseJson = await response.json();
    const articles = responseJson.data as ArticleAttribute[];

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[5%] text-center text-white">No</TableHead>
                    <TableHead className="w-[20%] text-white">Title</TableHead>
                    <TableHead className="w-[30%] text-white">Body</TableHead>
                    <TableHead className="w-[25%] text-white">Image</TableHead>
                    <TableHead className="w-[15%] ps-10 text-white">Status</TableHead>
                    <TableHead className="w-[5%] text-white"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {articles.map((article, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell>{article.title}</TableCell>
                        <TableCell>{article.content}</TableCell>
                        <TableCell>
                            <div className="relative w-[250px] aspect-video">
                                <Image
                                    src={article.image_url}
                                    alt="gambar"
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        </TableCell>
                        <TableCell className="ps-10">
                            <BadgeDropDown id={article.article_id.toString()} status={article.status.toLowerCase()} />
                        </TableCell>
                        <TableCell className="text-center">
                            <TableAction edit="" del="" view="" role="" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table >
    )
}
