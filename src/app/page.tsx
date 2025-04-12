import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-100 gap-15">
      <h1 className="text-4xl font-bold">Landing Page</h1>
      <Link href="/login" className="text-2xl font-bold">Login</Link>
    </div>
  );
}
