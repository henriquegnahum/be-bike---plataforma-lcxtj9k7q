import { useLocation } from 'react-router-dom'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Menu, User, Settings, Globe, MessageSquarePlus } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import useAppStore from '@/stores/main'
import { useTranslation } from '@/lib/i18n'
import { useToast } from '@/hooks/use-toast'

export function AppHeader() {
  const location = useLocation()
  const { role, setRole, language, setLanguage } = useAppStore()
  const t = useTranslation()
  const { toast } = useToast()

  const roles = ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply']
  const languages = ['PT', 'EN', 'ES'] as const

  const handleFeedback = () => {
    toast({
      title: 'Feedback Loop',
      description: 'Formulário de sugestões de implementação aberto.',
    })
  }

  const getPageTitle = () => {
    const path = location.pathname
    if (path === '/') return t('dashboard')
    if (path.startsWith('/crm')) return t('crm')
    if (path.startsWith('/bikes')) return t('fleet')
    if (path.startsWith('/deliverers')) return t('deliverers')
    if (path.startsWith('/maintenance')) return t('maintenance')
    if (path.startsWith('/financial')) return t('financial')
    if (path.startsWith('/security')) return t('security')
    if (path.startsWith('/tasks')) return t('tasks')
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
            {role}
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={handleFeedback} className="hidden md:flex gap-2">
          <MessageSquarePlus className="w-4 h-4" /> {t('feedback')}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-secondary">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {languages.map((l) => (
              <DropdownMenuItem key={l} onClick={() => setLanguage(l)} className="justify-between">
                {l === 'PT' ? 'Português (BR)' : l === 'EN' ? 'English' : 'Español'}
                {language === l && <span className="w-2 h-2 rounded-full bg-primary" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

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
            <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
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
