"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"

interface AddRoleModalProps {
  onClose: () => void
}

export default function AddRoleModal({ onClose }: AddRoleModalProps) {
  const [isPermissionOpen, setIsPermissionOpen] = useState(false)
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([])
  const [status, setStatus] = useState<"active" | "inactive">("active")

  const permissions = ["All", "Upload Resources", "Create A Division", "Schedule Sessions", "Mark Attendance"]

  const togglePermission = (permission: string) => {
    if (permission === "All") {
      if (selectedPermissions.includes("All")) {
        setSelectedPermissions([])
      } else {
        setSelectedPermissions(permissions)
      }
      return
    }

    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions(selectedPermissions.filter((p) => p !== permission))
      // Also remove "All" if it was selected
      if (selectedPermissions.includes("All")) {
        setSelectedPermissions(selectedPermissions.filter((p) => p !== "All" && p !== permission))
      }
    } else {
      const newPermissions = [...selectedPermissions, permission]
      // Check if all individual permissions are selected, then add "All"
      if (permissions.slice(1).every((p) => newPermissions.includes(p))) {
        setSelectedPermissions([...newPermissions, "All"])
      } else {
        setSelectedPermissions(newPermissions)
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 space-y-6">
        <h2 className="text-xl font-semibold">Add New Role</h2>

        <div className="space-y-4">
          <div>
            <Input placeholder="Role Name" className="w-full" />
          </div>

          <div>
            <div
              className="flex justify-between items-center border rounded-md p-3 cursor-pointer"
              onClick={() => setIsPermissionOpen(!isPermissionOpen)}
            >
              <span className="text-gray-400">Add Permission</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {isPermissionOpen && (
              <div className="border rounded-md mt-1 p-3 space-y-2">
                {permissions.map((permission) => (
                  <div key={permission} className="flex items-center space-x-2">
                    <Checkbox
                      id={`permission-${permission}`}
                      checked={selectedPermissions.includes(permission)}
                      onCheckedChange={() => togglePermission(permission)}
                    />
                    <Label htmlFor={`permission-${permission}`} className="cursor-pointer">
                      {permission}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <Label className="block mb-2">Select Status</Label>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${status === "active" ? "border-blue-600" : "border-gray-300"}`}
                  onClick={() => setStatus("active")}
                >
                  {status === "active" && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                </div>
                <Label className="cursor-pointer" onClick={() => setStatus("active")}>
                  Active
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${status === "inactive" ? "border-blue-600" : "border-gray-300"}`}
                  onClick={() => setStatus("inactive")}
                >
                  {status === "inactive" && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                </div>
                <Label className="cursor-pointer" onClick={() => setStatus("inactive")}>
                  Inactive
                </Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button 
            variant="outline" 
            onClick={onClose} 
            className="h-10 px-6 rounded-[8px] border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button className="h-10 px-6 rounded-[8px] bg-[#003081] hover:bg-[#002a6e] text-white">
            Add Role
          </Button>
        </div>
      </div>
    </div>
  )
}