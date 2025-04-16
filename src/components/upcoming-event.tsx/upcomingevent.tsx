import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import amico from"../../../public/img/amico.png"
import Image from"next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface UpcomingEventProps {
  title: string
  date: string
  badgeText: string
}

// Sample data for the chart
const attendanceData = [
  { name: 'Jan', thisYear: 65, lastYear: 45 },
  { name: 'Feb', thisYear: 59, lastYear: 51 },
  { name: 'Mar', thisYear: 80, lastYear: 65 },
  { name: 'Apr', thisYear: 81, lastYear: 60 },
  { name: 'May', thisYear: 76, lastYear: 57 },
  { name: 'Jun', thisYear: 85, lastYear: 62 },
];

export function UpcomingEvent({ title, date, badgeText }: UpcomingEventProps) {
  return (
    <Card className="overflow-hidden max-w-[600px] w-auto ">
      <CardHeader className="p-0 max-w-[600px] w-auto">
        <div className="bg-blue-400 p-6 relative w-auto">
          <Badge className="absolute right-4 top-4 hover:bg-blue-600">{badgeText}</Badge>
          <div className="absolute top-2 right-2 bg-[#ff5c5c] text-white text-xs font-medium px-2 py-0.5 rounded-full">
            Members
          </div>
          <h2 className="text-xl font-bold mb-1">Upcoming Event</h2> 
          <p className="text-base mb-4">Cross-division knowledge-sharing</p> 
          <div className="flex flex-col gap-1">
            <h3 className="text-blue-800 font-medium">{title}</h3>
            <div className="flex items-center gap-2 mt-4">
              <Button variant="default" className="bg-blue-800 hover:bg-blue-900 text-white">
                Add to calendar
              </Button>
            </div>
          </div>

          <div className="absolute right-6 bottom-2">
            <Image src={amico} alt="Event illustration" className="h[60] w-[120]" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 flex flex-col space-y-4">
        <div className="grid grid-cols-2 divide-x gap-4">
          <div className="p-6 border-1 border-gray-200 rounded-[8px] m-2">
            <div className="flex items-center flexflex-col gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <CalendarIcon className="h-3 w-3 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Total Members</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">162</span>
              <Badge variant="outline" className="text-green-500 bg-green-50 border-green-100">
                +4%
              </Badge>
            </div><hr />
            <div className="text-xs text-gray-400 mt-1">Updated: July 10, 2023</div>
          </div>

          <div className="p-6 border-1 border-gray-200 rounded-[8px] m-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <CalendarIcon className="h-3 w-3 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Total Divisions</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">5</span>
              <Badge variant="outline" className="text-green-500 bg-green-50 border-green-100">
                +2%
              </Badge>
            </div><hr />
            <div className="text-xs text-gray-400 mt-1">Updated: July 10, 2023</div>
          </div>
        </div>
      </CardContent>

      <CardContent className="p-0">
        <div className="grid grid-cols-2 divide-x">
          <div className="p-6 border-1 border-gray-200 rounded-[8px] m-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <CalendarIcon className="h-3 w-3 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Attendance Rate</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">68%</span>
              <Badge variant="outline" className="text-red-500 bg-red-50 border-red-100">
                -3%
              </Badge>
            </div><hr />
            <div className="text-xs text-gray-400 mt-1">Updated: July 10, 2023</div>
          </div>

          <div className="p-6 border-1 border-gray-200 rounded-[8px] m-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <CalendarIcon className="h-3 w-3 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Upcoming Sessions</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">12</span>
              <Badge variant="outline" className="text-green-500 bg-green-50 border-green-100">
                +10%
              </Badge>
            </div><hr />
            <div className="text-xs text-gray-400 mt-1">Updated: July 10, 2023</div>
          </div>
        </div>
      </CardContent>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Attendance Overview</h4>
            <h3 className="text-6m font-medium">Total member</h3>
            <h3 className="text-3m font-medium">Total event</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-xs">This year</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <span className="text-xs">Last year</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="h-[190px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={attendanceData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [`${value}%`, name === 'thisYear' ? 'This Year' : 'Last Year']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="thisYear" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="lastYear" 
                stroke="#d1d5db" 
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Card>
  )
}