import { Link, useLocation } from 'react-router-dom'
import { navigation } from '@/lib/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar'
import { useTranslation } from '@/lib/i18n'
import { Bike } from 'lucide-react'

export function AppSidebar() {
  const location = useLocation()
  const t = useTranslation()

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center gap-2 px-4 py-3 border-b">
        <Bike className="w-6 h-6 text-primary" />
        <span className="font-bold text-lg text-primary truncate">Be Bike OS</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  (item.href !== '/' && location.pathname.startsWith(`${item.href}/`))
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={t(item.name as any)}>
                      <Link to={item.href}>
                        <Icon className="w-5 h-5" />
                        <span>{t(item.name as any)}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
