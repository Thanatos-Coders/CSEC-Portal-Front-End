import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SessionListViewProps {
  sessions: {
    id: string
    status: "planned" | "ended"
    division: string
    description: string
    date: string
    timeRemaining: string
    groups: string[]
    version: string
  }[]
}

export function SessionListView({ sessions }: SessionListViewProps) {
  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <Card key={session.id} className="p-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "px-2 py-0.5 text-xs font-medium",
                    session.status === "planned"
                      ? "bg-amber-50 text-amber-500 border-amber-200"
                      : "bg-red-50 text-red-500 border-red-200",
                  )}
                >
                  {session.status === "planned" ? "Planned" : "Ended"}
                </Badge>
                <h3 className="font-medium">{session.division}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{session.description}</p>
              <p className="text-xs text-muted-foreground">{session.date}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {session.groups.map((group) => (
                  <Badge key={group} variant="secondary" className="text-xs">
                    {group}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{session.timeRemaining}</p>
              <p className="text-xs text-muted-foreground mt-auto pt-8">Version: {session.version}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
