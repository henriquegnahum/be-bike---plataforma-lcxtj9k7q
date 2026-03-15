import { Link, useLocation } from 'react-router-dom'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Bell, Menu, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function AppHeader() {
  const location = useLocation()
  const { isMobile } = useSidebar()

  const getPageTitle = () => {
    const path = location.pathname
    if (path === '/') return 'Dashboard'
    if (path.startsWith('/crm')) return 'CRM & Funnel'
    if (path.startsWith('/bikes')) return 'Fleet Master'
    if (path.startsWith('/deliverers')) return 'Deliverer Master'
    if (path.startsWith('/maintenance')) return 'Maintenance'
    return ''
  }

  return (
    <header className="sticky top-0 z-10 w-full flex h-16 items-center justify-between border-b border-border bg-white px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger>
          <Menu className="h-5 w-5 text-secondary" />
        </SidebarTrigger>
        <div className="font-semibold text-lg text-secondary hidden md:block border-l pl-4 border-border/50">
          {getPageTitle()}
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
              size="icon"
              className="rounded-full border-border hover:border-primary"
            >
              <User className="h-4 w-4 text-secondary" />
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>System Configuration</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
