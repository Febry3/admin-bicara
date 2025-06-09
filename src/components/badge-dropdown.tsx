"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import ArticleStatusBadge from "./article-status-badge";
import articleUtilities from "@/lib/articleUtilities";
import { useState } from "react";

export default function BadgeDropDown({ status, id }: { status: string, id: string }) {
    let [currStatus, setCurrStatus] = useState<string>(status);
    async function handleStatusUpdate(status: string) {
        if (status !== currStatus) {
            await articleUtilities.updateArticleStatus(id, status);
            setCurrStatus(status);
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ArticleStatusBadge status={currStatus} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <div onClick={async () => await handleStatusUpdate("pending")}>
                        <ArticleStatusBadge status="pending" />
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div onClick={async () => await handleStatusUpdate("published")}>
                        <ArticleStatusBadge status="published" />
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div onClick={async () => await handleStatusUpdate("rejected")}>
                        <ArticleStatusBadge status="rejected" />
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    );
}