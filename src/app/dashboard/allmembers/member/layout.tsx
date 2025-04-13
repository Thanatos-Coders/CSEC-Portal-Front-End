import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileSidebar } from "@/components/ProfileSidebar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full h-full gap-3">
        <ProfileHeader />
        <div className="flex" style={{marginTop: "15px", marginBottom: "15px"}}>
          <div>
            <ProfileSidebar />
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
