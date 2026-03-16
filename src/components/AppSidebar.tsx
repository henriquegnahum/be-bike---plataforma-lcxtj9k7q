import { Link, useLocation } from 'react-router-dom'
import {
  Bike,
  Users,
  LayoutDashboard,
  Wrench,
  CheckSquare,
  KanbanSquare,
  DollarSign,
  ShieldAlert,
} from 'lucide-react'
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
import useAppStore from '@/stores/main'
import { useTranslation } from '@/lib/i18n'

export function AppSidebar() {
  const location = useLocation()
  const { role } = useAppStore()
  const t = useTranslation()

  const allMenuItems = [
    {
      titleKey: 'dashboard',
      icon: LayoutDashboard,
      url: '/',
      roles: ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply'],
    },
    { titleKey: 'crm', icon: KanbanSquare, url: '/crm', roles: ['Admin', 'Operations', 'Hubs'] },
    {
      titleKey: 'fleet',
      icon: Bike,
      url: '/bikes',
      roles: ['Admin', 'Operations', 'Hubs', 'Supply'],
    },
    {
      titleKey: 'deliverers',
      icon: Users,
      url: '/deliverers',
      roles: ['Admin', 'Operations', 'Hubs'],
    },
    {
      titleKey: 'maintenance',
      icon: Wrench,
      url: '/maintenance',
      roles: ['Admin', 'Operations', 'Hubs', 'Supply'],
    },
    { titleKey: 'financial', icon: DollarSign, url: '/financial', roles: ['Admin', 'Finance'] },
    { titleKey: 'security', icon: ShieldAlert, url: '/security', roles: ['Admin', 'Operations'] },
    {
      titleKey: 'tasks',
      icon: CheckSquare,
      url: '/tasks',
      roles: ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply'],
    },
  ]

  const menuItems = allMenuItems.filter((item) => item.roles.includes(role))

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
            Command Center
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.titleKey}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      location.pathname === item.url ||
                      (item.url !== '/' && location.pathname.startsWith(item.url))
                    }
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{t(item.titleKey as any)}</span>
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
