import { useUserStore } from '@/stores/user'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { BellOff, Monitor, Smartphone, Moon } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function PrefsTab() {
  const { preferences, setPreferences } = useUserStore()
  const { toast } = useToast()

  const setDnd = (minutes: number | null) => {
    if (!minutes) {
      setPreferences({ dndUntil: null })
      toast({ title: 'Notificações Retomadas', description: 'Você voltará a receber alertas.' })
      return
    }
    const d = new Date()
    d.setMinutes(d.getMinutes() + minutes)
    setPreferences({ dndUntil: d.toISOString() })
    toast({
      title: 'Notificações Pausadas',
      description: `Alertas silenciados até ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.`,
    })
  }

  const isDndActive = preferences.dndUntil && new Date(preferences.dndUntil) > new Date()

  return (
    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 pb-4 no-scrollbar">
      <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BellOff className="w-5 h-5 text-red-500" />
          <h3 className="font-bold text-[15px] text-red-600">Modo Não Perturbe</h3>
        </div>
        {isDndActive ? (
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-red-600/80">
              Pausado até as{' '}
              {new Date(preferences.dndUntil!).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDnd(null)}
              className="border-red-200 text-red-600 hover:bg-red-50"
            >
              Retomar
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Button variant="outline" onClick={() => setDnd(30)} className="text-xs">
              30 min
            </Button>
            <Button variant="outline" onClick={() => setDnd(60)} className="text-xs">
              1 hora
            </Button>
            <Button variant="outline" onClick={() => setDnd(240)} className="text-xs">
              4 horas
            </Button>
            <Button variant="outline" onClick={() => setDnd(24 * 60)} className="text-xs">
              <Moon className="w-3 h-3 mr-2" /> Até amanhã
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2 flex items-center gap-2">
          <Monitor className="w-4 h-4" /> Notificações Desktop
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer" htmlFor="desk-crit">
              Alertas Críticos (Segurança/Operação)
            </Label>
            <Switch
              id="desk-crit"
              checked={preferences.computer.critical}
              onCheckedChange={(c) =>
                setPreferences({ computer: { ...preferences.computer, critical: c } })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer" htmlFor="desk-dm">
              Mensagens Diretas
            </Label>
            <Switch
              id="desk-dm"
              checked={preferences.computer.dms}
              onCheckedChange={(c) =>
                setPreferences({ computer: { ...preferences.computer, dms: c } })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer" htmlFor="desk-task">
              Atualizações de Tarefas
            </Label>
            <Switch
              id="desk-task"
              checked={preferences.computer.tasks}
              onCheckedChange={(c) =>
                setPreferences({ computer: { ...preferences.computer, tasks: c } })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer" htmlFor="desk-mention">
              Menções em Canais
            </Label>
            <Switch
              id="desk-mention"
              checked={preferences.computer.mentions}
              onCheckedChange={(c) =>
                setPreferences({ computer: { ...preferences.computer, mentions: c } })
              }
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2 flex items-center gap-2">
          <Smartphone className="w-4 h-4" /> Notificações Mobile
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer" htmlFor="mob-crit">
              Alertas Críticos (Segurança/Operação)
            </Label>
            <Switch
              id="mob-crit"
              checked={preferences.mobile.critical}
              onCheckedChange={(c) =>
                setPreferences({ mobile: { ...preferences.mobile, critical: c } })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer" htmlFor="mob-dm">
              Mensagens Diretas
            </Label>
            <Switch
              id="mob-dm"
              checked={preferences.mobile.dms}
              onCheckedChange={(c) => setPreferences({ mobile: { ...preferences.mobile, dms: c } })}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer text-muted-foreground" htmlFor="mob-task">
              Atualizações de Tarefas
            </Label>
            <Switch
              id="mob-task"
              checked={preferences.mobile.tasks}
              onCheckedChange={(c) =>
                setPreferences({ mobile: { ...preferences.mobile, tasks: c } })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="flex-1 cursor-pointer" htmlFor="mob-mention">
              Menções em Canais
            </Label>
            <Switch
              id="mob-mention"
              checked={preferences.mobile.mentions}
              onCheckedChange={(c) =>
                setPreferences({ mobile: { ...preferences.mobile, mentions: c } })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
