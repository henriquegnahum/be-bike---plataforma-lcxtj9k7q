import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { useTranslation } from '@/lib/i18n'
import { useMemo } from 'react'

export function ChurnAnalysisChart() {
  const t = useTranslation()

  const data = useMemo(
    () => [
      { reason: 'Troca de emprego', count: 45 },
      { reason: 'Problemas fin.', count: 32 },
      { reason: 'Mudança', count: 18 },
      { reason: 'Insatisfação', count: 15 },
      { reason: 'Outros', count: 10 },
    ],
    [],
  )

  const config = useMemo(
    () => ({
      count: { label: t('churn_reasons'), color: '#ef4444' },
    }),
    [t],
  )

  return (
    <Card className="glass-card flex flex-col h-full border-border/60">
      <CardHeader>
        <CardTitle>{t('churn_reasons')}</CardTitle>
        <CardDescription>Principais motivos de cancelamento identificados</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4 pt-2">
        <ChartContainer config={config} className="w-full h-[250px]">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="hsl(var(--border))"
              opacity={0.5}
            />
            <XAxis
              dataKey="reason"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              fontSize={11}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={10} fontSize={12} />
            <ChartTooltip
              cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
              content={<ChartTooltipContent />}
            />
            <Bar
              dataKey="count"
              fill="var(--color-count)"
              radius={[6, 6, 0, 0]}
              animationDuration={1500}
              barSize={32}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
