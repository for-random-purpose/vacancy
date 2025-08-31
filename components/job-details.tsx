import { MapPin, Clock, DollarSign, Building2, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function JobDetails({ job }) {
  return (
    <Card className="p-8 bg-card border-border">
      <div className="space-y-6">
        {/* Job Title and Company */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground leading-tight"> {job.title != "" ? `${job.title}` : "Job Not Found" }</h1>
          <div className="flex items-center space-x-2">
            <Building2 className="h-5 w-5 text-muted-foreground" />
            <span className="text-xl text-foreground">{job.company}</span>
          </div>
        </div>

        {/* Job Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>የስራ ቦታ - {job.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>ቋሚ ሰራተኛ</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>ደሞዝ - {job.salary} ብር መነሻ</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>ከ 2 ቀን በፊት የተፖሰተ</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Experiance Level - Junior</span>
          </div>
        </div>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-2 hidden">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">Node.js</Badge>
        </div>

        {/* Apply Button */}
        <div className="pt-4 hidden">
          <Button size="lg" className="hidden w-full md:w-auto px-8 cursor-pointer">
            Apply ለማድረግ እዚህ ጋር ይጫኑ  
          </Button>
          
        </div>

        {/* Company Stats */}
        <div className="flex hidden items-center space-x-6 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">500-1000 employees</span>
          </div>
          <div className="text-sm text-muted-foreground">Founded in 2015</div>
        </div>
      </div>
    </Card>
  )
}
