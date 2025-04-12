"use client";

import { FiFilter } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LuSearch } from "react-icons/lu";

interface TableFilterProps {
  onSearch?: (value: string) => void;
  onFilter?: () => void;
  placeholder?: string;
  className?: string;
}

export function TableFilter({
  onSearch,
  onFilter,
  placeholder = "Search...",
  className,
}: TableFilterProps) {
  return (
    <div className={cn("flex justify-between items-center", className)} style={{ paddingLeft: "5px", paddingRight: "5px" }}>
      <div className="relative flex justify-center gap-1 border-1 border-gray-200 rounded-[8px] h-12 items-center focus:outline-blue-600 focus:border-blue-600">
        <LuSearch size={45} style={{ padding: "10px" }} />
        <div>
          <Input
            type="text"
            placeholder="Search"
            className="outline-none border-0 shadow-none focus:outline-0 focus:border-0 focus:shadow-none"
          />
        </div>
      </div>

      <div
        onClick={onFilter}
        className="flex justify-center border-1 border-gray-200 rounded-[8px] h-12 w-23 items-center cursor-pointer hover:bg-accent/80 transition duration-200 ease-in-out"
      >
        <FiFilter size={30} style={{ padding: "5px" }} />
        <div style={{ paddingRight: "5px" }}>
          <h2 className="flex items-center justify-center font-[500] tetx-2xl ">Filter</h2>
        </div>
      </div>
    </div>
  );
}
