import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { JobListingsTable } from "@/components/admin/job-listings-table"
import { AdminStats } from "@/components/admin/admin-stats"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 ml-64">
          <AdminHeader />
          <main className="p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Job Listings Management</h1>
                <p className="text-muted-foreground mt-2">Create, edit, and manage your job postings</p>
              </div>
              <AdminStats />
              <JobListingsTable />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
