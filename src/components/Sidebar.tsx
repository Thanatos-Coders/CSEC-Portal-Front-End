"use client";

import Img from "next/image";
import Logoipsum from "./icons/Logoipsum.png";
import { useTheme } from "next-themes";
import type * as React from "react";
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
import { DashboardIcon } from "./icons/dashboard-icon";

// Navigation items matching the design
const navigationItems = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    url: "/dashboard",
    isActive: true,
  },
  {
    title: "All Members",
    icon: Users,
    url: "/dashboard/allmembers",
    isActive: false,
  },
  {
    title: "All Divisions",
    icon: Layers,
    url: "#",
    isActive: false,
  },
  {
    title: "Attendance",
    icon: ClipboardCheck,
    url: "#",
    isActive: false,
  },
  {
    title: "Sessions & Events",
    icon: Calendar,
    url: "#",
    isActive: false,
  },
  {
    title: "Resources",
    icon: FolderOpen,
    url: "#",
    isActive: false,
  },
  {
    title: "Profile",
    icon: User,
    url: "#",
    isActive: false,
  },
  {
    title: "Administration",
    icon: ShieldCheck,
    url: "#",
    isActive: false,
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#",
    isActive: false,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setTheme } = useTheme();

  return (
    <Sidebar
      {...props}
      collapsible="offcanvas"
      style={{ padding: "25px" }}
    >
      <div
        className="bg-[#34495E0D] rounded-2xl w-55 h-auto"
        
      >
        <SidebarHeader className="p-10" style={{ paddingTop: "30px" }}>
          <div className="flex items-center justify-center gap-2">
            <Img src={Logoipsum} alt="Logo icon and name" />
          </div>
        </SidebarHeader>
        <SidebarContent style={{ paddingLeft: "40px", paddingTop: "30px" }}>
          <SidebarMenu className="mt-2 gap-2">
            {navigationItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                  // Adjusted to align items consistently
                  className="flex items-center px-4 py-2.5 gap-3"
                  tooltip={item.title}
                >
                  <a href={item.url} className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter style={{ paddingTop: "70px", paddingBottom: "20px" }}>
          <div className="flex justify-center gap-3">
            <div className="flex gap-3 items-center justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setTheme("light")}
                className="flex h-10 w-20 rounded-md items-center justify-center bg-[#003087] cursor-pointer hover:bg-[#002f87a2]"
                aria-label="Light mode"
              >
                <Sun className="h-4 w-4" color="#F8F8F8"/>
                <h3 className="text-[#F8F8F8]" style={{marginLeft: "5px"}}> Light </h3>
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
                <h3 style={{marginLeft: "5px"}}> Dark </h3>
              </Button>
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </div>
    </Sidebar>
  );
}
