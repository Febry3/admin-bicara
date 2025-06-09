"use client"
import { ArrowLeftRight, Home, Newspaper, UserRoundCog, Users } from "lucide-react"
import { redirect, usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
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
import DropDownProfile from "./dropdown-profile"

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

    function handleLogoClick() {
        redirect("/");
    }

    return (
        <Sidebar className={state === "expanded" ? "p-4" : ""} collapsible="icon">
            <SidebarHeader>
                {
                    state === "expanded"
                        ?
                        <Image className="hover:cursor-pointer" src={"/admin-bicara.png"} alt="Logo" width={120} height={60} onClick={handleLogoClick} />
                        :
                        <Image className="hover:cursor-pointer" src={"/logo-collapsed.jpg"} alt="Logo" width={55} height={55} onClick={handleLogoClick} />
                }
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
            </SidebarContent>
            <SidebarFooter>
                {
                    state === "expanded" ?
                        <div className="border-1 rounded shadow-sm p-1 flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <div className="relative w-[2.25rem] aspect-square border-1 rounded">
                                    <Image
                                        src="/admin-bicara.png"
                                        alt="gambar"
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                                <p className="ms-2 font-semibold text-sm">Aesepp</p>
                            </div>
                            <DropDownProfile />
                        </div> :
                        <div className="flex flex-row items-center justify-center">
                            <div className="relative w-[2.25rem] aspect-square border-1 rounded">
                                <Image
                                    src="/admin-bicara.png"
                                    alt="gambar"
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        </div>
                }
            </SidebarFooter>
        </Sidebar>
    )
}
