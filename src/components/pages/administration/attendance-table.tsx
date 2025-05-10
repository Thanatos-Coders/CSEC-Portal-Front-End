import { Pencil, Trash2, Search, Filter } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function AttendanceTable() {
  const members = [
    {
      id: 1,
      name: "Darlene Robertson",
      userId: "USG/2062/14",
      department: "Design",
      attendance: "Present",
      status: "Active",
    },
    {
      id: 2,
      name: "Floyd Miles",
      userId: "USG/2062/14",
      department: "Development",
      attendance: "Absent",
      status: "Suspended",
    },
    // Add more members to match the image
  ]

  return (
    <div className=" rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search" className="pl-10 w-64" />
        </div>
        <div className="flex gap-2">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            Remove Selected
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-500 text-sm">
              <th className="py-3 px-4">
                <Checkbox />
              </th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">User ID</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Attendance</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t border-gray-100">
                <td className="py-3 px-4">
                  <Checkbox />
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/images/after-rule.png"
                        alt={member.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span>{member.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4">{member.userId}</td>
                <td className="py-3 px-4">{member.department}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      member.attendance === "Present" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {member.attendance}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      member.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-gray-500 hover:text-blue-600">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="text-gray-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 flex justify-between items-center border-t">
        <div className="text-sm text-gray-500">Showing 1-10 of 50 members</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="w-8 h-8 p-0">
            &lt;
          </Button>
          <Button variant="default" size="sm" className="w-8 h-8 p-0 bg-blue-600">
            1
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0">
            2
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0">
            3
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0">
            4
          </Button>
          <Button variant="outline" size="sm" className="w-8 h-8 p-0">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  )
}
