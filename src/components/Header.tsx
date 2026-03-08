import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const navItems = [
  { title: "À Propos de Moi", url: "/apropos" },
  { title: "Expériences", url: "/experiences" },
  { title: "Projets", url: "/projets" },
  { title: "Tableau de synthèse E5", url: "/tableau-e5" },
  { title: "Veille technologique", url: "/veille" },
  { title: "Contact", url: "/contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-warm-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-transform duration-200 group-hover:scale-110">
            MG
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:block">
            <span className="text-warm-600">M.GRECH</span> Portfolio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-warm-100 text-warm-700 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Right: Me Contacter button + mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-5 py-2 bg-gradient-to-r from-warm-500 to-warm-600 text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:from-warm-600 hover:to-warm-700 hover:scale-105 hover:shadow-lg"
          >
            Me Contacter
          </Link>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden border-t border-warm-200 bg-white/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-warm-100 text-warm-700 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-warm-500 to-warm-600 text-white rounded-xl font-semibold text-sm text-center"
            >
              Me Contacter
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
