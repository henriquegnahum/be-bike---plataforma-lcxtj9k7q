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
import { AlertTriangle, TrendingDown, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

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

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Link
          to="/maintenance"
          className="block opacity-0 animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          <Card className="h-full bg-gradient-to-br from-orange-500/10 to-orange-500/5 hover:from-orange-500/20 hover:to-orange-500/10 border-orange-500/20 cursor-pointer group transition-all duration-500">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-orange-500/20 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform shadow-inner">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-orange-700 dark:text-orange-400">
                  {t('maintenance_alert')}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  8 bikes atingirão o limite de 2500km esta semana.{' '}
                  <span className="font-semibold underline underline-offset-2">
                    Clique para abrir O.S.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link
          to="/crm"
          className="block opacity-0 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <Card className="h-full bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:from-blue-500/20 hover:to-blue-500/10 border-blue-500/20 cursor-pointer group transition-all duration-500">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform shadow-inner">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400">
                  {t('predictive_churn')}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  15 entregadores apresentam sinais de inatividade.{' '}
                  <span className="font-semibold underline underline-offset-2">
                    Gerenciar retenção.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
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
