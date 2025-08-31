import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function JobSearchSection() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Find Your Dream Job Today</h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty">
          Discover thousands of job opportunities from top companies worldwide
        </p>

        <div className="bg-card p-6 rounded-lg shadow-sm border border-border max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Job title, keywords, or company" className="pl-10 h-12 text-base" />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="City, state, or remote" className="pl-10 h-12 text-base" />
            </div>
            <Button size="lg" className="h-12 px-8">
              Search Jobs
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular searches:</span>
          {["Remote", "Frontend", "Backend", "Design", "Marketing", "Sales"].map((term) => (
            <Button key={term} variant="outline" size="sm" className="text-xs bg-transparent">
              {term}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
