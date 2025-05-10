"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"

interface ResourcesProps {
  formData: {
    resources: { name: string; link: string }[]
  }
  handleChange: (field: string, value: File | null) => void
  handleResourceChange: (index: number, field: string, value: string) => void
  addResource: () => void
}

export default function Resources({ formData, handleResourceChange, addResource }: ResourcesProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Resources</h3>

        {formData.resources.map((resource, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`resourceName-${index}`}>Resource Name</Label>
              <Input
                id={`resourceName-${index}`}
                value={resource.name}
                onChange={(e) => handleResourceChange(index, "name", e.target.value)}
                placeholder="Resource Name"
                className="border border-gray-300" // Added solid border
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`resourceLink-${index}`}>Resource Link</Label>
              <Input
                id={`resourceLink-${index}`}
                value={resource.link}
                onChange={(e) => handleResourceChange(index, "link", e.target.value)}
                placeholder="Resource Link"
                className="border border-gray-300" // Added solid border
              />
            </div>
          </div>
        ))}

        <Button 
          type="button" 
          onClick={addResource} 
          className="flex items-center gap-2 h-10 px-4 py-2 rounded-lg bg-[#003081] hover:bg-[#003081]/90 text-white"
        >
          <PlusCircle className="h-4 w-4" />
          Add Resource
        </Button>
      </div>
    </div>
  )
}