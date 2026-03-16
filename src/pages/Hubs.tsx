import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Building2,
  ArrowDownLeft,
  ArrowUpRight,
  Activity,
  Wrench,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { Progress } from '@/components/ui/progress'

export default function Hubs() {
  const t = useTranslation()

  const hubs = [
    {
      id: 'HUB-SP-C',
      name: 'SP Centro',
      status: 'Operacional',
      withdrawals: 12,
      returns: 4,
      stockHealth: 85,
      techProd: 92,
      statusIcon: CheckCircle2,
      statusColor: 'text-emerald-500',
    },
    {
      id: 'HUB-SP-S',
      name: 'SP Sul',
      status: 'Sobrecarga',
      withdrawals: 28,
      returns: 15,
      stockHealth: 45,
      techProd: 65,
      statusIcon: AlertTriangle,
      statusColor: 'text-red-500',
    },
    {
      id: 'HUB-RJ-C',
      name: 'RJ Centro',
      status: 'Operacional',
      withdrawals: 8,
      returns: 2,
      stockHealth: 90,
      techProd: 88,
      statusIcon: CheckCircle2,
      statusColor: 'text-emerald-500',
    },
  ]

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('hubs')}
        </h1>
        <p className="text-muted-foreground mt-2 font-medium">
          Controle Integrado de Operações, Estoque e Produtividade.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {hubs.map((hub) => (
          <Card key={hub.id} className="glass-card group overflow-hidden relative">
            <div
              className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 bg-current ${hub.statusColor}`}
            />
            <CardHeader className="pb-4 border-b border-border/50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Building2 className="w-5 h-5 text-primary" /> {hub.name}
                  </CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">{hub.id}</CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className={`gap-1 bg-background/50 backdrop-blur-md ${hub.statusColor} border-${hub.statusColor.split('-')[1]}-200 shadow-sm`}
                >
                  <hub.statusIcon className="w-3 h-3" /> {hub.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-emerald-500" /> {t('withdrawals')}
                  </p>
                  <p className="text-2xl font-extrabold">{hub.withdrawals}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <ArrowDownLeft className="w-3 h-3 text-orange-500" /> {t('returns')}
                  </p>
                  <p className="text-2xl font-extrabold">{hub.returns}</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Activity className="w-3 h-3" /> {t('stock_health')}
                    </span>
                    <span className={hub.stockHealth < 50 ? 'text-red-500' : 'text-emerald-500'}>
                      {hub.stockHealth}%
                    </span>
                  </div>
                  <Progress
                    value={hub.stockHealth}
                    className="h-2"
                    indicatorClassName={hub.stockHealth < 50 ? 'bg-red-500' : 'bg-emerald-500'}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Wrench className="w-3 h-3" /> {t('tech_productivity')}
                    </span>
                    <span className={hub.techProd < 70 ? 'text-red-500' : 'text-blue-500'}>
                      {hub.techProd}%
                    </span>
                  </div>
                  <Progress
                    value={hub.techProd}
                    className="h-2"
                    indicatorClassName={hub.techProd < 70 ? 'bg-red-500' : 'bg-blue-500'}
                  />
                </div>
              </div>

              <Button
                className="w-full mt-2 shadow-sm hover:shadow-md transition-shadow"
                variant="outline"
              >
                {t('manage_hub')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
