import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronRight,
  MessageSquare,
  Sparkles,
  User,
  Settings,
  Hash,
  Plus,
  LogOut,
} from 'lucide-react'
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { navHierarchy } from '@/lib/navigation'

export function AppSidebar() {
  const location = useLocation()
  const { role, setRole, setAiOpen, channels, addChannel, setIsAuthenticated } = useAppStore()
  const [newChannel, setNewChannel] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const roles = ['Admin', 'Finance', 'Operations', 'Hubs', 'Supply']

  const isActiveUrl = (url: string) => {
    return location.pathname === url || (url !== '/' && location.pathname.startsWith(url))
  }

  const handleAddChannel = () => {
    if (newChannel.trim()) {
      addChannel(newChannel.trim().toLowerCase().replace(/\s+/g, '-'))
      setNewChannel('')
      setIsDialogOpen(false)
    }
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
              const isActiveGroup = group.items.some((i) => isActiveUrl(i.url))

              return (
                <Collapsible
                  key={group.title}
                  defaultOpen={isActiveGroup || group.title === 'Visão Geral'}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className={`rounded-xl transition-all duration-300 py-3 px-3 hover:bg-primary/10 hover:text-primary ${isActiveGroup ? 'text-primary font-bold bg-primary/5 shadow-sm' : 'text-muted-foreground font-medium'}`}
                      >
                        <group.icon className="w-5 h-5" />
                        <span>{group.title}</span>
                        <ChevronRight className="ml-auto w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-l-2 border-border/50 ml-4 pl-2 mt-1 gap-1">
                        {group.items.map((item: any) => {
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

            <Collapsible className="group/collapsible mt-2">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={`rounded-xl transition-all duration-300 py-3 px-3 hover:bg-primary/10 hover:text-primary ${isActiveUrl('/chat') ? 'text-primary font-bold bg-primary/5 shadow-sm' : 'text-muted-foreground font-medium'}`}
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Comunicação</span>
                    <ChevronRight className="ml-auto w-4 h-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="border-l-2 border-border/50 ml-4 pl-2 mt-1 gap-1">
                    {channels.map((ch) => {
                      const url = `/chat/${ch}`
                      const isActive = isActiveUrl(url)
                      return (
                        <SidebarMenuSubItem key={ch}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActive}
                            className={`rounded-lg py-2 px-3 transition-colors ${isActive ? 'bg-primary/15 text-primary font-bold' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground font-medium'}`}
                          >
                            <Link to={url} className="flex items-center gap-2">
                              <Hash className="w-3.5 h-3.5 opacity-50" /> {ch}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <button
                          onClick={() => setIsDialogOpen(true)}
                          className="w-full flex items-center gap-2 rounded-lg py-2 px-3 transition-colors text-primary hover:bg-primary/10 font-bold text-[13px] mt-1"
                        >
                          <Plus className="w-4 h-4" /> Novo Canal
                        </button>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-4 gap-4 bg-background/30 backdrop-blur-md">
        <div className="flex gap-2">
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
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 shadow-inner">
                  <User className="w-4 h-4" />
                </span>
                <span className="flex flex-col items-start text-left">
                  <span className="text-sm font-bold leading-none text-foreground">
                    Thiago Silva
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 font-medium">{role}</span>
                </span>
              </span>
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
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-500 font-bold focus:text-red-500 focus:bg-red-500/10"
              onClick={() => setIsAuthenticated(false)}
            >
              <LogOut className="w-4 h-4 mr-2" /> Sair do Sistema
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="glass-card sm:max-w-md border-primary/20">
          <DialogHeader>
            <DialogTitle>Criar Novo Canal</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">
              Nome do Canal
            </label>
            <Input
              value={newChannel}
              onChange={(e) => setNewChannel(e.target.value)}
              placeholder="ex: suporte-urgente"
              className="bg-background/50 h-12 rounded-xl text-[15px]"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleAddChannel()}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded-xl">
              Cancelar
            </Button>
            <Button onClick={handleAddChannel} className="rounded-xl">
              Criar Canal
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sidebar>
  )
}
