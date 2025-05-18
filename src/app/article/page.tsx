import SearchBox from "@/components/search-box";
import ArticleTable from "@/components/tables/article-table";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Halaman Article</h1>
            <div className="w-full flex flex-row justify-between">
                <SearchBox />
                <Button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/70">Add Article</Button>
            </div>
            <div className="border-1 rounded-sm shadow-sm mt-3">
                <ArticleTable />
            </div>
        </div>
    )
}