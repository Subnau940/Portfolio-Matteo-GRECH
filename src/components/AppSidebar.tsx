
import { Home, FolderOpen, FileText, GraduationCap, BookOpen, User, Briefcase } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "Projets", url: "/projets", icon: FolderOpen },
  { title: "CV", url: "/cv", icon: FileText },
  { title: "Parcours", url: "/parcours", icon: GraduationCap },
  { title: "BTS SIO SISR", url: "/filiere", icon: BookOpen },
  { title: "À propos", url: "/apropos", icon: User },
  { title: "Expériences", url: "/experiences", icon: Briefcase },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <SidebarContent className="bg-gradient-to-b from-warm-50 to-warm-100">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl">
              P
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-lg text-foreground">Portfolio</h2>
                <p className="text-sm text-muted-foreground">BTS SIO SISR</p>
              </div>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-2xl mb-1">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-2xl transition-all duration-200 ${
                          isActive 
                            ? "bg-primary text-primary-foreground shadow-lg" 
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
