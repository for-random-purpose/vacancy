import { Button } from "@/components/ui/button"
import { Briefcase, Plus, BarChart3, Users, Settings, Search, Home } from "lucide-react"

export function AdminSidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-8 w-8 text-sidebar-accent" />
          <h2 className="text-xl font-bold text-sidebar-foreground">JobBoard Admin</h2>
        </div>

        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Briefcase className="h-5 w-5" />
            Job Listings
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Plus className="h-5 w-5" />
            Create Job
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Search className="h-5 w-5" />
            Job Search
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <BarChart3 className="h-5 w-5" />
            Analytics
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Users className="h-5 w-5" />
            Applications
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </nav>
      </div>
    </div>
  )
}
