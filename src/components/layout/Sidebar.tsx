"use client";

import Img from "next/image";
import Logoipsum from "@/components/icons/images/Logoipsum.png";
import { useTheme } from "next-themes";
import type * as React from "react";
import { usePathname } from "next/navigation"; // Add this import
import {
  Users,
  Layers,
  ClipboardCheck,
  Calendar,
  FolderOpen,
  User,
  ShieldCheck,
  Settings,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DashboardIcon } from "../icons/dashboard-icon";
import Link from "next/link";

const navigationItems = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    url: "/dashboard",
  },
  {
    title: "All Members",
    icon: Users,
    url: "/dashboard/allmembers",
  },
  {
    title: "All Divisions",
    icon: Layers,
    url: "/dashboard/alldivisions",
  },
  {
    title: "Attendance",
    icon: ClipboardCheck,
    url: "/dashboard/attendance",
  },
  {
    title: "Sessions & Events",
    icon: Calendar,
    url: "/dashboard/sessions",
  },
  {
    title: "Resources",
    icon: FolderOpen,
    url: "/dashboard/resources",
  },
  {
    title: "Profile",
    icon: User,
    url: "/dashboard/profile",
  },
  {
    title: "Administration",
    icon: ShieldCheck,
    url: "/dashboard/administration",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/dashboard/settings",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const isActive = (itemUrl: string) => {
    if (itemUrl === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(itemUrl);
  };
  
  return (
    <div className="flex h-full p-2">
      <Sidebar {...props} collapsible="offcanvas" className="flex justify-center my-5">
        <div className="flex flex-col gap-5 bg-[#34495E0D] rounded-2xl w-58 h-auto">
          <SidebarHeader className="pt-10">
            <div className="flex items-end justify-center gap-2">
              <Img src={Logoipsum} alt="Logo icon and name" />
            </div>
          </SidebarHeader>
          <SidebarContent className="pl-8">
            <SidebarMenu className="mt-2 gap-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)} // Dynamic active state
                    className="flex items-center px-4 py-2.5 gap-2"
                    tooltip={item.title}
                  >
                    <Link href={item.url} className="flex items-center">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <div>
            <SidebarFooter>
              <div className="flex justify-center gap-3 mt-10 p-5">
                <div className="flex gap-3 items-center justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setTheme("light")}
                    className="flex h-10 w-20 rounded-md items-center justify-center bg-[#003087] cursor-pointer hover:bg-[#002f87a2]"
                    aria-label="Light mode"
                  >
                    <Sun className="h-4 w-4" color="#F8F8F8" />
                    <h3 className="text-[#F8F8F8] ml-1"> Light </h3>
                  </Button>
                </div>

                <div className="flex gap-5 items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme("dark")}
                    className="flex h-10 w-20 rounded-md items-center justify-center bg-[#34495E0D]"
                    aria-label="Dark mode"
                  >
                    <Moon className="h-4 w-4" />
                    <h3 className="ml-1"> Dark </h3>
                  </Button>
                </div>
              </div>
            </SidebarFooter>
            <SidebarRail />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}