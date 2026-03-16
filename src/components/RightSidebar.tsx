import { Bell, Activity, Zap } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function RightSidebar() {
  return (
    <aside className="w-80 border-l border-border/50 bg-background/30 backdrop-blur-xl hidden xl:flex flex-col h-full shadow-[-10px_0_30px_rgba(0,0,0,0.02)]">
      <div className="p-4 border-b border-border/50 bg-muted/10 h-14 flex items-center">
        <h3 className="font-extrabold text-foreground flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" /> Painel de Insights
        </h3>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Zap className="w-3 h-3 text-yellow-500" /> Recomendações Be.ai
            </h4>
            <div className="space-y-3">
              <Card className="glass-card bg-primary/5 border-primary/20 p-4">
                <p className="text-sm font-medium text-foreground">
                  A produtividade do Hub SP-Centro caiu 15% hoje. Sugiro realocar técnicos
                  temporariamente.
                </p>
                <div className="mt-3 flex gap-2">
                  <Badge
                    variant="secondary"
                    className="text-[10px] cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  >
                    Ver Relatório
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-[10px] cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  >
                    Ignorar
                  </Badge>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <Bell className="w-3 h-3 text-blue-500" /> Últimos Eventos
            </h4>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-border/50 before:via-border/50 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary bg-background shrink-0 z-10 shadow-sm ml-[1px]"></div>
                <div className="w-[calc(100%-2.5rem)] ml-4 p-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm">
                  <p className="text-xs font-bold text-foreground">Nova O.S. Aprovada</p>
                  <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                    Bike 9C21A - Troca de Bateria
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mt-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-border bg-background shrink-0 z-10 shadow-sm ml-[1px]"></div>
                <div className="w-[calc(100%-2.5rem)] ml-4 p-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm">
                  <p className="text-xs font-bold text-foreground">Contrato Assinado</p>
                  <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                    Lead: Carlos Silva
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mt-4">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-border bg-background shrink-0 z-10 shadow-sm ml-[1px]"></div>
                <div className="w-[calc(100%-2.5rem)] ml-4 p-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm">
                  <p className="text-xs font-bold text-foreground">Alerta de Fraude</p>
                  <p className="text-[10px] text-muted-foreground font-medium mt-0.5">
                    Tentativa de locação dupla detectada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
