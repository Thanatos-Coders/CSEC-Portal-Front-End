"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-full">
          <div className="flex space-x-6 items-center ">
            <SidebarTrigger style={{marginLeft: "3px"}}/>
            <Navbar name="Henok" />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
