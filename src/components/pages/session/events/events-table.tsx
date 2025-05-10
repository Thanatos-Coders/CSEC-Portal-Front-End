import { Eye, EyeOff, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function EventsTable() {
  const events = [
    {
      id: 1,
      date: "July 01, 2023",
      title: "Cyber Security Tutorial",
      type: "CFD",
      visibility: "Public",
      status: "Active",
    },
    {
      id: 2,
      date: "July 07, 2023",
      title: "Cyber Security Tutorial",
      type: "CFD",
      visibility: "Public",
      status: "Active",
    },
    {
      id: 3,
      date: "July 23, 2023",
      title: "Weekly session",
      type: "CFD",
      visibility: "Private",
      status: "Active",
    },
    {
      id: 4,
      date: "July 24, 2023",
      title: "Cyber Security Tutorial",
      type: "CFD",
      visibility: "Public",
      status: "Draft",
    },
    {
      id: 5,
      date: "July 25, 2023",
      title: "Contest",
      type: "CFD",
      visibility: "Public",
      status: "Active",
    },
    {
      id: 6,
      date: "July 27, 2023",
      title: "Cyber Security Tutorial",
      type: "CFD",
      visibility: "Public",
      status: "Active",
    },
    {
      id: 7,
      date: "July 28, 2023",
      title: "Contest",
      type: "Dev",
      visibility: "Public",
      status: "Active",
    },
    {
      id: 8,
      date: "July 29, 2023",
      title: "Weekly session",
      type: "Dev",
      visibility: "Private",
      status: "Active",
    },
    {
      id: 9,
      date: "July 30, 2023",
      title: "Cyber Security Tutorial",
      type: "Dev",
      visibility: "Public",
      status: "Active",
    },
    {
      id: 10,
      date: "July 31, 2023",
      title: "Weekly session",
      type: "Dev",
      visibility: "Private",
      status: "Active",
    },
    {
      id: 11,
      date: "July 04, 2023",
      title: "Game Night",
      type: "Dev",
      visibility: "Public",
      status: "Active",
    },
    {
      id: 12,
      date: "July 05, 2023",
      title: "Cyber Security Tutorial",
      type: "Dev",
      visibility: "Public",
      status: "Active",
    },
  ]

  return (
    <div className="border rounded-md">
      <table className="w-full">
        <thead>
          <tr className="border-b text-xs text-gray-500">
            <th className="px-4 py-3 text-left font-medium">Date</th>
            <th className="px-4 py-3 text-left font-medium">Event Title</th>
            <th className="px-4 py-3 text-left font-medium">Event Type</th>
            <th className="px-4 py-3 text-left font-medium">Visibility</th>
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b last:border-b-0 hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">{event.date}</td>
              <td className="px-4 py-3 text-sm font-medium">{event.title}</td>
              <td className="px-4 py-3">
                <Badge variant="outline" className="bg-gray-100 text-gray-700 font-normal">
                  {event.type}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <Badge
                  variant="outline"
                  className={`${
                    event.visibility === "Public" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  } font-normal`}
                >
                  {event.visibility === "Public" ? (
                    <Eye className="mr-1 h-3 w-3" />
                  ) : (
                    <EyeOff className="mr-1 h-3 w-3" />
                  )}
                  {event.visibility}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <Badge
                  variant="outline"
                  className={`${
                    event.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : event.status === "Draft"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100 text-gray-700"
                  } font-normal`}
                >
                  {event.status}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4 text-gray-500" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4 text-gray-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
