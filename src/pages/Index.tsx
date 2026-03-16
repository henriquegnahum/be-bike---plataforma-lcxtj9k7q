import { useTranslation } from '@/lib/i18n'
import { DashboardKPIs } from '@/components/dashboard/DashboardKPIs'
import { FleetDistributionChart } from '@/components/dashboard/FleetDistributionChart'
import { FinancialPerformanceChart } from '@/components/dashboard/FinancialPerformanceChart'
import { ContractsStatusChart } from '@/components/dashboard/ContractsStatusChart'
import { ChurnAnalysisChart } from '@/components/dashboard/ChurnAnalysisChart'
import { LeadGoalControl } from '@/components/dashboard/LeadGoalControl'
import { PartnerPerformance } from '@/components/dashboard/PartnerPerformance'
import { FinancialContractsTable } from '@/components/dashboard/FinancialContractsTable'

export default function Index() {
  const t = useTranslation()

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-secondary">{t('dashboard')}</h1>
        <p className="text-muted-foreground">{t('index_desc')}</p>
      </div>

      <DashboardKPIs />

      <div className="grid gap-6 md:grid-cols-2">
        <FleetDistributionChart />
        <FinancialPerformanceChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ContractsStatusChart />
        <ChurnAnalysisChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LeadGoalControl />
        <PartnerPerformance />
      </div>

      <FinancialContractsTable />
    </div>
  )
}
