import { useTranslation } from '@/lib/i18n'
import { DashboardKPIs } from '@/components/dashboard/DashboardKPIs'
import { FleetDistributionChart } from '@/components/dashboard/FleetDistributionChart'
import { FinancialPerformanceChart } from '@/components/dashboard/FinancialPerformanceChart'
import { ContractsStatusChart } from '@/components/dashboard/ContractsStatusChart'
import { ChurnAnalysisChart } from '@/components/dashboard/ChurnAnalysisChart'
import { LeadGoalControl } from '@/components/dashboard/LeadGoalControl'
import { PartnerPerformance } from '@/components/dashboard/PartnerPerformance'
import { FinancialContractsTable } from '@/components/dashboard/FinancialContractsTable'
import { Link } from 'react-router-dom'
import { TrendingDown, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Index() {
  const t = useTranslation()

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-start gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('dashboard')}</h1>
          <p className="text-muted-foreground mt-1">{t('index_desc')}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Link to="/maintenance" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-2 bg-orange-100 rounded-lg text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">{t('maintenance_alert')}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  8 bikes atingirão o limite de 2500km esta semana.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/crm/customers" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">{t('predictive_churn')}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  15 entregadores apresentam sinais de inatividade.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <DashboardKPIs />

      <div className="grid gap-6 lg:grid-cols-2">
        <FleetDistributionChart />
        <FinancialPerformanceChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ContractsStatusChart />
        <ChurnAnalysisChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <LeadGoalControl />
        <PartnerPerformance />
      </div>

      <FinancialContractsTable />
    </div>
  )
}
