import { taskColumns } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Maintenance() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Manutenção e O.S.</h1>
        <p className="text-muted-foreground mt-1">Kanban de operações.</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {taskColumns.map((col) => (
          <div key={col.id} className="min-w-[300px] flex-1 bg-muted/30 rounded-lg p-4 border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{col.title}</h3>
              <Badge variant="secondary">{col.tasks.length}</Badge>
            </div>
            <div className="space-y-3">
              {col.tasks.map((task) => (
                <Card key={task.id} className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-muted-foreground">{task.id}</span>
                    <span className="text-xs font-medium">#{task.chassi}</span>
                  </div>
                  <p className="text-sm">{task.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
