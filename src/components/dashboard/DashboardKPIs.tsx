import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Bike, TrendingUp, DollarSign } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { MOCK_BIKES, MOCK_DELIVERERS } from '@/lib/mock-data'

export function DashboardKPIs() {
  const t = useTranslation()
  const activeBikes = MOCK_BIKES.filter((b) => b.status === 'Ativa').length
  const activeDeliverers = MOCK_DELIVERERS.filter((d) => d.status === 'Active').length

  return (
    <div className="grid gap-4 md:grid-cols-4 mb-6">
      <Card className="border-l-4 border-l-primary shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{t('active_fleet')}</CardTitle>
          <Bike className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {activeBikes} / {MOCK_BIKES.length}
          </div>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-l-secondary shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{t('active_deliverers')}</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {activeDeliverers} / {MOCK_DELIVERERS.length}
          </div>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-l-blue-500 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{t('monthly_conversion')}</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12%</div>
        </CardContent>
      </Card>
      <Card className="border-l-4 border-l-emerald-500 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{t('mrr')}</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 142k</div>
        </CardContent>
      </Card>
    </div>
  )
}
