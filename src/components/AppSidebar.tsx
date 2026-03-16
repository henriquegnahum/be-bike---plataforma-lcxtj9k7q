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
  Megaphone,
  Headset,
  MessageCircleHeart,
  Building2,
  CalendarDays,
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

  const coreItems = [
    {
      titleKey: 'dashboard',
      icon: LayoutDashboard,
      url: '/',
      roles: ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply'],
    },
    { titleKey: 'hubs', icon: Building2, url: '/hubs', roles: ['Admin', 'Operations', 'Hubs'] },
    {
      titleKey: 'calendar',
      icon: CalendarDays,
      url: '/calendar',
      roles: ['Admin', 'Operations', 'Hubs'],
    },
    {
      titleKey: 'tasks',
      icon: CheckSquare,
      url: '/tasks',
      roles: ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply'],
    },
  ]

  const mainModules = [
    { titleKey: 'crm', icon: KanbanSquare, url: '/crm', roles: ['Admin', 'Operations', 'Hubs'] },
    { titleKey: 'marketing', icon: Megaphone, url: '/marketing', roles: ['Admin', 'Operations'] },
    { titleKey: 'financial', icon: DollarSign, url: '/financial', roles: ['Admin', 'Finance'] },
  ]

  const subModules = [
    {
      titleKey: 'fleet',
      icon: Bike,
      url: '/bikes',
      roles: ['Admin', 'Operations', 'Hubs', 'Supply'],
    },
    {
      titleKey: 'maintenance',
      icon: Wrench,
      url: '/maintenance',
      roles: ['Admin', 'Operations', 'Hubs', 'Supply'],
    },
    {
      titleKey: 'deliverers',
      icon: Users,
      url: '/deliverers',
      roles: ['Admin', 'Operations', 'Hubs'],
    },
    {
      titleKey: 'customer_service',
      icon: Headset,
      url: '/customer-service',
      roles: ['Admin', 'Operations', 'Hubs'],
    },
    {
      titleKey: 'community',
      icon: MessageCircleHeart,
      url: '/community',
      roles: ['Admin', 'Operations'],
    },
    { titleKey: 'security', icon: ShieldAlert, url: '/security', roles: ['Admin', 'Operations'] },
  ]

  const renderGroup = (labelKey: string, items: typeof coreItems) => {
    const filtered = items.filter((item) => item.roles.includes(role))
    if (filtered.length === 0) return null

    return (
      <SidebarGroup>
        <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-wider text-primary/70 mt-2 mb-1 px-4">
          {t(labelKey as any)}
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="px-2 space-y-1">
            {filtered.map((item) => {
              const isActive =
                location.pathname === item.url ||
                (item.url !== '/' && location.pathname.startsWith(item.url))
              return (
                <SidebarMenuItem key={item.titleKey}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className={`rounded-xl transition-all duration-300 py-2.5 px-3 hover:bg-primary/10 hover:text-primary ${isActive ? 'bg-primary/15 text-primary font-bold shadow-[0_2px_10px_rgba(28,209,92,0.1)]' : 'text-muted-foreground font-medium'}`}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon
                        className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                      />
                      <span>{t(item.titleKey as any)}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  return (
    <Sidebar className="border-r glass-panel">
      <SidebarHeader className="h-16 flex items-center px-6 py-4 border-b border-border/50">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Be Bike" className="h-8 w-auto object-contain dark:invert" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="py-2">
        {renderGroup('core_layer', coreItems)}
        {renderGroup('main_modules', mainModules)}
        {renderGroup('sub_modules', subModules)}
      </SidebarContent>
    </Sidebar>
  )
}
