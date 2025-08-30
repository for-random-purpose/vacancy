import { Briefcase, Twitter, Linkedin, Github } from "lucide-react"

export function JobFooter() {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">JobBoard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting talented professionals with amazing opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Job Seekers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Salary Guide
                </a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Employers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Browse Resumes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Recruiting Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          
        </div>
      </div>
    </footer>
  )
}
