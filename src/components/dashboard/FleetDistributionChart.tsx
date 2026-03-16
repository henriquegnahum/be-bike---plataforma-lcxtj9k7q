import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { PieChart, Pie, Cell } from 'recharts'
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
      fleet_segment_other: { label: t('fleet_segment_other'), color: '#34d399' },
      fleet_segment_b2b: { label: t('fleet_segment_b2b'), color: '#059669' },
      fleet_segment_intermediation: { label: t('fleet_segment_intermediation'), color: '#047857' },
      fleet_segment_own: { label: t('fleet_segment_own'), color: '#8b5cf6' },
    }),
    [t],
  )

  return (
    <Card className="glass-card flex flex-col h-full border-border/60">
      <CardHeader>
        <CardTitle>{t('fleet_distribution')}</CardTitle>
        <CardDescription>Visão geral da categorização de ativos em campo</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-6 pt-2">
        <ChartContainer config={config} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="segment"
              innerRadius={75}
              outerRadius={95}
              paddingAngle={4}
              strokeWidth={0}
              animationDuration={1500}
              animationBegin={200}
              cornerRadius={8}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={{ fill: 'transparent' }}
            />
            <ChartLegend
              content={<ChartLegendContent />}
              className="flex-wrap gap-2 text-xs mt-4"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
