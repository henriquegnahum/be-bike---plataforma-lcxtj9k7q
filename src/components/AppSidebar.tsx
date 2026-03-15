import { Link, useLocation } from 'react-router-dom'
import { Bike, Users, LayoutDashboard, Wrench, CheckSquare, KanbanSquare } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar'
import logoImg from '@/assets/bebike_logo-5fe56.png'

const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard, url: '/' },
  { title: 'CRM & Funnel', icon: KanbanSquare, url: '/crm' },
  { title: 'Fleet Master', icon: Bike, url: '/bikes' },
  { title: 'Deliverer Master', icon: Users, url: '/deliverers' },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r border-border bg-sidebar">
      <SidebarHeader className="h-16 flex items-center px-6 py-4 border-b border-border bg-white">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Be Bike" className="h-8 w-auto object-contain" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-4">
            Core Modules
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      location.pathname === item.url ||
                      (item.url !== '/' && location.pathname.startsWith(item.url))
                    }
                  >
                    {/* External links behavior requested via target="_blank" */}
                    <Link
                      to={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
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
