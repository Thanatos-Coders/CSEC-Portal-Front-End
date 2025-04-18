import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SessionCalendar() {
  
  const month = "July"
  const year = "2023"

  
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  const dates = [
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, null, null, null, null, null, null],
  ]

  
  const sessions = [
    {
      day: "Wednesday, 05 July 2023",
      events: [
        {
          time: "09:30",
          division: "CPD",
          title: "Context in CPD Division",
        },
        {
          time: "12:00",
          division: "Development Division",
          title: "Development Weekly Sessions",
        },
        {
          time: "01:30",
          division: "Cyber",
          title: "Cyber Weekly Sessions",
        },
      ],
    },
    {
      day: "Thursday, 07 July 2023",
      events: [
        {
          time: "09:30",
          division: "Data Science",
          title: "Data Science Weekly Sessions",
        },
        {
          time: "11:00",
          division: "CPD",
          title: "Context Analysis in CPD Division",
        },
      ],
    },
  ]

  return (
    <div className="space-y-4 border-1 border-gray-300 rounded-xl p-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-lg font-semibold">Session</h3>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 ">
              <Button variant="outline" size="icon" className="h-7 w-7 bg-blue-700">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="font-medium">
                {month}, {year}
              </div>
              <Button variant="outline" size="icon" className="h-7 w-7 bg-blue-700">
                <ChevronRight className="h-4 w-4 " />
              </Button>
            </div>
          </div>

          <div className="mb-4">
            <div className="grid grid-cols-7 text-center text-xs mb-1">
              {days.map((day, i) => (
                <div key={i} className="py-1">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-sm">
              {dates.flat().map((date, i) => (
                <div
                  key={i}
                  className={cn(
                    "aspect-square flex items-center justify-center rounded-full",
                    date === 6 && "bg-blue-600 text-white", // Highlight current day
                    date === null && "invisible",
                    date !== 6 && date !== null && "hover:bg-muted",
                  )}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>

          {/* Sessions List */}
          <div className="space-y-4">
            {sessions.map((session, idx) => (
              <div key={idx}>
                <div className="text-sm font-medium mb-2">{session.day}</div>
                <div className="space-y-3">
                  {session.events.map((event, eventIdx) => (
                    <div key={eventIdx} className="flex gap-3">
                      <div className="text-sm font-medium w-10">{event.time}</div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground">{event.division}</div>
                        <div className="text-sm">{event.title}</div><hr />
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
