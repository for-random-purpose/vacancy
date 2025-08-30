"use client";
import data from "@/lib/data"
import { JobHeader } from "@/components/job-header"
import { JobDetails } from "@/components/job-details"
import { JobDescription } from "@/components/job-description"
import { AdSection } from "@/components/ad-section"
import { JobFooter } from "@/components/job-footer"
import { useParams } from "next/navigation"

export default function JobPostingPage() {
    const params = useParams()
    let targetJob
    targetJob = data.find(j => j.id == Number(params.id))
    if(!targetJob) {
        targetJob = {
            title: "",
            company: "",
            location: "",
            salary: "",
            description: "",
            id: 0,
            mesfert: []
        }    
    }
    console.log(targetJob);
  return (
    <div className="min-h-screen bg-background">
      <JobHeader />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <JobDetails job={targetJob }/>
            <JobDescription job={targetJob}/>
          </div>
          <div className="lg:col-span-1">
            <AdSection />
          </div>
        </div>
      </main>
      <JobFooter />
    </div>
  )
}
