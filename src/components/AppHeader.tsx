import { useLocation } from 'react-router-dom'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Menu, User, Settings, Globe, MessageSquarePlus, Sun, Moon } from 'lucide-react'
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
import { useTheme } from 'next-themes'

export function AppHeader() {
  const location = useLocation()
  const { role, setRole, language, setLanguage } = useAppStore()
  const t = useTranslation()
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()

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
    if (path.startsWith('/marketing')) return t('marketing')
    if (path.startsWith('/bikes')) return t('fleet')
    if (path.startsWith('/maintenance')) return t('maintenance')
    if (path.startsWith('/customer-service')) return t('customer_service')
    if (path.startsWith('/community')) return t('community')
    if (path.startsWith('/deliverers')) return t('deliverers')
    if (path.startsWith('/financial')) return t('financial')
    if (path.startsWith('/security')) return t('security')
    if (path.startsWith('/tasks')) return t('tasks')
    return ''
  }

  return (
    <header className="sticky top-0 z-20 w-full flex h-16 items-center justify-between border-b glass-panel px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger>
          <Menu className="h-5 w-5 text-foreground" />
        </SidebarTrigger>
        <div className="font-bold text-lg text-foreground hidden md:flex items-center gap-3 border-l pl-4 border-border/50">
          {getPageTitle()}
          <Badge
            variant="outline"
            className="text-[10px] uppercase font-bold bg-primary/10 text-primary border-primary/20 backdrop-blur-sm"
          >
            {role}
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleFeedback}
          className="hidden md:flex gap-2 text-muted-foreground hover:text-foreground hover:bg-background/40"
        >
          <MessageSquarePlus className="w-4 h-4" /> {t('feedback')}
        </Button>

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
                className="justify-between cursor-pointer"
              >
                {l === 'PT' ? 'Português (BR)' : l === 'EN' ? 'English' : 'Español'}
                {language === l && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 ml-2 border-border/60 hover:border-primary/50 transition-colors bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-2xl"
            >
              <User className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline-block font-semibold">{role}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass-card">
            <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {roles.map((r) => (
              <DropdownMenuItem
                key={r}
                onClick={() => setRole(r)}
                className="justify-between cursor-pointer"
              >
                {r}{' '}
                {role === r && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-muted-foreground">
              <Settings className="w-4 h-4 mr-2" /> System Configuration
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
