"use client"

import { useState } from "react"
import { List, Table } from "lucide-react"
import { CreateSessionDialog } from "@/components/pages/session/Create session" // Fixed space in filename
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { SessionCard } from "@/components/pages/session/sesdsioncard"
import { Button } from "@/components/ui/button"
import { SessionTableView } from "@/components/pages/session/events/sessiontable"
import { cn } from "@/lib/utils"

// Sample data for table view
const tableSessions = [
  {
    id: "1",
    date: "July 01, 2023",
    title: "Cyber Security Tutorial",
    type: "CPD",
    visibility: "Public" as const,
    status: "Draft" as const,
  },
  {
    id: "2",
    date: "July 02, 2023",
    title: "Cyber Security Tutorial",
    type: "CPD",
    visibility: "Public" as const,
    status: "Published" as const,
  },
  {
    id: "3",
    date: "July 03, 2023",
    title: "Weekly session",
    type: "CPD",
    visibility: "Private" as const,
    status: "Draft" as const,
  },
  {
    id: "4",
    date: "July 04, 2023",
    title: "Cyber Security Tutorial",
    type: "CPD",
    visibility: "Public" as const,
    status: "Published" as const,
  },
  {
    id: "5",
    date: "July 05, 2023",
    title: "Contest",
    type: "CPD",
    visibility: "Public" as const,
    status: "Draft" as const,
  },
  {
    id: "6",
    date: "July 06, 2023",
    title: "Contest",
    type: "CPD",
    visibility: "Public" as const,
    status: "Published" as const,
  },
]

export default function Page() {
  const [viewMode, setViewMode] = useState<"list" | "table">("list")

  return (
    <div className="shadow-lg p-4 space-y-4 bg-white rounded-lg border border-gray-300">
      <div className="space-y-4 p-4">
        {/* Top Section */}
        <div className="flex flex-col gap-4">{/* Your existing top section content */}</div>

        {/* Middle Section with Selector and View Toggle */}
        <div className="flex justify-between items-center">
          {/* List/Table Toggle Buttons */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              className={cn("rounded-none px-4 py-2 h-10", viewMode === "list" ? "bg-blue-600 hover:bg-blue-700" : "")}
              onClick={() => setViewMode("list")}
            >
              <List className="h-5 w-5 mr-2" />
              List
            </Button>
            <Button
              variant={viewMode === "table" ? "default" : "ghost"}
              className={cn("rounded-none px-4 py-2 h-10", viewMode === "table" ? "bg-blue-600 hover:bg-blue-700" : "")}
              onClick={() => setViewMode("table")}
            >
              <Table className="h-5 w-5 mr-2" />
              Table
            </Button>
          </div>

          {/* Create Session and Select */}
          <div className="flex justify-end gap-2">
            <CreateSessionDialog />
            <Select defaultValue="session">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="session">Session</SelectItem>
                <SelectItem value="event">Event</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Content Section - Toggle between List and Table */}
        {viewMode === "list" ? (
          // Session Cards Section (List View)
          <div className="flex-1 overflow-y-scroll scrollbar-custom h-screen space-y-6">
            <SessionCard
              status="planned"
              division="Dev Division"
              description="Development weekly session"
              date="October 10, 7:30 PM"
              timeLeft="1d 12h 31m left"
            />
            <SessionCard
              status="planned"
              division="Dev Division"
              description="Development weekly session"
              date="October 10, 7:30 PM"
              timeLeft="1d 12h 31m left"
            />
            <SessionCard
              status="ended"
              division="Dev Division"
              description="Development weekly session"
              date="October 10, 7:30 PM"
              timeLeft="1d 12h 3m ago"
            />
            <SessionCard
              status="planned"
              division="Dev Division"
              description="Development weekly session"
              date="October 10, 7:30 PM"
              timeLeft="1d 12h 31m left"
            />
          </div>
        ) : (
          // Table View
          <div className="mt-4">
            <SessionTableView sessions={tableSessions} />
          </div>
        )}
      </div>
    </div>
  )
}
