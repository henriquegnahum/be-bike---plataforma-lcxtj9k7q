import { useLocation } from 'react-router-dom'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Menu, Globe, Sun, Moon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useAppStore from '@/stores/main'
import { useTranslation } from '@/lib/i18n'
import { useTheme } from 'next-themes'

export function AppHeader() {
  const location = useLocation()
  const { language, setLanguage } = useAppStore()
  const t = useTranslation()
  const { theme, setTheme } = useTheme()

  const languages = ['PT', 'EN', 'ES'] as const

  const getPageTitle = () => {
    const path = location.pathname
    if (path === '/') return t('dashboard')
    if (path.startsWith('/crm')) return t('crm')
    if (path.startsWith('/marketing')) return t('marketing')
    if (path.startsWith('/bikes')) return t('fleet')
    if (path.startsWith('/maintenance')) return t('maintenance')
    if (path.startsWith('/customer-service')) return t('customer_service')
    if (path.startsWith('/community')) return t('community')
    if (path.startsWith('/deliverers')) return t('deliverers')
    if (path.startsWith('/financial')) return t('financial')
    if (path.startsWith('/security')) return t('security')
    if (path.startsWith('/tasks')) return t('tasks')
    if (path.startsWith('/hubs')) return t('hubs')
    if (path.startsWith('/calendar')) return t('calendar')
    if (path.startsWith('/chat')) return 'Comunicação e Chat'
    if (path.startsWith('/integrations')) return 'Integrações Workspace'
    return ''
  }

  return (
    <header className="sticky top-0 z-20 w-full flex h-14 items-center justify-between border-b border-border/50 glass-panel px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger>
          <Menu className="h-5 w-5 text-foreground" />
        </SidebarTrigger>
        <div className="font-extrabold text-lg text-foreground hidden md:flex items-center gap-3 border-l pl-4 border-border/50">
          {getPageTitle()}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-muted-foreground hover:text-foreground hover:bg-background/40"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-background/40"
            >
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-card">
            <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {languages.map((l) => (
              <DropdownMenuItem
                key={l}
                onClick={() => setLanguage(l)}
                className="justify-between cursor-pointer font-medium"
              >
                {l === 'PT' ? 'Português (BR)' : l === 'EN' ? 'English' : 'Español'}
                {language === l && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
