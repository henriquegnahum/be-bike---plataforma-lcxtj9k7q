import { taskColumns, inventoryItems } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Wrench, Package } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Maintenance() {
  return (
    <div className="flex flex-col gap-6 h-full max-w-full pb-10">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Oficina & Estoque Master</h1>
          <p className="text-muted-foreground mt-1">
            Gestão preditiva de peças e ordens de serviço
          </p>
        </div>

        {/* Alerta de Estoque Global */}
        {inventoryItems.some((i) => i.current <= i.min) && (
          <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold text-sm">Alerta Estoque Crítico Detectado</span>
          </div>
        )}
      </div>

      <Tabs defaultValue="kanban" className="flex-1 flex flex-col">
        <TabsList className="w-full sm:w-auto self-start">
          <TabsTrigger value="kanban" className="gap-2">
            <Wrench className="w-4 h-4" /> Kanban de O.S.
          </TabsTrigger>
          <TabsTrigger value="inventory" className="gap-2">
            <Package className="w-4 h-4" /> Controle de Estoque
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kanban" className="flex-1 mt-6">
          <div className="flex gap-4 overflow-x-auto pb-4">
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
                            #{task.chassi}
                          </span>
                        </div>
                        <p className="font-medium text-sm">{task.desc}</p>
                        <div className="mt-3 flex justify-between items-center text-xs text-muted-foreground">
                          <span>Auto-Predict IA</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {col.tasks.length === 0 && (
                    <div className="flex-1 flex items-center justify-center border-2 border-dashed rounded-lg opacity-50 py-8">
                      <span className="text-sm">Nenhuma tarefa</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="mt-6">
          <Card className="shadow-subtle">
            <CardHeader>
              <CardTitle>Inventário Consolidado</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SKU / Item</TableHead>
                    <TableHead>Hub (Local)</TableHead>
                    <TableHead>Frequência Uso</TableHead>
                    <TableHead>Estoque Mín.</TableHead>
                    <TableHead>Estoque Atual</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => {
                    const isCritical = item.current <= item.min
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.hub}</TableCell>
                        <TableCell>{item.usage}</TableCell>
                        <TableCell>{item.min}</TableCell>
                        <TableCell className="font-mono font-semibold">{item.current}</TableCell>
                        <TableCell>
                          {isCritical ? (
                            <Badge variant="destructive" className="animate-pulse-alert">
                              Repor Urgente
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-primary text-primary">
                              Normal
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
