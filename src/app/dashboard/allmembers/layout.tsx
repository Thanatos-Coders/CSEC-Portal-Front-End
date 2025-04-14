export default function AllMembersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        {children}
      </body>
    </html>
  );
}
