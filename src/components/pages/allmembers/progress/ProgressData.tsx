"use client";

import { Card, CardContent } from "@/components/ui/card";
import CircularProgress from "@/components/pages/allmembers/progress/CircularProgress";

interface AttendanceProgressProps {
  overallProgress: number;
  metrics: {
    leftMetric: number;
    rightMetric: number;
    Headsup: number;
    Absent: number;
    Present: number;
  };
}

export default function AttendanceProgress({
  overallProgress = 75,
  metrics = {
    leftMetric: 28,
    rightMetric: 56,
    Headsup: 0,
    Absent: 3,
    Present: 7,
  },
}: AttendanceProgressProps) {
  return (
    <div className="w-auto my-5 mr-15">
      <div className="flex flex-col w-80 items-center border-2 border-gray-300 rounded-md my-3 p-3">
        <h3 className="flex justify-center text-lg font-semibold">
          Overall Attendance Progress
        </h3>

        <div className="">
          <Card className="col-span-1 md:col-span-3">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="relative h-48 w-48">
                <CircularProgress
                  value={overallProgress}
                  size={192}
                  strokeWidth={16}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{overallProgress}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center items-end gap-15">
          <Card>
            <CardContent className="flex flex-col gap-2 p-2 items-center justify-end">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">
                  {metrics.leftMetric}%
                </span>
              </div>
              <h2 className="text-gray-500">Last week</h2>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col gap-2 p-2 items-center justify-end">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">
                  {metrics.rightMetric}%
                </span>
              </div>
              <h2 className="text-gray-500">Last month</h2>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex w-auto border-2 border-gray-300 rounded-md">
        <Card className="w-55">
          <CardContent className="p-6">
            <div className="flex items-center gap-8">
              <CircularProgress
                value={0}
                size={40}
                strokeWidth={4}
                color="#E2EAF2"
                progressColor="#003087"
              />
              <div className="flex flex-col">
                <span className="flex justify-center text-2xl font-medium">
                  {metrics.Headsup}
                </span>
                <p className="mt-2 text-sm text-gray-500">Heads up</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="border-1 border-gray-300 h-auto"></div>

        <Card className="w-55">
          <CardContent className="flex p-6">
            <div className="flex items-center gap-8">
              <CircularProgress
                value={3}
                size={40}
                strokeWidth={4}
                color="#E2EAF2"
                progressColor="#E2EAF2"
              />
              <div className="flex flex-col">
                <span className="flex justify-center text-2xl font-medium">
                  {metrics.Absent}
                </span>
                <p className="mt-2 text-sm text-gray-500">Absent</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="border-1 border-gray-300 h-auto"></div>

        <Card className="w-55">
          <CardContent className="p-6">
            <div className="flex items-center gap-8">
              <CircularProgress
                value={75}
                size={40}
                strokeWidth={4}
                color="#E2EAF2"
                progressColor="#E2EAF2"
              />
              <div className="flex flex-col">
                <span className="flex justify-center text-2xl font-medium">
                  {metrics.Present}
                </span>
                <p className="mt-2 text-sm text-gray-500">Present</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
