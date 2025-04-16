"use client";

import "@/app/globals.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
            <main className="w-full h-full">
              {children}
            </main>
      </body>
    </html>
  );
}
