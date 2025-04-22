import AttendanceCard from "@/components/pages/attendance/AttendanceCard"

export default function AttendanceList() {
  // Sample data
  const attendanceData = [
    {
      status: "Ended" as const,
      title: "Dev Division",
      description: "Development weekly session",
      date: "Wednesday, 10 July 2023",
      groups: ["Group 1", "Group 2", "Group 3"],
    },
    {
      status: "Planned" as const,
      title: "Dev Division",
      description: "Development weekly session",
      date: "Wednesday, 17 July 2023",
      groups: ["Group 1", "Group 2", "Group 3"],
    },
    {
      status: "Ended" as const,
      title: "Dev Division",
      description: "Development weekly session",
      date: "Wednesday, 03 July 2023",
      groups: ["Group 1", "Group 2", "Group 3"],
    },
    {
      status: "Planned" as const,
      title: "Dev Division",
      description: "Development weekly session",
      date: "Wednesday, 24 July 2023",
      groups: ["Group 1", "Group 2", "Group 3"],
    },
  ]

  return (
    <div className="w-full h-screen pl-2 overflow-y-scroll scrollbar-custom">
      <div className="space-y-4">
        {attendanceData.map((item, index) => (
          <AttendanceCard
            key={index}
            status={item.status}
            title={item.title}
            description={item.description}
            date={item.date}
            groups={item.groups}
          />
        ))}
      </div>
    </div>
  )
}
