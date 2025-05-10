import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SessionHeaderProps {
  totalSessions: number
  filteredSessions: number
  userName: string
  userRole: string
  userAvatar?: string
}

export function SessionHeader({
  totalSessions,
  filteredSessions,
  userName,
  userRole,
  userAvatar = "/placeholder.svg?height=32&width=32",
}: SessionHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b ml-3.5">
      <div>
        <h1 className="text-xl font-semibold">Sessions & Events</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{totalSessions} sessions</span>
          <span>•</span>
          <span>{filteredSessions} sessions</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-[200px] rounded-md border border-input bg-background pl-8 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <span className="sr-only">Notifications</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </Button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
            <img
              src={userAvatar || "/placeholder.svg"}
              alt={`${userName} avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-xs">
            <div className="font-medium">{userName}</div>
            <div className="text-muted-foreground">{userRole}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
