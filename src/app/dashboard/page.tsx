"use client";

import Events from "@/components/pages/dashboard/UpcomingEvents";
import Calendar from "@/components/pages/dashboard/SessionsCalendar";

export default function Home() {
  return (
    <div className="flex m-2">
      <div className="flex gap-4 w-full">
        <Events />
        <Calendar />
      </div>
    </div>
  );
}
