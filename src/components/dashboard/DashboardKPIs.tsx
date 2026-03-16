import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Bike, TrendingUp, DollarSign } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { MOCK_BIKES, MOCK_DELIVERERS } from '@/lib/mock-data'

export function DashboardKPIs() {
  const t = useTranslation()
  const activeBikes = MOCK_BIKES.filter((b) => b.status === 'Ativa').length
  const activeDeliverers = MOCK_DELIVERERS.filter((d) => d.status === 'Active').length

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-4">
      <Card className="glass-card bg-gradient-to-br from-primary/90 to-emerald-500/80 dark:from-primary/70 dark:to-emerald-600/70 border-white/20 text-white overflow-hidden relative group">
        <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
          <CardTitle className="text-sm font-bold tracking-wider text-white/90 uppercase">
            {t('active_fleet')}
          </CardTitle>
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md group-hover:bg-white/30 transition-colors shadow-inner">
            <Bike className="h-5 w-5 text-white drop-shadow-md" />
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-4xl font-extrabold tracking-tight drop-shadow-sm tabular-nums">
            {activeBikes}{' '}
            <span className="text-xl font-medium text-white/70">/ {MOCK_BIKES.length}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card overflow-hidden relative group">
        <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />
        <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
          <CardTitle className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
            {t('active_deliverers')}
          </CardTitle>
          <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-4xl font-extrabold text-foreground tabular-nums">
            {activeDeliverers}{' '}
            <span className="text-xl font-medium text-muted-foreground">
              / {MOCK_DELIVERERS.length}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card overflow-hidden relative group">
        <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-700" />
        <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
          <CardTitle className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
            {t('monthly_conversion')}
          </CardTitle>
          <div className="p-2 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors border border-blue-500/10">
            <TrendingUp className="h-5 w-5 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-4xl font-extrabold text-foreground tabular-nums">+12.5%</div>
        </CardContent>
      </Card>

      <Card className="glass-card overflow-hidden relative group">
        <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors duration-700" />
        <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
          <CardTitle className="text-sm font-bold tracking-wider text-muted-foreground uppercase">
            {t('mrr')}
          </CardTitle>
          <div className="p-2 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/10">
            <DollarSign className="h-5 w-5 text-emerald-500" />
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-4xl font-extrabold text-foreground tabular-nums">R$ 142k</div>
        </CardContent>
      </Card>
    </div>
  )
}
