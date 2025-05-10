"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "../../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Textarea } from "../../ui/text-area"
import { format } from "date-fns"
import { CalendarIcon, FileIcon, UploadIcon, X } from "lucide-react"

interface OptionalInformationProps {
  formData: {
    universityId: string
    linkedinAccount: string
    codeforces: string
    leetcode: string
    instagramHandle: string
    optionalDateOfBirth: string
    joiningDate: string
    bio: string
    cv: File | null
  }
  handleChange: (field: string, value: string | File | null) => void
}

export default function OptionalInformation({ formData, handleChange }: OptionalInformationProps) {
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(
    formData.optionalDateOfBirth ? new Date(formData.optionalDateOfBirth) : undefined,
  )

  const [joiningDate, setJoiningDate] = useState<Date | undefined>(
    formData.joiningDate ? new Date(formData.joiningDate) : undefined,
  )

  const [dragActive, setDragActive] = useState(false)

  const handleDateOfBirthChange = (date: Date | undefined) => {
    setDateOfBirth(date)
    if (date) {
      handleChange("optionalDateOfBirth", format(date, "yyyy-MM-dd"))
    }
  }

  const handleJoiningDateChange = (date: Date | undefined) => {
    setJoiningDate(date)
    if (date) {
      handleChange("joiningDate", format(date, "yyyy-MM-dd"))
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      handleChange("cv", file)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      handleChange("cv", file)
    }
  }

  const removeFile = () => {
    handleChange("cv", null)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="universityId">University ID</Label>
            <Input
              id="universityId"
              value={formData.universityId}
              onChange={(e) => handleChange("universityId", e.target.value)}
              placeholder="University ID"
              className="border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedinAccount">LinkedIn Account</Label>
            <Input
              id="linkedinAccount"
              value={formData.linkedinAccount}
              onChange={(e) => handleChange("linkedinAccount", e.target.value)}
              placeholder="LinkedIn Account"
              className="border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="codeforces">Codeforces Handle</Label>
            <Input
              id="codeforces"
              value={formData.codeforces}
              onChange={(e) => handleChange("codeforces", e.target.value)}
              placeholder="Codeforces Handle"
              className="border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="leetcode">LeetCode Handle</Label>
            <Input
              id="leetcode"
              value={formData.leetcode}
              onChange={(e) => handleChange("leetcode", e.target.value)}
              placeholder="LeetCode Handle"
              className="border"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="instagramHandle">Instagram Handle</Label>
            <Input
              id="instagramHandle"
              value={formData.instagramHandle}
              onChange={(e) => handleChange("instagramHandle", e.target.value)}
              placeholder="Instagram Handle"
              className="border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button id="dateOfBirth" variant="outline" className="w-full justify-start text-left font-normal border">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateOfBirth ? format(dateOfBirth, "PPP") : <span>Date of Birth</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={dateOfBirth} onSelect={handleDateOfBirthChange} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cv">CV</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-4 w-full flex flex-col items-center justify-center space-y-2 ${
                dragActive ? "border-primary bg-primary/5" : "border-gray-300"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {formData.cv ? (
                <div className="flex items-center justify-between w-full p-2 bg-gray-50 rounded-md">
                  <div className="flex items-center space-x-2">
                    <FileIcon className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-sm font-medium">{formData.cv.name}</p>
                      <p className="text-xs text-gray-500">{(formData.cv.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <Button type="button" variant="ghost" size="sm" onClick={removeFile}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <UploadIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">Upload CV</span>
                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById("cv-upload")?.click()}
                    className="border"
                  >
                    Browse
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="joiningDate">Joining Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button id="joiningDate" variant="outline" className="w-full justify-start text-left font-normal border">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {joiningDate ? format(joiningDate, "PPP") : <span>Joining Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={joiningDate} onSelect={handleJoiningDateChange} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
              placeholder="Write a short bio about yourself..."
              className="min-h-[100px] border"
            />
          </div>
        </div>
      </div>
    </div>
  )
}