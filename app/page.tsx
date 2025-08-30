import { JobHeader } from "@/components/job-header"
import { JobDetails } from "@/components/job-details"
import { JobDescription } from "@/components/job-description"
import { AdSection } from "@/components/ad-section"
import { JobFooter } from "@/components/job-footer"
import data from "@/lib/data"
import Link from "next/link"
export default function JobPostingPage() {
  return (
    <div className="min-h-screen bg-background">
      <JobHeader />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {
              data.map(job => (
                <div className="bg-gray-100 px-4 py-8 border-gray-300 border-1 rounded-md">
                  <Link className="text-2xl font-bold" href={`/${job.id}`}>{ job.title }</Link>
                  <p className="text-gray-500 italic">{job.company}</p>
                  <p className="text-gray-700 mt-3"> {job.description.slice(0, 100)} </p>   
                </div>
                
              ))
            }
            {/* <JobDetails />
            <JobDescription /> */}
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
