import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCcw,
  BarChart as BarChartIcon,
} from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export default function Financial() {
  const t = useTranslation()

  const cashFlowData = [
    { month: 'Jan', val: 120 },
    { month: 'Fev', val: 140 },
    { month: 'Mar', val: 130 },
    { month: 'Abr', val: 150 },
    { month: 'Mai', val: 170 },
    { month: 'Jun', val: 165 },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('fin_title')}
        </h1>
        <p className="text-muted-foreground mt-2 font-medium">{t('fin_desc')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass-card group hover:border-emerald-500/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex justify-between items-center">
              {t('accounts_receivable')}{' '}
              <div className="p-1.5 bg-emerald-500/10 rounded-lg group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">R$ 142.5k</div>
            <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded-md border border-emerald-200 shadow-sm">
              <RefreshCcw className="w-3 h-3" /> API ASAAS: SYNCED
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:border-red-500/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex justify-between items-center">
              {t('accounts_payable')}{' '}
              <div className="p-1.5 bg-red-500/10 rounded-lg group-hover:scale-110 transition-transform">
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">R$ 38.2k</div>
            <p className="text-xs font-medium text-muted-foreground mt-2 px-1">
              {t('suppliers_workshops')}
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/30 bg-primary/5 group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <CardHeader className="pb-2 relative z-10">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <DollarSign className="w-4 h-4" /> {t('subsidy_pool')}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-4xl font-extrabold text-primary">R$ 15.0k</div>
            <p className="text-xs font-bold text-primary/80 mt-2 px-1 tracking-wide">
              {t('auto_discount')}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChartIcon className="w-5 h-5 text-primary" /> {t('cash_flow')}
          </CardTitle>
          <CardDescription>Projeção de caixa integrado (k BRL)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{ val: { label: 'Receita', color: 'hsl(var(--primary))' } }}
            className="h-[250px] w-full"
          >
            <BarChart data={cashFlowData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
                opacity={0.4}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                className="text-xs font-medium"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                className="text-xs font-medium"
              />
              <ChartTooltip
                cursor={{ fill: 'hsl(var(--muted)/0.3)' }}
                content={<ChartTooltipContent className="glass-card" />}
              />
              <Bar dataKey="val" fill="var(--color-val)" radius={[4, 4, 0, 0]} barSize={50}>
                {cashFlowData.map((e, i) => (
                  <Cell key={i} className="hover:opacity-80" />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
