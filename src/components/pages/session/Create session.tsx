"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MdAddCircleOutline } from "react-icons/md"

export function CreateSessionDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="bg-blue-800 hover:bg-blue-700 rounded-[8px]">
          <div className="mr-2"><MdAddCircleOutline /></div>
          Create Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-lg font-semibold">Add New Event</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
          <div className="flex gap-6">
            {/* Left side - Event title and date */}
            <div className="flex-1 space-y-4">
              <div>
                <Label htmlFor="title" className="text-sm text-gray-500 mb-1 block">
                  Event Title
                </Label> 
                <Input id="title" className="w-full" />
              </div>
              <div>
                <Label htmlFor="date" className="text-sm text-gray-500 mb-1 block">
                  Select Date
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="custom">Custom Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Right side - Visibility and time inputs */}
            <div className="flex-1 space-y-4">
              <div>
                <Label className="text-sm text-gray-500 mb-2 block">
                  Select Visibility
                </Label>
                <RadioGroup defaultValue="public" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public" id="public" />
                    <Label htmlFor="public" className="font-normal">Public</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="members" id="members" />
                    <Label htmlFor="members" className="font-normal">Only for Members</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startTime" className="text-sm text-gray-500 mb-1 block">
                    Start Time
                  </Label>
                  <Input id="startTime" className="w-full" />
                </div>
                <div>
                  <Label htmlFor="endTime" className="text-sm text-gray-500 mb-1 block">
                    End Time
                  </Label>
                  <Input id="endTime" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex justify-start gap-2 mt-6 p-0 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-blue-800 hover:bg-blue-700 rounded-[8px]" 
              onClick={() => setOpen(false)}
            >
              Create
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  ) 
}