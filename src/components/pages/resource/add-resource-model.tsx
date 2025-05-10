"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AddResourceModalProps {
  onClose: () => void
  onAdd: (name: string, link: string) => void
}

export default function AddResourceModal({ onClose, onAdd }: AddResourceModalProps) {
  const [resourceName, setResourceName] = useState("")
  const [resourceLink, setResourceLink] = useState("")

  const handleSubmit = () => {
    if (resourceName.trim() && resourceLink.trim()) {
      onAdd(resourceName, resourceLink)
    }
  }

  return (
    <div className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className=" bg-white rounded-lg w-full max-w-md p-6 space-y-6">
        <h2 className="text-xl font-semibold">Add New Resource</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Resource Name</label>
            <Input
              placeholder="Enter resource name"
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
              className="w-full border border-gray-300 rounded-[8px] px-3 py-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Resource Link</label>
            <Input
              placeholder="Enter resource URL"
              value={resourceLink}
              onChange={(e) => setResourceLink(e.target.value)}
              className="w-full border border-gray-300 rounded-[8px] px-3 py-2"
            />
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
          <Button 
            onClick={handleSubmit}
            className="h-10 px-6 rounded-[8px] bg-[#003081] hover:bg-[#002a6e] text-white"
          >
            Add Resource
          </Button>
        </div>
      </div>
    </div>
  )
}