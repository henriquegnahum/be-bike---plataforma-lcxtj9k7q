import { taskColumns } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle } from 'lucide-react'

export default function Maintenance() {
  return (
    <div className="flex flex-col gap-6 h-full max-w-full">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manutenção & Ordens de Serviço</h1>
          <p className="text-muted-foreground mt-1">Kanban de operações e alertas de estoque</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-semibold text-sm">Alerta Estoque: Pneus Aro 29</span>
        </div>
      </div>

      <div className="flex flex-1 gap-4 overflow-x-auto pb-4">
        {taskColumns.map((col) => (
          <div
            key={col.id}
            className="min-w-[300px] flex-1 flex flex-col bg-muted/30 rounded-xl p-4 border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{col.title}</h3>
              <Badge variant="secondary">{col.tasks.length}</Badge>
            </div>

            <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
              {col.tasks.map((task) => (
                <Card
                  key={task.id}
                  className="shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="font-mono text-[10px]">
                        {task.id}
                      </Badge>
                      <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded">
                        {task.chassi}
                      </span>
                    </div>
                    <p className="font-medium text-sm">{task.desc}</p>
                    <div className="mt-3 flex justify-between items-center text-xs text-muted-foreground">
                      <span>Criado por: Auto-Predict</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {col.tasks.length === 0 && (
                <div className="flex-1 flex items-center justify-center border-2 border-dashed rounded-lg opacity-50">
                  <span className="text-sm">Vazio</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
