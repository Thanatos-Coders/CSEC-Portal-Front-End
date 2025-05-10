"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LuSearch } from "react-icons/lu";
import { AddGroupDialog } from "@/components/pages/alldivisions/groups/AddGroupDialog";

interface TableFilterProps {
  onSearch?: (value: string) => void;
  onFilter?: () => void;
  placeholder?: string;
  className?: string;
}

export function GroupsHeader({
  className,
}: TableFilterProps) {
  return (
    <div
      className={cn("flex justify-between items-center p-5", className)}
    >
      <div className="relative flex justify-center gap-1 p-2 border-1 border-gray-300 rounded-[8px] h-12 items-center focus:outline-blue-600 focus:border-blue-600">
        <LuSearch size={23} />
        <div>
          <Input
            type="text"
            placeholder="Search"
            className="outline-none border-0 shadow-none focus:outline-0 focus:border-0 focus:shadow-none"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div>
          <AddGroupDialog  />
        </div>
      </div>
    </div>
  );
}
