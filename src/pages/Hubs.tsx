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
      statusColor: 'bg-emerald-500',
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
      statusColor: 'bg-red-500',
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
      statusColor: 'bg-emerald-500',
    },
  ]

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('hubs')}</h1>
        <p className="text-muted-foreground mt-1">
          Controle Integrado de Operações, Estoque e Produtividade.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {hubs.map((hub) => (
          <Card key={hub.id}>
            <CardHeader className="pb-4 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="w-4 h-4" /> {hub.name}
                  </CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">{hub.id}</CardDescription>
                </div>
                <Badge
                  variant={hub.status === 'Operacional' ? 'default' : 'destructive'}
                  className="gap-1"
                >
                  <hub.statusIcon className="w-3 h-3" /> {hub.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> {t('withdrawals')}
                  </p>
                  <p className="text-2xl font-bold">{hub.withdrawals}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                    <ArrowDownLeft className="w-3 h-3" /> {t('returns')}
                  </p>
                  <p className="text-2xl font-bold">{hub.returns}</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Activity className="w-3 h-3" /> {t('stock_health')}
                    </span>
                    <span>{hub.stockHealth}%</span>
                  </div>
                  <Progress value={hub.stockHealth} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Wrench className="w-3 h-3" /> {t('tech_productivity')}
                    </span>
                    <span>{hub.techProd}%</span>
                  </div>
                  <Progress value={hub.techProd} className="h-2" />
                </div>
              </div>

              <Button className="w-full mt-4" variant="outline">
                {t('manage_hub')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
