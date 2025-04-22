"use client";

import { useState } from "react";
import { TableFilter } from "@/components/common/TableFilter";
import AttendanceList from "@/components/pages/attendance/AttendanceList";

export default function TableUsage() {
  const [currentPage, setCurrentPage] = useState(1);

  // handlers
  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  const handleFilter = () => {
    console.log("Filter button clicked");
  };

  return (
    <div className="flex flex-col mr-5 my-3 gap-4 rounded-[8px] border-1 border-gray-300">
      <div className="flex-1 gap-3 h-full w-full flex flex-col p-6">
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col gap-6">
          {/* Filter */}
          <TableFilter
            onSearch={handleSearch}
            onFilter={handleFilter}
            placeholder="Search members..."
            importButton={false}
            addMembersButton={false}
          />
          <div>
            {/* Table */}
            <AttendanceList />
          </div>
        </main>
      </div>
    </div>
  );
}
