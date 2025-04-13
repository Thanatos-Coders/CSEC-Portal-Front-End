import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function Resources() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <Label className="text-xs text-muted-foreground uppercase">Portfolio</Label>
            <p className="text-sm font-medium text-blue-600">
              <a href="https://henokdev.com" target="_blank" rel="noopener noreferrer">
                https://henokdev.com
              </a>
            </p>
          </div>

          <div>
            <Label className="text-xs text-muted-foreground uppercase">Additional Resources</Label>
            <ul className="list-disc list-inside text-sm mt-1">
              <li>
                Personal blog:{" "}
                <a href="https://blog.henokdev.com" className="text-blue-600">
                  https://blog.henokdev.com
                </a>
              </li>
              <li>Tech stack documentation</li>
              <li>Project showcase</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
