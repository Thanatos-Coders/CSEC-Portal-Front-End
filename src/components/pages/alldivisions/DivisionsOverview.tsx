"use client"

import { useState } from "react"
import DivisionCardComponent from "@/components/pages/alldivisions/DivisionCard"

// Division data model
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

// Sample data
const divisionsData: Division[] = [
  {
    id: 1,
    name: "Data Science Division",
    totalMembers: 10,
    groups: [
      { id: 1, name: "Group 1", members: 3 },
      { id: 2, name: "Group 2", members: 2 },
      { id: 3, name: "Group 3", members: 3 },
      { id: 4, name: "Group 4", members: 2 },
    ],
  },
  {
    id: 2,
    name: "Development Division",
    totalMembers: 15,
    groups: [
      { id: 1, name: "Group 1", members: 4 },
      { id: 2, name: "Group 2", members: 3 },
      { id: 3, name: "Group 3", members: 4 },
      { id: 4, name: "Group 4", members: 4 },
    ],
  },
  {
    id: 3,
    name: "CPD Division",
    totalMembers: 5,
    groups: [
      { id: 1, name: "Group 1", members: 1 },
      { id: 2, name: "Group 2", members: 1 },
      { id: 3, name: "Group 3", members: 2 },
      { id: 4, name: "Group 4", members: 1 },
    ],
  },
  {
    id: 4,
    name: "Cyber Division",
    totalMembers: 10,
    groups: [
      { id: 1, name: "Group 1", members: 3 },
      { id: 2, name: "Group 2", members: 2 },
      { id: 3, name: "Group 3", members: 3 },
      { id: 4, name: "Group 4", members: 2 },
    ],
  },
]

export default function DivisionsOverview() {
  const [searchQuery] = useState("")

  const filteredDivisions = divisionsData.filter((division) =>
    division.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {filteredDivisions.map((division) => (
          <DivisionCardComponent key={division.id} division={division} className="flex-1 min-w-[calc(50%-1.5rem)]" />
        ))}
      </div>
    </div>
  )
}
