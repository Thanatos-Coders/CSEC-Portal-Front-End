import { Button } from "@/components/ui/button";

interface SessionToolbarProps {
  onViewChange: (view: "list" | "graphs") => void;
}

export function SessionToolbar({ onViewChange }: SessionToolbarProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="flex">
          <Button 
            variant="default" 
            className="rounded-r-none bg-blue-600 hover:bg-blue-700"
            onClick={() => onViewChange("list")}
          >
            List
            <span className="ml-1 text-xs font-normal opacity-80">[Edit]</span>
          </Button>
          <Button 
            variant="outline" 
            className="rounded-l-none border-l-0"
            onClick={() => onViewChange("graphs")}
          >
            Graphs Level
            <span className="ml-1 text-xs font-normal opacity-80">[Devil]</span>
          </Button>
        </div>
      </div>
      {/* Other toolbar elements... */}
    </div>
  );
}