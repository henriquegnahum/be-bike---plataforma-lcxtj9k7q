import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, MessageSquare, Sparkles, User, Settings } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import logoImg from '@/assets/bebike_logo-5fe56.png'
import useAppStore from '@/stores/main'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { navHierarchy } from '@/lib/navigation'

export function AppSidebar() {
  const location = useLocation()
  const { role, setRole, setAiOpen } = useAppStore()

  const roles = ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply']

  const isActiveUrl = (url: string) => {
    return location.pathname === url || (url !== '/' && location.pathname.startsWith(url))
  }

  return (
    <Sidebar className="border-r border-border/50 glass-panel">
      <SidebarHeader className="h-16 flex items-center px-6 py-4 border-b border-border/50">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Be Bike" className="h-8 w-auto object-contain dark:invert" />
        </Link>
      </SidebarHeader>

      <SidebarContent className="py-4 no-scrollbar">
        <SidebarGroup>
          <SidebarMenu className="gap-2 px-2">
            {navHierarchy.map((group) => {
              if (!group.roles.includes(role)) return null

              const isActiveGroup = group.items.some((i) => {
                if ('url' in i && i.url) return isActiveUrl(i.url)
                if ('subItems' in i && i.subItems) {
                  return i.subItems.some((s) => isActiveUrl(s.url))
                }
                return false
              })

              return (
                <Collapsible
                  key={group.title}
                  defaultOpen={isActiveGroup || group.title === 'Visão Geral'}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className={`rounded-xl transition-all duration-300 py-3 px-3 hover:bg-primary/10 hover:text-primary ${isActiveGroup ? 'text-primary font-bold bg-primary/5' : 'text-muted-foreground font-medium'}`}
                      >
                        <group.icon className="w-5 h-5" />
                        <span>{group.title}</span>
                        <ChevronRight className="ml-auto w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-l-2 border-border/50 ml-4 pl-2 mt-1 gap-1">
                        {group.items.map((item: any) => {
                          if (item.subItems) {
                            return (
                              <div key={item.title} className="mt-2 mb-1">
                                <div className="text-[10px] font-extrabold uppercase text-muted-foreground px-3 mb-1 tracking-wider">
                                  {item.title}
                                </div>
                                {item.subItems.map((sub: any) => {
                                  const isActive = isActiveUrl(sub.url)
                                  return (
                                    <SidebarMenuSubItem key={sub.title}>
                                      <SidebarMenuSubButton
                                        asChild
                                        isActive={isActive}
                                        className={`rounded-lg py-2 px-3 transition-colors ${isActive ? 'bg-primary/15 text-primary font-bold' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground font-medium'}`}
                                      >
                                        <Link to={sub.url}>{sub.title}</Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  )
                                })}
                              </div>
                            )
                          }

                          const isActive = isActiveUrl(item.url)
                          return (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActive}
                                className={`rounded-lg py-2 px-3 transition-colors ${isActive ? 'bg-primary/15 text-primary font-bold' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground font-medium'}`}
                              >
                                <Link to={item.url}>{item.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-4 gap-4 bg-background/30 backdrop-blur-md">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 rounded-xl shadow-sm border-border/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30"
            asChild
          >
            <Link to="/chat/geral">
              <MessageSquare className="w-4 h-4 mr-2" /> Chat
            </Link>
          </Button>
          <Button
            variant="default"
            className="flex-1 rounded-xl shadow-[0_4px_15px_rgba(28,209,92,0.2)]"
            onClick={() => setAiOpen(true)}
          >
            <Sparkles className="w-4 h-4 mr-2" /> Be.ai
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-xl px-2 hover:bg-muted/50 h-12"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 shadow-inner">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-bold leading-none text-foreground">John Doe</span>
                  <span className="text-xs text-muted-foreground mt-1 font-medium">{role}</span>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass-card mb-2">
            <DropdownMenuLabel>Alternar Perfil</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {roles.map((r) => (
              <DropdownMenuItem
                key={r}
                onClick={() => setRole(r)}
                className="justify-between cursor-pointer font-medium"
              >
                {r}{' '}
                {role === r && (
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-muted-foreground font-medium">
              <Settings className="w-4 h-4 mr-2" /> Configurações
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
