import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts'
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
      revenue: { label: t('revenue'), theme: { light: '#065f46', dark: '#34d399' } },
      expenses: { label: t('expenses'), theme: { light: '#b91c1c', dark: '#f87171' } },
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
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
              content={<ChartTooltipContent className="glass-card bg-background/90" />}
              cursor={{ fill: 'hsl(var(--muted)/0.3)' }}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="revenue"
              fill="var(--color-revenue)"
              radius={[4, 4, 0, 0]}
              animationDuration={2000}
              barSize={24}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} className="hover:opacity-80 transition-opacity" />
              ))}
            </Bar>
            <Bar
              dataKey="expenses"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
              animationDuration={2000}
              barSize={24}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} className="hover:opacity-80 transition-opacity" />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
