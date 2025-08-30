import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AdSection() {
  return (
    <div className="space-y-6">
      {/* Ad 1 - Course Advertisement */}
      <Card className="p-6 bg-card border-border">
        <div className="text-center space-y-4">
          <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Learn React Pro</span>
          </div>
          <h3 className="font-bold text-foreground">Master React Development</h3>
          <p className="text-sm text-muted-foreground">
            Advanced React course with real-world projects. Get job-ready in 12 weeks.
          </p>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Learn More
          </Button>
        </div>
      </Card>

      {/* Ad 2 - Job Board Premium */}
      <Card className="p-6 bg-card border-border">
        <div className="text-center space-y-4">
          <div className="w-full h-32 bg-accent/10 rounded-lg flex items-center justify-center">
            <span className="text-accent font-medium">JobBoard Premium</span>
          </div>
          <h3 className="font-bold text-foreground">Get Premium Access</h3>
          <p className="text-sm text-muted-foreground">Access exclusive jobs, salary insights, and priority support.</p>
          <Button size="sm" className="w-full">
            Upgrade Now
          </Button>
        </div>
      </Card>

      {/* Ad 3 - Resume Builder */}
      <Card className="p-6 bg-card border-border">
        <div className="text-center space-y-4">
          <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Resume Builder</span>
          </div>
          <h3 className="font-bold text-foreground">Build Your Perfect Resume</h3>
          <p className="text-sm text-muted-foreground">Professional templates designed by hiring managers.</p>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Start Building
          </Button>
        </div>
      </Card>

      {/* Ad 4 - Company Spotlight */}
      <Card className="p-6 bg-card border-border">
        <div className="text-center space-y-4">
          <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground font-medium">Featured Company</span>
          </div>
          <h3 className="font-bold text-foreground">Join InnovateX</h3>
          <p className="text-sm text-muted-foreground">We're hiring! 15+ open positions in engineering and design.</p>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            View Jobs
          </Button>
        </div>
      </Card>
    </div>
  )
}
