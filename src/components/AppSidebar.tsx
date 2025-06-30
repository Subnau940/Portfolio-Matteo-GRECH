
import { Home, FolderOpen, FileText, GraduationCap, BookOpen, User, Briefcase, Mail, Eye } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect } from "react"
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
  { title: "Veille technologique", url: "/veille", icon: Eye },
  { title: "Contact", url: "/contact", icon: Mail },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <SidebarContent className="bg-gradient-to-b from-warm-400 to-warm-600">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-warm-600 font-bold text-xl">
              M
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-lg text-white">Mattéo Grech</h2>
                <p className="text-sm text-white/80">BTS SIO SISR</p>
              </div>
            )}
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : "text-white/70"}>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-2xl mb-1 group">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                          isActive 
                            ? "bg-white text-warm-600 shadow-xl font-bold scale-105 border-2 border-white/20" 
                            : "text-white hover:bg-white/20 hover:text-white hover:shadow-lg"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
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
