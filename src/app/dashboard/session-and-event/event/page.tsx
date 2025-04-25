import { SessionView } from "@/components/pages/session/events/session-view"

// Define the ListSession type directly in this file
interface ListSession {
  id: string
  status: "planned" | "ended"
  division: string
  description: string
  date: string
  timeRemaining: string
  groups: string[]
  version: string
}

// Sample data for list view
const listSessions: ListSession[] = [
  {
    id: "1",
    status: "planned" as const,
    division: "Dev Division",
    description: "Development weekly session",
    date: "Wednesday, 04 July 2023",
    timeRemaining: "1d 12h 31m left",
    groups: ["Group 1", "Group 2", "Group 3"],
    version: "1.0.1",
  },
  {
    id: "2",
    status: "planned" as const, // Added "as const" here
    division: "Dev Division",
    description: "Development weekly session",
    date: "Wednesday, 04 July 2023",
    timeRemaining: "1d 12h 31m left",
    groups: ["Group 1", "Group 2", "Group 3"],
    version: "1.0.1",
  },
  {
    id: "3",
    status: "ended" as const,
    division: "Dev Division",
    description: "Development weekly session",
    date: "Wednesday, 04 July 2023",
    timeRemaining: "1d 12h 3m ago",
    groups: ["Group 1", "Group 2", "Group 3"],
    version: "1.0.1",
  },
  {
    id: "4",
    status: "planned" as const, // Added "as const" here
    division: "Dev Division",
    description: "Development weekly session",
    date: "Wednesday, 04 July 2023",
    timeRemaining: "1d 12h 31m left",
    groups: ["Group 1", "Group 2", "Group 3"],
    version: "1.0.1",
  },
]

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
  {
    id: "7",
    date: "July 07, 2023",
    title: "Cyber Security Tutorial",
    type: "Dev",
    visibility: "Public" as const,
    status: "Published" as const,
  },
  {
    id: "8",
    date: "July 08, 2023",
    title: "Weekly session",
    type: "Dev",
    visibility: "Private" as const,
    status: "Draft" as const,
  },
  {
    id: "9",
    date: "July 09, 2023",
    title: "Cyber Security Tutorial",
    type: "Dev",
    visibility: "Public" as const,
    status: "Published" as const,
  },
  {
    id: "10",
    date: "July 10, 2023",
    title: "Contest",
    type: "Dev",
    visibility: "Public" as const,
    status: "Draft" as const,
  },
  {
    id: "11",
    date: "July 11, 2023",
    title: "Game Night",
    type: "Dev",
    visibility: "Public" as const,
    status: "Published" as const,
  },
  {
    id: "12",
    date: "July 12, 2023",
    title: "Cyber Security Tutorial",
    type: "Dev",
    visibility: "Public" as const,
    status: "Published" as const,
  },
]

export default function Home() {
  return (
    <main className="p-4">
      {/* Your existing navbar and sidebar would go here */}
      <div className="max-w-5xl mx-auto">
        <SessionView listSessions={listSessions} tableSessions={tableSessions} />
      </div>
    </main>
  )
}
