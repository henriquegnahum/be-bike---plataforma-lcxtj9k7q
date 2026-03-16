import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
      expenses: { label: t('expenses'), color: 'hsl(var(--destructive))' },
    }),
    [t],
  )

  return (
    <Card className="shadow-sm flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{t('financial_performance')} (k)</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={config} className="w-full h-full min-h-[250px] max-h-[300px]">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="fillRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillExp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-expenses)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-expenses)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              fill="url(#fillRev)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="var(--color-expenses)"
              fill="url(#fillExp)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
