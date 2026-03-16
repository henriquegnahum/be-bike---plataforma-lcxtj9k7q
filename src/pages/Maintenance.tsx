import { taskColumns, inventoryItems } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Wrench, Package, AlertOctagon, CheckCircle2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTranslation } from '@/lib/i18n'

export default function Maintenance() {
  const t = useTranslation()

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t('maint_title')}
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">{t('maint_desc')}</p>
        </div>
      </div>

      <Tabs defaultValue="inventory" className="flex-1 flex flex-col">
        <TabsList className="w-full sm:w-auto self-start glass-card p-1">
          <TabsTrigger value="inventory" className="gap-2 rounded-xl">
            <Package className="w-4 h-4" /> {t('inventory')}
          </TabsTrigger>
          <TabsTrigger value="kanban" className="gap-2 rounded-xl">
            <Wrench className="w-4 h-4" /> {t('os_kanban')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="mt-6">
          <Card className="glass-card overflow-hidden">
            <CardHeader className="bg-muted/10 border-b">
              <CardTitle>{t('consolidated_inventory')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-background/50">
                  <TableRow>
                    <TableHead className="pl-6">{t('sku_item')}</TableHead>
                    <TableHead>{t('hub')}</TableHead>
                    <TableHead>{t('usage_freq')}</TableHead>
                    <TableHead>{t('min_stock')}</TableHead>
                    <TableHead>{t('current')}</TableHead>
                    <TableHead className="pr-6">{t('status')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => {
                    const isCritical = item.current <= item.min
                    return (
                      <TableRow key={item.id} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="pl-6 font-bold">{t(item.name as any)}</TableCell>
                        <TableCell className="font-medium text-muted-foreground">
                          {t(item.hub as any)}
                        </TableCell>
                        <TableCell>{t(item.usage as any)}</TableCell>
                        <TableCell className="tabular-nums">{item.min}</TableCell>
                        <TableCell
                          className={`tabular-nums font-extrabold text-lg ${isCritical ? 'text-red-500' : ''}`}
                        >
                          {item.current}
                        </TableCell>
                        <TableCell className="pr-6">
                          {isCritical ? (
                            <Badge variant="destructive" className="gap-1 shadow-sm">
                              <AlertOctagon className="w-3 h-3" /> {t('imminent_rupture')}
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="border-primary text-primary gap-1 shadow-sm bg-primary/5"
                            >
                              <CheckCircle2 className="w-3 h-3" /> {t('status_normal')}
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

        <TabsContent value="kanban" className="flex-1 mt-6">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {taskColumns.map((col) => (
              <div
                key={col.id}
                className="min-w-[320px] flex-1 flex flex-col glass-panel rounded-[2rem] p-5 border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold uppercase tracking-wider text-sm">
                    {t(col.title as any)}
                  </h3>
                  <Badge variant="secondary" className="shadow-sm">
                    {col.tasks.length}
                  </Badge>
                </div>
                <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
                  {col.tasks.map((task) => (
                    <Card
                      key={task.id}
                      className="cursor-pointer hover:-translate-y-1 transition-transform border-border/50 bg-background/80"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="outline" className="font-mono text-[10px]">
                            {task.id}
                          </Badge>
                          <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20 shadow-sm">
                            #{task.chassi}
                          </span>
                        </div>
                        <p className="font-semibold text-sm">{task.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                  {col.tasks.length === 0 && (
                    <div className="flex-1 flex items-center justify-center border-2 border-dashed rounded-xl opacity-50 py-10 font-medium text-sm">
                      {t('no_tasks')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
