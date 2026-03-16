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
    <div className="space-y-8 pb-12 relative z-10">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground w-fit bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('dashboard')}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">{t('index_desc')}</p>
      </div>

      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <DashboardKPIs />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div
          className="opacity-0 animate-fade-in-up h-full premium-glow"
          style={{ animationDelay: '300ms' }}
        >
          <FleetDistributionChart />
        </div>
        <div
          className="opacity-0 animate-fade-in-up h-full premium-glow"
          style={{ animationDelay: '400ms' }}
        >
          <FinancialPerformanceChart />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div
          className="opacity-0 animate-fade-in-up h-full premium-glow"
          style={{ animationDelay: '500ms' }}
        >
          <ContractsStatusChart />
        </div>
        <div
          className="opacity-0 animate-fade-in-up h-full premium-glow"
          style={{ animationDelay: '600ms' }}
        >
          <ChurnAnalysisChart />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div
          className="opacity-0 animate-fade-in-up h-full premium-glow"
          style={{ animationDelay: '700ms' }}
        >
          <LeadGoalControl />
        </div>
        <div
          className="opacity-0 animate-fade-in-up h-full premium-glow"
          style={{ animationDelay: '800ms' }}
        >
          <PartnerPerformance />
        </div>
      </div>

      <div
        className="opacity-0 animate-fade-in-up premium-glow"
        style={{ animationDelay: '900ms' }}
      >
        <FinancialContractsTable />
      </div>
    </div>
  )
}
