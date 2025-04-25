import { Pencil, Trash2 } from "lucide-react"

export default function RolesTable() {
  const roles = [
    {
      id: 1,
      name: "Vice President",
      status: "active",
      permissions: ["Add Members", "Manage Members", "Schedule Sessions", "Create A Division"],
    },
    {
      id: 2,
      name: "Dev Head",
      status: "active",
      permissions: ["Upload Resources", "Manage Members", "Schedule Sessions", "Mark Attendance"],
    },
    {
      id: 3,
      name: "CBD President",
      status: "inactive",
      permissions: ["Schedule Sessions", "View All Division"],
    },
  ]

  return (
    <div className="space-y-6">
      {roles.map((role) => (
        <div key={role.id} className="border border-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  role.status === "active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {role.status === "active" ? "Active" : "Inactive"}
              </span>
              <span className="font-medium">{role.name}</span>
            </div>
            <div className="flex gap-2">
              <button className="text-gray-500 hover:text-blue-600">
                <Pencil className="w-4 h-4" />
              </button>
              <button className="text-gray-500 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">Permissions</div>
            <div className="flex flex-wrap gap-2">
              {role.permissions.map((permission, index) => (
                <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {permission}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
