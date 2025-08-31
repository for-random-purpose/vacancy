import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function JobFilters() {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Job Type */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Job Type</h4>
          <div className="space-y-2">
            {["Full-time", "Part-time", "Contract", "Freelance", "Internship"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type} className="text-sm">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Experience Level */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Experience Level</h4>
          <div className="space-y-2">
            {["Entry Level", "Mid Level", "Senior Level", "Executive"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <Label htmlFor={level} className="text-sm">
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Remote Options */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Work Location</h4>
          <div className="space-y-2">
            {["Remote", "Hybrid", "On-site"].map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox id={location} />
                <Label htmlFor={location} className="text-sm">
                  {location}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <Button variant="outline" className="w-full bg-transparent">
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  )
}
