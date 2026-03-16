import { useLocation } from 'react-router-dom'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Bell, Menu, User, Settings } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

export function AppHeader() {
  const location = useLocation()
  const { isMobile } = useSidebar()
  const [role, setRole] = useState('Admin')

  const roles = ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply']

  const getPageTitle = () => {
    const path = location.pathname
    if (path === '/') return 'Dashboard Hub'
    if (path.startsWith('/crm')) return 'CRM & Sales Funnel'
    if (path.startsWith('/bikes')) return 'Fleet Master'
    if (path.startsWith('/deliverers')) return 'Deliverer Master'
    if (path.startsWith('/maintenance')) return 'Maintenance & Supply Chain'
    if (path.startsWith('/financial')) return 'Financial Governance'
    if (path.startsWith('/security')) return 'Security & Risk'
    if (path.startsWith('/tasks')) return 'Task Management'
    return ''
  }

  return (
    <header className="sticky top-0 z-10 w-full flex h-16 items-center justify-between border-b border-border bg-white px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger>
          <Menu className="h-5 w-5 text-secondary" />
        </SidebarTrigger>
        <div className="font-semibold text-lg text-secondary hidden md:flex items-center gap-3 border-l pl-4 border-border/50">
          {getPageTitle()}
          <Badge variant="outline" className="text-[10px] uppercase font-normal bg-muted/50">
            {role} View
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-secondary hover:text-primary hover:bg-primary/10"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-destructive"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-border hover:border-primary"
            >
              <User className="h-4 w-4 text-secondary" />
              <span className="hidden sm:inline-block font-medium">{role}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Switch Role (RBAC Mock)</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {roles.map((r) => (
              <DropdownMenuItem key={r} onClick={() => setRole(r)} className="justify-between">
                {r} {role === r && <span className="w-2 h-2 rounded-full bg-primary" />}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" /> System Configuration
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
