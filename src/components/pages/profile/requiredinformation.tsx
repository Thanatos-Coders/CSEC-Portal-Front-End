"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, X } from "lucide-react"
import Image from "next/image"

interface RequiredInformationProps {
  formData: {
    firstName: string
    lastName: string
    mobileNumber: string
    email: string
    dateOfBirth: string
    gender: string
    expectedGradYear: string
    otherDepartment: string
    github: string
    telegramHandle: string
    member: string
    photo: File | null
  }
  handleChange: (field: string, value: string | File | null) => void
  onNext: () => void
  onCancel: () => void
  isUpdating?: boolean
}

export default function RequiredInformation({ 
  formData, 
  handleChange, 
  onNext, 
  onCancel, 
  isUpdating = false 
}: RequiredInformationProps) {
  const [date, setDate] = useState<Date | undefined>(formData.dateOfBirth ? new Date(formData.dateOfBirth) : undefined)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const handleDateChange = (date: Date | undefined) => {
    setDate(date)
    if (date) {
      handleChange("dateOfBirth", format(date, "yyyy-MM-dd"))
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      handleChange("photo", file)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removePhoto = () => {
    handleChange("photo", null)
    setPhotoPreview(null)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-2">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-24 h-24 mb-2">
              {photoPreview ? (
                <>
                  <Image
                    src={photoPreview}
                    alt="Profile photo"
                    fill
                    className="rounded-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removePhoto}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <UserIcon className="h-12 w-12 text-gray-400" />
                </div>
              )}
            </div>
            <Label htmlFor="photo" className="cursor-pointer text-sm text-primary">
              Upload Photo
            </Label>
            <Input 
              id="photo" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handlePhotoChange} 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="firstName"></Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="First Name"
              required
              className="border border-gray-300 rounded-[8px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobileNumber"></Label>
            <Input
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={(e) => handleChange("mobileNumber", e.target.value)}
              placeholder="Mobile Number"
              required
              className="border border-gray-300 rounded-[8px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth"></Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left font-normal border border-gray-300 rounded-[8px] h-10"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Date of Birth</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={handleDateChange} 
                  initialFocus 
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expectedGradYear"></Label>
            <Input
              id="expectedGradYear"
              value={formData.expectedGradYear}
              onChange={(e) => handleChange("expectedGradYear", e.target.value)}
              placeholder="Expected Graduation Year"
              className="border border-gray-300 rounded-[8px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherDepartment"></Label>
            <Input
              id="otherDepartment"
              value={formData.otherDepartment}
              onChange={(e) => handleChange("otherDepartment", e.target.value)}
              placeholder="Other Department"
              className="border border-gray-300 rounded-[8px]"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="lastName"></Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Last Name"
              required
              className="border border-gray-300 rounded-[8px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email"></Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email Address"
              required
              className="border border-gray-300 rounded-[8px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender"></Label>
            <Select 
              value={formData.gender} 
              onValueChange={(value) => handleChange("gender", value)}
            >
              <SelectTrigger className="border border-gray-300 rounded-[8px]">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="github"></Label>
            <Input
              id="github"
              value={formData.github}
              onChange={(e) => handleChange("github", e.target.value)}
              placeholder="GitHub"
              className="border border-gray-300 rounded-[8px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telegramHandle"></Label>
            <Input
              id="telegramHandle"
              value={formData.telegramHandle}
              onChange={(e) => handleChange("telegramHandle", e.target.value)}
              placeholder="Telegram Handle"
              className="border border-gray-300 rounded-[8px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="member"></Label>
            <Input
              id="member"
              value={formData.member}
              onChange={(e) => handleChange("member", e.target.value)}
              placeholder="Member"
              className="border border-gray-300 rounded-[8px]"
            />
          </div>
        </div>
      </div>

      {/* Single set of action buttons at the bottom */}
      <div className="flex justify-end space-x-4 mt-8">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="rounded-[8px] h-10 px-6 bg-white border border-gray-300 hover:bg-gray-50"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={onNext}
          className="rounded-[8px] h-10 px-6 bg-[#003081] hover:bg-[#003081]/90 text-white"
        >
          {isUpdating ? 'Update' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}