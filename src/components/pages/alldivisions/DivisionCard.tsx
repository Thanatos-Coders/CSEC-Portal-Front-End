"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface Group {
  id: number
  name: string
  members: number
}

interface Division {
  id: number
  name: string
  totalMembers: number
  groups: Group[]
}

interface DivisionCardProps {
  division: Division
  className?: string
}

export default function DivisionCard({ division, className }: DivisionCardProps) {
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({})

  const toggleGroup = (groupId: number) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }))
  }

  return (
    <Card className="border-1 border-gray-300 rounded-[8px] p-3 dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-medium">{division.name}</CardTitle>
        <Button variant="link" className="text-sm font-medium text-[#003087] hover:text-[#0056d2]">
          View All
        </Button>
      </CardHeader>
      <div className="text-sm text-muted-foreground">{division.totalMembers} Groups</div>
      <div className="flex justify-center border-b w-105"></div>
      <CardContent className="p-0">
        <div className="space-y-1">
          {division.groups.map((group) => (
            <Collapsible
              key={group.id}
              open={openGroups[group.id]}
              onOpenChange={() => toggleGroup(group.id)}
            >
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex w-full justify-between p-2 font-normal">
                  <div className="flex flex-col items-start">
                    <span>{group.name}</span>
                    <span className="text-xs text-muted-foreground">{group.members} Members</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${openGroups[group.id] ? "rotate-90" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-2">
                <ul className="space-y-1 text-sm">
                  {Array.from({ length: group.members }).map((_, idx) => (
                    <li key={idx} className="flex items-center gap-2 py-1">
                      <div className="h-6 w-6 rounded-full bg-muted"></div>
                      <span>Members {idx + 1}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
