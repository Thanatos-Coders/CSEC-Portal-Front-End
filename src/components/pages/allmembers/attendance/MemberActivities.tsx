"use client"

import { format } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Activity = {
  id: string
  date: Date
  session: string
  startTime: string
  endTime: string
  status: string
}

export function MemberActivities() {
  return (
    <div className="flex rounded-lg border-1 border-gray-300 w-full my-5 mr-3">
      <div className="min-w-175 w-full">
        <ActivityTable />
      </div>
    </div>
  )
}

function ActivityTable() {
  const activities: Activity[] = [
    {
      id: "1",
      date: new Date("2023-07-05"),
      session: "Contest",
      startTime: "08:02 AM",
      endTime: "09:02 AM",
      status: "Present",
    },
    {
      id: "2",
      date: new Date("2023-07-05"),
      session: "Workshop",
      startTime: "08:02 AM",
      endTime: "09:02 AM",
      status: "Excused",
    },
    {
      id: "3",
      date: new Date("2023-07-04"),
      session: "Tutorial",
      startTime: "08:02 AM",
      endTime: "09:02 AM",
      status: "Present",
    },
    {
      id: "4",
      date: new Date("2023-07-04"),
      session: "Contest",
      startTime: "08:02 AM",
      endTime: "09:02 AM",
      status: "Absent",
    },
    {
      id: "5",
      date: new Date("2023-07-03"),
      session: "Workshop",
      startTime: "08:02 AM",
      endTime: "09:02 AM",
      status: "Excused",
    },
    {
      id: "6",
      date: new Date("2023-07-03"),
      session: "Tutorial",
      startTime: "08:02 AM",
      endTime: "09:02 AM",
      status: "Absent",
    },
    {
      id: "7",
      date: new Date("2023-07-02"),
      session: "Context",
      startTime: "08:02 AM",
      endTime: "09:02 AM",
      status: "Present",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-500">Date</TableHead>
          <TableHead className="text-gray-500">Session</TableHead>
          <TableHead className="text-gray-500">Start-Time</TableHead>
          <TableHead className="text-gray-500">End-Time</TableHead>
          <TableHead className="text-gray-500">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell>{format(activity.date, "MMM dd, yyyy")}</TableCell>
            <TableCell>{activity.session}</TableCell>
            <TableCell>{activity.startTime}</TableCell>
            <TableCell>{activity.endTime}</TableCell>
            <TableCell>
              <span
                className={cn(
                  "rounded px-2 py-1 text-xs font-medium",
                  "border-0",
                  activity.status === "Present" && "bg-green-100 text-green-500",
                  activity.status === "Excused" && "bg-yellow-100 text-yellow-500",
                  activity.status === "Absent" && "bg-red-100 text-red-500",
                )}
              >
                {activity.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}