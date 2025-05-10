import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RulesTable() {
  const rules = [
    {
      id: 1,
      name: "Max Absences",
      description: "Members exceeding this cap flagged for review.",
      value: "3"
    },
    {
      id: 2,
      name: "Warning After",
      description: "Members receive a warning notification after this many absences.",
      value: "2"
    },
    {
      id: 3,
      name: "Suspend After",
      description: "Members automatically suspended.",
      value: "4"
    },
    {
      id: 4,
      name: "Fire After",
      description: "Members removed from division can rejoin later.",
      value: "5"
    },
    {
      id: 5,
      name: "Permanent Restriction",
      description: "Members banned permanently.",
      value: "Members"
    },
  ]

  return (
    <div className="space-y-4">
      {rules.map((rule) => (
        <div key={rule.id} className="flex items-center justify-between border-b border-gray-200 py-4">
          <div className="flex-1">
            <h3 className="font-medium ">{rule.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{rule.description}</p>
          </div>
          
          <div className="ml-4">
            {rule.name === "Permanent Restriction" ? (
              <Button 
                variant="default"
                className="bg-[#003081] hover:bg-[#003081]/90 text-white text-base h-10 px-6 rounded-lg" // Added h-10, px-6, rounded-lg (8px)
              >
                {rule.value}
              </Button>
            ) : (
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 bg-white">
                <span className="text-sm font-medium text-gray-700">{rule.value}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}