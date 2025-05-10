"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddHeadModalProps {
  onClose: () => void
}

export default function AddHeadModal({ onClose }: AddHeadModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 space-y-6">
        <h2 className="text-xl font-semibold">Add New Head</h2>

        <div className="space-y-4">
          <div>
            <Select>
              <SelectTrigger className="w-full text-gray-400">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="head">Head</SelectItem>
                <SelectItem value="vice-president">Vice President</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-full text-gray-400">
                <SelectValue placeholder="Select Division" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="cpo">CPD</SelectItem>
                <SelectItem value="cyber">Cyber</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-full text-gray-400">
                <SelectValue placeholder="Select Head" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="darlene">Darlene Robertson</SelectItem>
                <SelectItem value="floyd">Floyd Miles</SelectItem>
                <SelectItem value="dianne">Dianne Russell</SelectItem>
                <SelectItem value="cody">Cody Fisher</SelectItem>
                <SelectItem value="jacob">Jacob Jones</SelectItem>
              </SelectContent>
            </Select>
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
            Assign
          </Button>
        </div>
      </div>
    </div>
  )
}