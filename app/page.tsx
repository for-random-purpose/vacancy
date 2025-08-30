import { JobHeader } from "@/components/job-header"
import { JobDetails } from "@/components/job-details"
import { JobDescription } from "@/components/job-description"
import { AdSection } from "@/components/ad-section"
import { JobFooter } from "@/components/job-footer"

export default function JobPostingPage() {
  return (
    <div className="min-h-screen bg-background">
      <JobHeader />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <JobDetails />
            <JobDescription />
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
