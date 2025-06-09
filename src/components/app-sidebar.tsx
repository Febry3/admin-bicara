"use client"
import { ArrowLeftRight, Home, Newspaper, UserRoundCog, Users } from "lucide-react"
import { usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

const menu = [
    {
        title: "Dashboard",
        url: "/",
        icon: Home,
    },
    {
        title: "Article",
        url: "/article",
        icon: Newspaper,
    },
    {
        title: "Counselor",
        url: "/counselor",
        icon: Users,
    },
    {
        title: "Transaction",
        url: "/transaction",
        icon: ArrowLeftRight,
    },
    {
        title: "Admin",
        url: "/admin",
        icon: UserRoundCog,
    },
]

export function AppSidebar() {
    const { state } = useSidebar();
    const pathname = usePathname();
    return (
        <Sidebar className={state === "expanded" ? "p-4" : ""} collapsible="icon">
            <SidebarHeader>
                <Image src={"/admin-bicara.png"} alt="Logo" width={120} height={60} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton
                                        asChild
                                        isActive={
                                            pathname === item.url ||
                                            (item.url !== "/" && pathname.startsWith(item.url))
                                        }
                                    >
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* <SidebarFooter>
                    <h1>gooter</h1>
                </SidebarFooter> */}
            </SidebarContent>
        </Sidebar>
    )
}
