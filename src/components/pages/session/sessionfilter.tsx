import { useState } from "react";
import { SessionToolbar } from "@/components/pages/session/sessiontoolbar";

export function SessionsPage() {
  const [currentView, setCurrentView] = useState("list");

  return (
    <div className="flex flex-col">
      <SessionToolbar onViewChange={setCurrentView} />
      
      <div className="p-4">
        {currentView === "list" ? (
          <div className="border rounded-lg p-4">
            <h2>List View Content</h2>
            {/* Your list view implementation goes here */}
          </div>
        ) : (
          <div className="border rounded-lg p-4">
            <h2>Graphs Level View Content</h2>
            {/* Your graphs/table view implementation goes here */}
          </div>
        )}
      </div>
    </div>
  );
}