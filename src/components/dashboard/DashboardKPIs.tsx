import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Bike, TrendingUp, DollarSign } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { MOCK_BIKES, MOCK_DELIVERERS } from '@/lib/mock-data'

export function DashboardKPIs() {
  const t = useTranslation()
  const activeBikes = MOCK_BIKES.filter((b) => b.status === 'Ativa').length
  const activeDeliverers = MOCK_DELIVERERS.filter((d) => d.status === 'Active').length

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-2">
      <Card className="glass-card bg-gradient-to-br from-primary/90 to-emerald-600/90 dark:from-primary/80 dark:to-emerald-600/80 border-transparent text-white shadow-xl shadow-primary/20 group hover:-translate-y-1 transition-transform duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white/90">{t('active_fleet')}</CardTitle>
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md group-hover:bg-white/30 transition-colors">
            <Bike className="h-4 w-4 text-white" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tight">
            {activeBikes} / {MOCK_BIKES.length}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {t('active_deliverers')}
          </CardTitle>
          <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
            <Users className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground">
            {activeDeliverers} / {MOCK_DELIVERERS.length}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {t('monthly_conversion')}
          </CardTitle>
          <div className="p-2 bg-muted rounded-lg group-hover:bg-emerald-500/10 transition-colors">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground">+12%</div>
        </CardContent>
      </Card>

      <Card className="glass-card group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">{t('mrr')}</CardTitle>
          <div className="p-2 bg-muted rounded-lg group-hover:bg-emerald-500/10 transition-colors">
            <DollarSign className="h-4 w-4 text-emerald-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground">R$ 142k</div>
        </CardContent>
      </Card>
    </div>
  )
}
