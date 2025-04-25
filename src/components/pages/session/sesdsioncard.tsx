import { Button } from "@/components/ui/button"

interface SessionCardProps {
  status: "planned" | "ended"
  division: string
  description: string
  date: string
  timeLeft: string
}

export function SessionCard({ status, division, description, date, timeLeft }: SessionCardProps) {
  const statusColor = {
    planned: "bg-amber-50 text-amber-500 border-amber-200",
    ended: "bg-rose-50 text-rose-500 border-rose-200",
  }

  const statusText = {
    planned: "Planned",
    ended: "Ended",
  }

  return (
    <div className="mb-4 rounded-lg border bg-card text-card-foreground w-[99%]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-5">
            <div className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${statusColor[status]}`}>
              {statusText[status]}
            </div>
            <h3 className="text-lg font-medium">{division}</h3>
          </div>
          <div className="text-sm text-muted-foreground">{timeLeft}</div>
        </div>
        <div className="mb-2">
          
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Group 1
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Group 2
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Group 3
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">Version • Lab 1</div>
        </div>
      </div>
    </div>
  )
}
