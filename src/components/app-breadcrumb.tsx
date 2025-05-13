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
                        <BreadcrumbItem>
                            <BreadcrumbLink href={"/" + path}>
                                <p className="text-md font-medium text-black ">
                                    {path === '' && index === 1 ? "Dashboard" : path}
                                </p>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

