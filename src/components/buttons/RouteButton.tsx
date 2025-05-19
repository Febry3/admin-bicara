"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function RouteButton({ path, title, className, variant }: { path: string, title: string, className?: string, variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost" | null | undefined }) {
    const router = useRouter();

    return (
        <Button className={className + " cursor-pointer"} onClick={() => router.push(path)} variant={variant}>
            {title}
        </Button>
    );
}