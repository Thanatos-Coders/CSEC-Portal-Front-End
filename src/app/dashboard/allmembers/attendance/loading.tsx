import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#003081] to-[#001a3d] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        {/* Animated Logo/Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
            <div className="relative w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                  fill="currentColor"
                />
                <path
                  d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
                  fill="#003081"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Loading ...</h1>
          <p className="text-blue-100/80">
            Preparing everything for you!
          </p>
        </div>

        {/* Animated Loader */}
        <div className="pt-4">
          <Loader2 className={cn("h-8 w-8 text-white animate-spin mx-auto")} />
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full animate-pulse"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}