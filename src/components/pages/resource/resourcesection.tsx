"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, FileText } from "lucide-react"

interface Resource {
  id: number
  name: string
  link: string
}

interface ResourceSectionProps {
  title: string
  description: string
  resources: Resource[]
  isOpen: boolean
}

export default function ResourceSection({
  title,
  description,
  resources,
  isOpen: defaultIsOpen,
}: ResourceSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  return (
    <div className=" rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-lg">{title}</h2>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700">
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      {isOpen && (
        <div className="divide-y">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <div key={resource.id} className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-gray-400" />
                  </div>
                  <span>{resource.name}</span>
                </div>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </a>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500 text-sm">No resources available</div>
          )}
        </div>
      )}
    </div>
  )
}
