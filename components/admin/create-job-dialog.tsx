"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

export function CreateJobDialog() {
  const [open, setOpen] = useState(false)
  const [jobs, setJobs] = useState([])
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const [salary, setSalary] = useState("")
  const [description, setDescription] = useState("")
  const [mesfert, setMesfert] = useState("")
  const handleJoPosting = async () => {
    setOpen(false)
    const job = {
      title, company, location, jobType, salary, description, mesfert
    }

    try {
      const response = await fetch('/api/job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job),
      });
      
      if(response.ok) {
        const data = await response.json()
        console.log(data);
      }
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Create Job
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">Create New Job Posting</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in the details to create a new job posting.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right text-foreground">
              Job Title
            </Label>
            <Input id="title" placeholder="e.g. Senior Frontend Developer" className="col-span-3" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right text-foreground">
              Company
            </Label>
            <Input id="company" placeholder="e.g. TechCorp Inc." className="col-span-3" value={company} onChange={(e) => setCompany(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right text-foreground">
              Location
            </Label>
            <Input id="location" placeholder="e.g. San Francisco, CA" className="col-span-3" value={location} onChange={(e) => setLocation(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right text-foreground">
              Job Type
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="salary" className="text-right text-foreground">
              Salary Range
            </Label>
            <Input id="salary" placeholder="e.g. $80,000 - $120,000" className="col-span-3" value={salary} onChange={(e) => setSalary(e.target.value)}/>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right text-foreground mt-2">
              Description
            </Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Job description and requirements..."
              className="col-span-3 min-h-[100px]"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right text-foreground mt-2">
              Mesfert
            </Label>
            <Textarea
              value={mesfert}
              onChange={(e) => setMesfert(e.target.value)}
              id="mesfert"
              placeholder="Job mesfert, make sure you separate them with Comma..."
              className="col-span-3 min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleJoPosting}
          >
            Create Job
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
