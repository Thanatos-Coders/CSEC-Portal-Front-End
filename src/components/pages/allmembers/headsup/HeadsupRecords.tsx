import { Info } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function HeadsUpContent() {
  return (
    <div className="mt-6 space-y-4 max-w-2xl mr-12">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="p-4 border-l-4 border-l-blue-900">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-blue-900 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-sm">A Quick Heads-Up</h3>
              <p className="text-sm text-gray-600 mt-1">
                Hey everyone, just wanted to let you know I won&apos;t be joining the standup this time around. I&apos;m
                finishing a few cut-outs my way, and I&apos;m prioritizing some other commitments. Appreciate the
                support and can&apos;t wait to clear you all on from the sidelines—good luck!
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}