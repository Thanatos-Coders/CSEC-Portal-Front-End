"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex flex-col">
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-full">
              <div className="flex space-x-6 items-center ">
                <SidebarTrigger style={{ marginLeft: "10px" }} />
                <Navbar name="Henok" />
              </div>
              {children}
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}