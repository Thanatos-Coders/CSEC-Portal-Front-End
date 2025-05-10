import { MdAddCircleOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

interface AttendanceCardProps {
  status: "Ended" | "Planned";
  title: string;
  description: string;
  date: string;
  groups: string[];
}

export default function AttendanceCard({
  status,
  title,
  description,
  date,
  groups,
}: AttendanceCardProps) {
  const route = useRouter();
  const handleAttendanceClick = () => {
    route.push("/dashboard/attendance/group");
  };

  // Determine the color based on the status
  const statusColor =
    status === "Ended"
      ? "bg-red-50 text-red-500"
      : "bg-yellow-50 text-yellow-500";

  return (
    <div className="rounded-lg border border-gray-300 p-6 mb-4 w-[98%] cursor-pointer" onClick={handleAttendanceClick}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex gap-5">
            <span
              className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${statusColor} mb-2`}
            >
              {status}
            </span>
            <h3 className="font-medium">{title}</h3>
          </div>
          <p className="text-sm">{description}</p>
          <p className="text-xs text-gray-500 mt-1">{date}</p>
        </div>
        <button className="flex items-center h-7 space-x-1 bg-[#003087] text-white text-xs px-3 py-3 rounded-[8px] cursor-pointer">
          <MdAddCircleOutline className="h-4 w-4" />
          <span className="text-sm">Attendance</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {groups.map((group, index) => (
          <span
            key={index}
            className="px-2 py-1 border-2 border-gray-300 text-xs rounded-2xl"
          >
            {group}
          </span>
        ))}
      </div>
    </div>
  );
}
