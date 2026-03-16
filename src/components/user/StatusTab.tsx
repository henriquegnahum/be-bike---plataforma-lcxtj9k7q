import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUserStore, PresenceStatus } from '@/stores/user'
import { Switch } from '@/components/ui/switch'
import { Check, Clock, Car, Video, Zap } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function StatusTab() {
  const { status, setStatus, customStatus, setCustomStatus } = useUserStore()
  const [emoji, setEmoji] = useState(customStatus?.emoji || '🚀')
  const [text, setText] = useState(customStatus?.text || '')
  const { toast } = useToast()

  const handleSaveStatus = () => {
    if (text) {
      setCustomStatus({ emoji, text, expiresAt: null })
      toast({ title: 'Status Atualizado', description: 'Seu status customizado está visível.' })
    } else {
      setCustomStatus(null)
    }
  }

  const setBasicStatus = (s: PresenceStatus) => {
    setStatus(s)
    toast({ title: 'Presença alterada', description: `Você agora está ${s}.` })
  }

  return (
    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 pb-4 no-scrollbar">
      <div className="space-y-3">
        <Label className="font-bold text-muted-foreground uppercase tracking-wider">
          Status Básico
        </Label>
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant={status === 'online' ? 'default' : 'outline'}
            onClick={() => setBasicStatus('online')}
            className={status === 'online' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 border border-background" />{' '}
            Disponível
          </Button>
          <Button
            variant={status === 'away' ? 'default' : 'outline'}
            onClick={() => setBasicStatus('away')}
            className={status === 'away' ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : ''}
          >
            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2 border border-background" />{' '}
            Ausente
          </Button>
          <Button
            variant={status === 'offline' ? 'default' : 'outline'}
            onClick={() => setBasicStatus('offline')}
            className={status === 'offline' ? 'bg-gray-500 hover:bg-gray-600 text-white' : ''}
          >
            <div className="w-2 h-2 rounded-full bg-gray-400 mr-2 border border-background" />{' '}
            Offline
          </Button>
        </div>
      </div>

      <div className="space-y-4 bg-background/50 p-4 border border-border/60 rounded-2xl shadow-sm">
        <Label className="font-bold text-muted-foreground uppercase tracking-wider">
          Status Customizado
        </Label>
        <div className="flex gap-2">
          <Input
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            className="w-14 text-center text-lg bg-background"
            maxLength={2}
          />
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Qual o seu foco agora?"
            className="flex-1 bg-background"
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSaveStatus} className="flex-1 shadow-sm">
            <Check className="w-4 h-4 mr-2" /> Salvar Status
          </Button>
          {customStatus && (
            <Button
              variant="outline"
              onClick={() => {
                setCustomStatus(null)
                setText('')
              }}
              className="text-destructive"
            >
              Limpar
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <Label className="font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" /> Gatilhos Automáticos
        </Label>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded-xl bg-background/30 shadow-sm">
            <div className="flex items-center gap-3">
              <Video className="w-4 h-4 text-blue-500" />
              <div>
                <p className="text-sm font-bold">Em Reunião</p>
                <p className="text-xs text-muted-foreground font-medium">
                  Ativa ao entrar no Google Meet
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 border rounded-xl bg-background/30 shadow-sm">
            <div className="flex items-center gap-3">
              <Car className="w-4 h-4 text-orange-500" />
              <div>
                <p className="text-sm font-bold">Em Trânsito</p>
                <p className="text-xs text-muted-foreground font-medium">
                  Integração com GPS do app mobile
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-3 border rounded-xl bg-background/30 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-sm font-bold">Ausente Automático</p>
                <p className="text-xs text-muted-foreground font-medium">
                  Após 15 min de inatividade
                </p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  )
}
