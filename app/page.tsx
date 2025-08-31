import { JobListingsHeader } from "@/components/job-listings-header"
import { JobSearchSection } from "@/components/job-search-section"
import { JobCard } from "@/components/job-card"
import { JobFilters } from "@/components/job-filters"

const mockJobs = [
  {
    "id": 1,
    "title": "Senior Frontend Developer",
    "company": "TechCorp Inc.",
    "location": "San Francisco, CA",
    "datePosted": "2 days ago",
    "description": "We're looking for an experienced frontend developer to join our growing team. You'll work on cutting-edge web applications using React, TypeScript, and modern tools.",
    "type": "Full-time",
    "salary": "$120k - $160k"
  },
  {
    "id": 2,
    "title": "Backend Engineer",
    "company": "CloudNova",
    "location": "Remote",
    "datePosted": "1 week ago",
    "description": "We’re seeking a backend engineer to build scalable APIs and services powering our cloud infrastructure platform. You’ll collaborate with frontend and DevOps teams.",
    "type": "Full-time",
    "salary": "$110k - $140k"
  },
  {
    "id": 3,
    "title": "UI/UX Designer",
    "company": "PixelWorks Studio",
    "location": "Austin, TX",
    "datePosted": "3 days ago",
    "description": "Join our design team to create intuitive user experiences and visually engaging interfaces for web and mobile products.",
    "type": "Full-time",
    "salary": "$85k - $110k"
  },
  {
    "id": 4,
    "title": "Data Scientist",
    "company": "InsightAI",
    "location": "New York, NY",
    "datePosted": "5 days ago",
    "description": "We’re hiring a data scientist to analyze large datasets, build predictive models, and uncover insights that drive business growth.",
    "type": "Full-time",
    "salary": "$130k - $170k"
  },
  {
    "id": 5,
    "title": "DevOps Engineer",
    "company": "NextGen Systems",
    "location": "Chicago, IL",
    "datePosted": "4 days ago",
    "description": "Seeking a DevOps engineer to design CI/CD pipelines, manage cloud infrastructure, and improve automation across our systems.",
    "type": "Full-time",
    "salary": "$115k - $145k"
  },
  {
    "id": 6,
    "title": "Mobile App Developer",
    "company": "Appify Labs",
    "location": "Seattle, WA",
    "datePosted": "1 week ago",
    "description": "Looking for a mobile developer skilled in React Native or Flutter to create high-quality iOS and Android apps.",
    "type": "Full-time",
    "salary": "$95k - $130k"
  },
  {
    "id": 7,
    "title": "Full Stack Developer",
    "company": "NovaTech",
    "location": "Denver, CO",
    "datePosted": "6 days ago",
    "description": "We need a full stack developer to build scalable applications across frontend and backend, ensuring seamless integration and performance.",
    "type": "Full-time",
    "salary": "$105k - $140k"
  }
]

export default function JobListingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <JobListingsHeader />
      <JobSearchSection />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <JobFilters />
          </aside>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">{mockJobs.length} Jobs Found</h2>
              <p className="text-muted-foreground">Discover your next career opportunity</p>
            </div>

            <div className="space-y-4">
              {mockJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
