import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserAvatar } from './UserAvatar'
import { ProfileTab } from './ProfileTab'
import { StatusTab } from './StatusTab'
import { PrefsTab } from './PrefsTab'
import useAppStore from '@/stores/main'
import { useUserStore } from '@/stores/user'
import { LogOut, User, Activity, BellOff, Download, Settings } from 'lucide-react'

export function UserMenu() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const { setIsAuthenticated } = useAppStore()
  const { profile } = useUserStore()

  const openTab = (tab: string) => {
    setActiveTab(tab)
    setDialogOpen(true)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full transition-transform active:scale-95">
            <UserAvatar className="w-10 h-10" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-64 glass-card border-border/50 p-2 shadow-elevation"
        >
          <DropdownMenuLabel className="pb-2">
            <p className="font-bold text-[15px]">{profile.name}</p>
            <p className="text-xs font-medium text-muted-foreground">{profile.email}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-border/50" />
          <DropdownMenuItem
            onClick={() => openTab('status')}
            className="cursor-pointer py-2.5 font-medium"
          >
            <Activity className="w-4 h-4 mr-2" /> Atualizar status
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => openTab('prefs')}
            className="cursor-pointer py-2.5 font-medium"
          >
            <BellOff className="w-4 h-4 mr-2" /> Pausar notificações
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-border/50" />
          <DropdownMenuItem
            onClick={() => openTab('profile')}
            className="cursor-pointer py-2.5 font-medium"
          >
            <User className="w-4 h-4 mr-2" /> Perfil e Identidade
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => openTab('prefs')}
            className="cursor-pointer py-2.5 font-medium"
          >
            <Settings className="w-4 h-4 mr-2" /> Preferências
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer py-2.5 font-medium">
            <Download className="w-4 h-4 mr-2" /> Downloads locais
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-border/50" />
          <DropdownMenuItem
            onClick={() => setIsAuthenticated(false)}
            className="cursor-pointer py-2.5 font-bold text-red-500 focus:text-red-500 focus:bg-red-500/10"
          >
            <LogOut className="w-4 h-4 mr-2" /> Sair do sistema
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="glass-card sm:max-w-[600px] border-primary/20 shadow-elevation p-0 overflow-hidden bg-background/80 backdrop-blur-2xl">
          <div className="p-6 pb-0 border-b border-border/50 bg-muted/10">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-extrabold tracking-tight">
                Central do Usuário
              </DialogTitle>
            </DialogHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full bg-background/50 p-1 rounded-xl shadow-sm border border-border/60">
                <TabsTrigger
                  value="profile"
                  className="flex-1 rounded-lg py-2 font-bold data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="status"
                  className="flex-1 rounded-lg py-2 font-bold data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Status
                </TabsTrigger>
                <TabsTrigger
                  value="prefs"
                  className="flex-1 rounded-lg py-2 font-bold data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Notificações
                </TabsTrigger>
              </TabsList>
              <div className="h-4" />
            </Tabs>
          </div>
          <div className="p-6">
            {activeTab === 'profile' && <ProfileTab />}
            {activeTab === 'status' && <StatusTab />}
            {activeTab === 'prefs' && <PrefsTab />}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
