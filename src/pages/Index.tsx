import { useTranslation } from '@/lib/i18n'
import useAppStore from '@/stores/main'
import { DashboardKPIs } from '@/components/dashboard/DashboardKPIs'
import { FleetDistributionChart } from '@/components/dashboard/FleetDistributionChart'
import { FinancialPerformanceChart } from '@/components/dashboard/FinancialPerformanceChart'
import { ContractsStatusChart } from '@/components/dashboard/ContractsStatusChart'
import { ChurnAnalysisChart } from '@/components/dashboard/ChurnAnalysisChart'
import { LeadGoalControl } from '@/components/dashboard/LeadGoalControl'
import { PartnerPerformance } from '@/components/dashboard/PartnerPerformance'
import { FinancialContractsTable } from '@/components/dashboard/FinancialContractsTable'
import { Link } from 'react-router-dom'
import { TrendingDown, Wrench, Settings2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

export default function Index() {
  const t = useTranslation()
  const { dashboardConfig, toggleDashboardWidget } = useAppStore()

  return (
    <div className="space-y-8 pb-12 relative z-10">
      <div
        className="flex justify-between items-start gap-4 flex-wrap opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0ms' }}
      >
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground w-fit bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t('dashboard')}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg font-medium">{t('index_desc')}</p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="shadow-sm border-border/60">
              <Settings2 className="w-4 h-4 mr-2" /> Personalizar Visão
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 glass-card p-5 space-y-4" align="end">
            <h4 className="font-bold text-xs mb-3 uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
              Widgets Visíveis
            </h4>
            <div className="space-y-3">
              {Object.entries(dashboardConfig).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">{t(key as any) || key}</span>
                  <Switch checked={value} onCheckedChange={() => toggleDashboardWidget(key)} />
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Link
          to="/maintenance"
          className="block opacity-0 animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          <Card className="h-full glass-card bg-gradient-to-br from-orange-500/10 to-orange-500/5 hover:from-orange-500/20 hover:to-orange-500/10 border-orange-500/20 cursor-pointer group transition-all duration-500 shadow-[0_8px_32px_rgba(249,115,22,0.05)]">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-orange-500/20 rounded-2xl text-orange-600 dark:text-orange-500 group-hover:scale-110 transition-transform shadow-inner">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-orange-700 dark:text-orange-400">
                  {t('maintenance_alert')}
                </h3>
                <p className="text-sm font-medium text-foreground/80 mt-1">
                  8 bikes atingirão o limite de 2500km esta semana.{' '}
                  <span className="font-bold text-orange-600 dark:text-orange-400 underline underline-offset-2">
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
          <Card className="h-full glass-card bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:from-blue-500/20 hover:to-blue-500/10 border-blue-500/20 cursor-pointer group transition-all duration-500 shadow-[0_8px_32px_rgba(59,130,246,0.05)]">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform shadow-inner">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400">
                  {t('predictive_churn')}
                </h3>
                <p className="text-sm font-medium text-foreground/80 mt-1">
                  15 entregadores apresentam sinais de inatividade.{' '}
                  <span className="font-bold text-blue-600 dark:text-blue-400 underline underline-offset-2">
                    Gerenciar retenção.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {dashboardConfig.kpis && (
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
          <DashboardKPIs />
        </div>
      )}

      {(dashboardConfig.fleet || dashboardConfig.financial) && (
        <div className="grid gap-8 lg:grid-cols-2">
          {dashboardConfig.fleet && (
            <div
              className="opacity-0 animate-fade-in-up h-full premium-glow"
              style={{ animationDelay: '300ms' }}
            >
              <FleetDistributionChart />
            </div>
          )}
          {dashboardConfig.financial && (
            <div
              className="opacity-0 animate-fade-in-up h-full premium-glow"
              style={{ animationDelay: '400ms' }}
            >
              <FinancialPerformanceChart />
            </div>
          )}
        </div>
      )}

      {(dashboardConfig.contracts || dashboardConfig.churn) && (
        <div className="grid gap-8 lg:grid-cols-2">
          {dashboardConfig.contracts && (
            <div
              className="opacity-0 animate-fade-in-up h-full premium-glow"
              style={{ animationDelay: '500ms' }}
            >
              <ContractsStatusChart />
            </div>
          )}
          {dashboardConfig.churn && (
            <div
              className="opacity-0 animate-fade-in-up h-full premium-glow"
              style={{ animationDelay: '600ms' }}
            >
              <ChurnAnalysisChart />
            </div>
          )}
        </div>
      )}

      {(dashboardConfig.leads || dashboardConfig.partners) && (
        <div className="grid gap-8 lg:grid-cols-2">
          {dashboardConfig.leads && (
            <div
              className="opacity-0 animate-fade-in-up h-full premium-glow"
              style={{ animationDelay: '700ms' }}
            >
              <LeadGoalControl />
            </div>
          )}
          {dashboardConfig.partners && (
            <div
              className="opacity-0 animate-fade-in-up h-full premium-glow"
              style={{ animationDelay: '800ms' }}
            >
              <PartnerPerformance />
            </div>
          )}
        </div>
      )}

      {dashboardConfig.table && (
        <div
          className="opacity-0 animate-fade-in-up premium-glow"
          style={{ animationDelay: '900ms' }}
        >
          <FinancialContractsTable />
        </div>
      )}
    </div>
  )
}
