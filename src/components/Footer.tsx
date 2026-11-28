import { DOCS_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/links"

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-muted-foreground">
        <p className="font-mono text-xs">© {new Date().getFullYear()} Mattéo Grech</p>
        <nav className="flex gap-5">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Base de connaissances</a>
        </nav>
      </div>
    </footer>
  )
}
