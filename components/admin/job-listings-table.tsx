import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2, Eye } from "lucide-react"
import { CreateJobDialog } from "./create-job-dialog"

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "Active",
    applications: 45,
    posted: "2024-01-15",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applications: 32,
    posted: "2024-01-12",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "New York, NY",
    type: "Contract",
    status: "Paused",
    applications: 18,
    posted: "2024-01-10",
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Full-time",
    status: "Active",
    applications: 67,
    posted: "2024-01-08",
  },
]

export function JobListingsTable() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-foreground">Job Listings</CardTitle>
          <CreateJobDialog />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Job Title</TableHead>
              <TableHead className="text-muted-foreground">Company</TableHead>
              <TableHead className="text-muted-foreground">Location</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground">Applications</TableHead>
              <TableHead className="text-muted-foreground">Posted</TableHead>
              <TableHead className="text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobListings.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium text-foreground">{job.title}</TableCell>
                <TableCell className="text-foreground">{job.company}</TableCell>
                <TableCell className="text-foreground">{job.location}</TableCell>
                <TableCell className="text-foreground">{job.type}</TableCell>
                <TableCell>
                  <Badge
                    variant={job.status === "Active" ? "default" : "secondary"}
                    className={job.status === "Active" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {job.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">{job.applications}</TableCell>
                <TableCell className="text-foreground">{job.posted}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
