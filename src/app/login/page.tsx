'use client';

// Import the LoginForm component (assuming it's in the same directory)
import{LoginForm}from"@/components/login/loginform";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center h-[100vh]">
        {/* Replace the "In Progress" message with your LoginForm */}
        <LoginForm />
      </div>
    </div>
  );
}