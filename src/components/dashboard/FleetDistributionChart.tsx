import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import { useTranslation } from '@/lib/i18n'
import { useMemo } from 'react'

export function FleetDistributionChart() {
  const t = useTranslation()

  const data = useMemo(
    () => [
      { segment: 'fleet_segment_99food', value: 450, fill: 'var(--color-fleet_segment_99food)' },
      { segment: 'fleet_segment_other', value: 120, fill: 'var(--color-fleet_segment_other)' },
      { segment: 'fleet_segment_b2b', value: 80, fill: 'var(--color-fleet_segment_b2b)' },
      {
        segment: 'fleet_segment_intermediation',
        value: 50,
        fill: 'var(--color-fleet_segment_intermediation)',
      },
      { segment: 'fleet_segment_own', value: 200, fill: 'var(--color-fleet_segment_own)' },
    ],
    [],
  )

  const config = useMemo(
    () => ({
      fleet_segment_99food: { label: t('fleet_segment_99food'), color: 'hsl(var(--primary))' },
      fleet_segment_other: { label: t('fleet_segment_other'), color: 'hsl(var(--secondary))' },
      fleet_segment_b2b: { label: t('fleet_segment_b2b'), color: '#3b82f6' },
      fleet_segment_intermediation: { label: t('fleet_segment_intermediation'), color: '#10b981' },
      fleet_segment_own: { label: t('fleet_segment_own'), color: '#f59e0b' },
    }),
    [t],
  )

  return (
    <Card className="shadow-sm flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{t('fleet_distribution')}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={config} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="segment"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={2}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} className="flex-wrap gap-2 text-xs" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
