'use client';

import { SessionCalendar } from '@/components/sessioncalender/sessioncalender';
import { UpcomingEvent } from '@/components/upcoming-event.tsx/upcomingevent';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 h-full">
    
      <div className="flex-1">
        <UpcomingEvent />
      </div>
      
      
      <div className="md:w-[320px] w-full h-full">
        <div className="h-full">
          <SessionCalendar />
        </div>
      </div>
    </div>
  );
}