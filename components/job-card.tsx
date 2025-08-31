import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

interface Job {
  id: number
  title: string
  company: string
  location: string
  datePosted: string
  description: string
  type: string
  salary: string
}

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border border-border">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                <Link href={`/job/${job.id}`}>{job.title}</Link>
              </h3>
              <Badge variant="secondary" className="ml-2">
                {job.type}
              </Badge>
            </div>

            <p className="text-lg text-muted-foreground font-medium mb-3">{job.company}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {job.datePosted}
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </div>
            </div>

            <p className="text-foreground text-sm leading-relaxed mb-4">{job.description}</p>
          </div>

          <div className="flex flex-col gap-2 md:ml-6">
            <Button asChild>
              <Link href={`/job/${job.id}`}>View Details</Link>
            </Button>
            <Button variant="outline" size="sm">
              Save Job
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
