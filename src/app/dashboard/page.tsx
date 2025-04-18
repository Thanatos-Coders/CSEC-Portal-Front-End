'use client';

import Events from '@/components/pages/dashboard/UpcomingEvents'
import Calendar from '@/components/pages/dashboard/SessionsCalendar'

export default function Home() {
  return (
    <div className="flex gap-4 w-auto ml-6 mr-2">
       <Events />
       <Calendar />
    </div>
  );
}

