import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import { useTranslation } from '@/lib/i18n'
import { useMemo } from 'react'

export function FinancialPerformanceChart() {
  const t = useTranslation()

  const data = useMemo(
    () => [
      { month: 'Jan', revenue: 110, expenses: 40 },
      { month: 'Feb', revenue: 115, expenses: 42 },
      { month: 'Mar', revenue: 122, expenses: 39 },
      { month: 'Apr', revenue: 130, expenses: 45 },
      { month: 'May', revenue: 142, expenses: 41 },
      { month: 'Jun', revenue: 155, expenses: 48 },
    ],
    [],
  )

  const config = useMemo(
    () => ({
      revenue: { label: t('revenue'), color: 'hsl(var(--primary))' },
      expenses: { label: t('expenses'), color: '#ef4444' },
    }),
    [t],
  )

  return (
    <Card className="flex flex-col h-full border-border/60">
      <CardHeader>
        <CardTitle>{t('financial_performance')} (k)</CardTitle>
        <CardDescription>Acompanhamento de receitas vs despesas operacionais</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4 pt-2">
        <ChartContainer
          config={config}
          className="w-full h-full min-h-[280px] max-h-[320px] animate-in zoom-in-95 fade-in duration-1000 fill-mode-both"
        >
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="fillRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillExp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-expenses)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="var(--color-expenses)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="hsl(var(--border))"
              opacity={0.4}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              fontSize={12}
              className="text-muted-foreground font-medium"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              fontSize={12}
              className="text-muted-foreground font-medium"
            />
            <ChartTooltip
              content={
                <ChartTooltipContent indicator="dot" className="glass-card bg-background/90" />
              }
              cursor={{ stroke: 'hsl(var(--primary)/0.3)', strokeWidth: 2, strokeDasharray: '4 4' }}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              strokeWidth={4}
              fill="url(#fillRev)"
              animationDuration={2000}
              activeDot={{ r: 6, fill: 'var(--color-revenue)', stroke: '#fff', strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="var(--color-expenses)"
              strokeWidth={3}
              fill="url(#fillExp)"
              animationDuration={2000}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
