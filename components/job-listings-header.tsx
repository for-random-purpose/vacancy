import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JobListingsHeader() {
  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-primary">
              JobBoard
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/jobs" className="text-foreground hover:text-primary transition-colors">
                Browse Jobs
              </Link>
              <Link href="/companies" className="text-foreground hover:text-primary transition-colors">
                Companies
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/admin">Post a Job</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
