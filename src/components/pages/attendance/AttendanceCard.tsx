interface AttendanceCardProps {
    status: "Ended" | "Planned"
    title: string
    description: string
    date: string
    groups: string[]
  }
  
  export default function AttendanceCard({ status, title, description, date, groups }: AttendanceCardProps) {
    const statusColor = status === "Ended" ? "bg-red-50 text-red-500" : "bg-yellow-50 text-yellow-500"
  
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${statusColor} mb-2`}>{status}</span>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-xs text-gray-500 mt-1">{date}</p>
          </div>
          <button className="flex items-center space-x-1 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-md">
            <span>Attendance</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {groups.map((group, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
              {group}
            </span>
          ))}
        </div>
      </div>
    )
  }  