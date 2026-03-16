import { Bell, Activity, Zap } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function RightSidebar() {
  return (
    <aside className="w-80 border-l hidden xl:flex flex-col h-full bg-card">
      <div className="p-4 border-b h-14 flex items-center">
        <h3 className="font-semibold flex items-center gap-2">
          <Activity className="w-4 h-4" /> Painel de Insights
        </h3>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-muted-foreground">
              <Zap className="w-4 h-4" /> Recomendações Be.ai
            </h4>
            <div className="space-y-3">
              <Card className="p-3 bg-muted/50">
                <p className="text-sm">
                  A produtividade do Hub SP-Centro caiu 15% hoje. Sugiro realocar técnicos.
                </p>
                <div className="mt-2 flex gap-2">
                  <Badge variant="outline" className="cursor-pointer">
                    Ver Relatório
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Ignorar
                  </Badge>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-muted-foreground">
              <Bell className="w-4 h-4" /> Últimos Eventos
            </h4>
            <div className="space-y-3">
              <Card className="p-3">
                <p className="text-sm font-medium">Nova O.S. Aprovada</p>
                <p className="text-xs text-muted-foreground mt-1">Bike 9C21A - Troca de Bateria</p>
              </Card>

              <Card className="p-3">
                <p className="text-sm font-medium">Contrato Assinado</p>
                <p className="text-xs text-muted-foreground mt-1">Lead: Carlos Silva</p>
              </Card>

              <Card className="p-3">
                <p className="text-sm font-medium">Alerta de Fraude</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Tentativa de locação dupla detectada.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
