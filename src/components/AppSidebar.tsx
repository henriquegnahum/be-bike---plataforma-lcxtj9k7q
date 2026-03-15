import { LayoutDashboard, Users, Bike, Wrench, CheckSquare, Sparkles } from 'lucide-react'
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
import { Link, useLocation } from 'react-router-dom'

const items = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Entregadores', url: '/entregadores', icon: Users },
  { title: 'Frota', url: '/frota', icon: Bike },
  { title: 'Manutenção & Estoque', url: '/manutencao', icon: Wrench },
  { title: 'Tarefas & Validações', url: '/tarefas', icon: CheckSquare },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <Bike className="w-6 h-6" />
          <span>Be Bike</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
