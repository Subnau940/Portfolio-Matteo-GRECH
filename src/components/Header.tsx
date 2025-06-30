
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 flex items-center px-6 bg-white/80 backdrop-blur-sm border-b border-warm-200 sticky top-0 z-40">
      <SidebarTrigger className="p-2 rounded-2xl hover:bg-accent transition-colors">
        <Menu className="h-5 w-5" />
      </SidebarTrigger>
      <div className="ml-4">
        <h1 className="text-xl font-bold text-foreground">Mon Portfolio</h1>
        <p className="text-sm text-muted-foreground">BTS SIO SISR - ESICAD</p>
      </div>
    </header>
  )
}
