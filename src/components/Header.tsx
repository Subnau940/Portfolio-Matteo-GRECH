import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { DOCS_URL } from "@/lib/links"

const navItems = [
  { title: "Projets", url: "/projets" },
  { title: "Expériences", url: "/experiences" },
  { title: "À propos", url: "/apropos" },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
    isActive ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
  }`

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="" className="w-8 h-8 rounded-md object-cover" />
          <span className="font-mono text-sm">
            <span className="text-foreground font-medium">m.grech</span>
            <span className="text-primary">_</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.url} to={item.url} className={linkClass}>
              {item.title}
            </NavLink>
          ))}
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            Base de connaissances
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <Link to="/contact" className="ml-3 ios-button text-sm py-2 px-4">
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink key={item.url} to={item.url} onClick={() => setMenuOpen(false)} className={linkClass}>
              {item.title}
            </NavLink>
          ))}
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm font-medium text-muted-foreground inline-flex items-center gap-1"
          >
            Base de connaissances <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 ios-button text-sm">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
