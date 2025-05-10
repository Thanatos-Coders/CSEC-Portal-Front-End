"use client"

import * as React from "react"
import { List, Table } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SessionListView } from "@/components/pages/session/events/session-listview"
import { SessionTableView } from "@/components/pages/session/events/sessiontable"

import { cn } from "@/lib/utils"

type ViewMode = "list" | "table"

type ListSession = {
  id: string
  status: "planned" | "ended"
  division: string
  description: string
  date: string
  timeRemaining: string
  groups: string[]
  version: string
}

type TableSession = {
  id: string
  date: string
  title: string
  type: string
  visibility: "Public" | "Private"
  status: "Draft" | "Published"
}

interface SessionViewProps {
  listSessions: ListSession[]
  tableSessions: TableSession[]
}

export function SessionView({ listSessions, tableSessions }: SessionViewProps) {
  const [viewMode, setViewMode] = React.useState<ViewMode>("list")

  return (
    <div className="w-full">
      <div className="flex items-center mb-4">
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
      </div>

      {viewMode === "list" ? (
        <SessionListView sessions={listSessions} />
      ) : (
        <SessionTableView sessions={tableSessions} />
      )}
    </div>
  )
}
