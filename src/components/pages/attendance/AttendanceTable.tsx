import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Sample data for the attendance list
const attendanceData = [
  {
    id: 1,
    name: "Debbie Robertson",
    avatar: "http://github.com/shadcn",
  },
  { id: 2, name: "Floyd Files", avatar: "https://github.com/shadcn.png" },
  { id: 3, name: "Cody Fisher", avatar: "https://github.com/shadcn.png" },
  {
    id: 4,
    name: "Dianne Russell",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    avatar: "https://github.com/shadcn.png",
  },
  { id: 6, name: "Jacob Jones", avatar: "https://github.com/shadcn.png" },
  {
    id: 7,
    name: "Marvin McKinney",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 8,
    name: "Brooklyn Simmons",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 9,
    name: "Kristin Watson",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 10,
    name: "Kristin Watson",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 11,
    name: "Kathryn Murphy",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 12,
    name: "Arlene McCoy",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 13,
    name: "Arlene McCoy",
    avatar: "https://github.com/shadcn.png",
  },
];

export default function AttendanceTable() {
  const [attendanceStatus, setAttendanceStatus] = useState<
    Record<number, "present" | "absent" | null>
  >({});

  const handleAttendanceChange = (id: number, status: "present" | "absent") => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [id]: status,
    }));
  };

  return (
    <div className="divide-y">
      {attendanceData.map((member) => (
        <div key={member.id} className="grid grid-cols-3 gap-4 py-4 text-sm">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={member.avatar || "/placeholder.svg"}
                alt={member.name}
              />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{member.name}</span>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Button
              size="sm"
              variant={
                attendanceStatus[member.id] === "present"
                  ? "default"
                  : "outline"
              }
              onClick={() => handleAttendanceChange(member.id, "present")}
            >
              Present
            </Button>
            <Button
              size="sm"
              variant={
                attendanceStatus[member.id] === "absent" ? "default" : "outline"
              }
              onClick={() => handleAttendanceChange(member.id, "absent")}
            >
              Absent
            </Button>
          </div>
          <div>
            <Button
              size="sm"
              className="bg-[#003087] hover:bg-[#002f87a2] text-white"
            >
              Heads Up
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
