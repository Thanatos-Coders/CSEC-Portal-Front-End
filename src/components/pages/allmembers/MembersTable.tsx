"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Member {
  id: string;
  name: string;
  avatar?: string;
  attendance: "Active" | "Inactive" | "Needs Attention";
  year: string;
  status: "OnCampus" | "OffCampus" | "Withdrawn";
}

interface MembersTableProps {
  members: Member[];
  className?: string;
}

export function MembersTable({ members, className }: MembersTableProps) {
  const router = useRouter();

  const handleEdit = (memberId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Edit member:", memberId);
  };

  const handleDelete = (memberId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Delete member:", memberId);
  };

  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-500">Member Name</TableHead>
            <TableHead className="text-gray-500">Member ID</TableHead>
            <TableHead className="text-gray-500">Attendance</TableHead>
            <TableHead className="text-gray-500">Year</TableHead>
            <TableHead className="text-gray-500">Status</TableHead>
            <TableHead className="text-gray-500 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow
              key={member.id}
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => {
                router.push(`/dashboard/allmembers/profile`);
              }}
            >
              <TableCell>
                <div className="flex items-center gap-3 p-1">
                  <Avatar>
                    <AvatarImage
                      src={
                        member.avatar || "/placeholder.svg?height=40&width=40"
                      }
                      alt={member.name}
                    />
                    <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                  </Avatar>
                  <span>{member.name}</span>
                </div>
              </TableCell>
              <TableCell>{member.id}</TableCell>
              <TableCell>
                <AttendanceBadge status={member.attendance} />
              </TableCell>
              <TableCell>{member.year}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    member.status === "OnCampus" ? "outline" : "secondary"
                  }
                  className={cn(
                    member.status === "OnCampus" &&
                      "text-green-500 bg-green-50",
                    member.status === "OffCampus" && "text-red-500 bg-red-50",
                    member.status === "Withdrawn" &&
                      "text-purple-500 bg-purple-100"
                  )}
                  style={{ padding: "5px" }}
                >
                  {member.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(e) => handleEdit(member.id, e)}
                  >
                    <Pencil className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(e) => handleDelete(member.id, e)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function AttendanceBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-normal",
        status === "Active" && "text-green-500 bg-green-50",
        status === "Inactive" && "text-red-500 bg-red-50",
        status === "Needs Attention" && "text-amber-500 bg-amber-50"
      )}
      style={{ padding: "5px" }}
    >
      {status}
    </Badge>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}