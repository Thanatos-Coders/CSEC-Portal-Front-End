"use client";

import { GroupsHeader } from "@/components/pages/alldivisions/groups/GroupsHeader";
import GroupOverview from "@/components/pages/alldivisions/groups/GroupOverview";

export default function TableUsage() {
  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  return (
    <div className="flex flex-col min-w-240 max-w-full mr-5 my-3 py-4 gap-4 rounded-[8px] border-1 border-gray-300">
      <div className="flex">
        {/* Main Content */}
        <div className="gap-3 flex flex-col p-2">
          {/* Main Content Area */}
          <main className="flex flex-col gap-4">
            <GroupsHeader
              onSearch={handleSearch}
              placeholder="Search members..."
            />
            <div className="flex px-4">
              <GroupOverview />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
