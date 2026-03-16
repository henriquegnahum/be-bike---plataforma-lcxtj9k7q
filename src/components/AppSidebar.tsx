import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, MessageSquare, Sparkles, Plus } from 'lucide-react'
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
  const { setAiOpen, channels, addChannel } = useAppStore()
  const [newChannel, setNewChannel] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
    <Sidebar className="border-r">
      <SidebarHeader className="h-16 flex items-center px-6 py-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Be Bike" className="h-8 w-auto object-contain dark:invert" />
        </Link>
      </SidebarHeader>

      <SidebarContent className="py-4">
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
                        className={`rounded-md transition-colors py-2 px-3 ${isActiveGroup ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                      >
                        <group.icon className="w-4 h-4" />
                        <span>{group.title}</span>
                        <ChevronRight className="ml-auto w-4 h-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-l ml-4 pl-2 mt-1 gap-1">
                        {group.items.map((item: any) => {
                          const isActive = isActiveUrl(item.url)
                          return (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActive}
                                className={`rounded-md py-1.5 px-3 transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-muted/50'}`}
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
                    className={`rounded-md transition-colors py-2 px-3 ${isActiveUrl('/chat') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Comunicação</span>
                    <ChevronRight className="ml-auto w-4 h-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="border-l ml-4 pl-2 mt-1 gap-1">
                    {channels.map((ch) => {
                      const url = `/chat/${ch}`
                      const isActive = isActiveUrl(url)
                      return (
                        <SidebarMenuSubItem key={ch}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActive}
                            className={`rounded-md py-1.5 px-3 transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-muted/50'}`}
                          >
                            <Link to={url}># {ch}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <button
                          onClick={() => setIsDialogOpen(true)}
                          className="w-full flex items-center gap-2 rounded-md py-1.5 px-3 transition-colors text-muted-foreground hover:bg-muted/50 mt-1"
                        >
                          <Plus className="w-3 h-3" /> Novo Canal
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

      <SidebarFooter className="border-t p-4">
        <Button variant="default" className="w-full" onClick={() => setAiOpen(true)}>
          <Sparkles className="w-4 h-4 mr-2" /> Be.ai Assistente
        </Button>
      </SidebarFooter>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Criar Novo Canal</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={newChannel}
              onChange={(e) => setNewChannel(e.target.value)}
              placeholder="ex: suporte-urgente"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleAddChannel()}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleAddChannel}>Criar Canal</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sidebar>
  )
}
