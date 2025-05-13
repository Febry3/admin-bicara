"use client"
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import React from "react";

export default function AppBreadcrumb() {
    const pathName = usePathname()
    const paths = pathName.split("/");
    return (
        <Breadcrumb className="rounded-sm p-1 border-1 shadow-sm">
            <BreadcrumbList>
                {paths.map((path, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink href={"/" + path}>{path === '' && index === 1 ? "dashboard" : path}</BreadcrumbLink>
                        </BreadcrumbItem><BreadcrumbSeparator />
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

