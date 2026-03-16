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
      fleet_segment_99food: {
        label: t('fleet_segment_99food'),
        theme: { light: '#065f46', dark: '#34d399' },
      },
      fleet_segment_other: {
        label: t('fleet_segment_other'),
        theme: { light: '#4338ca', dark: '#818cf8' },
      },
      fleet_segment_b2b: {
        label: t('fleet_segment_b2b'),
        theme: { light: '#0369a1', dark: '#38bdf8' },
      },
      fleet_segment_intermediation: {
        label: t('fleet_segment_intermediation'),
        theme: { light: '#b45309', dark: '#fbbf24' },
      },
      fleet_segment_own: {
        label: t('fleet_segment_own'),
        theme: { light: '#be185d', dark: '#f472b6' },
      },
    }),
    [t],
  )

  return (
    <Card className="flex flex-col h-full border-border/60">
      <CardHeader>
        <CardTitle>{t('fleet_distribution')}</CardTitle>
        <CardDescription>Visão geral da categorização estratégica de ativos</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-6 pt-2">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square max-h-[320px] animate-in zoom-in-95 fade-in duration-1000 fill-mode-both"
        >
          <PieChart>
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
              </filter>
            </defs>
            <Pie
              data={data}
              dataKey="value"
              nameKey="segment"
              innerRadius={80}
              outerRadius={105}
              paddingAngle={6}
              strokeWidth={0}
              animationDuration={1500}
              animationBegin={200}
              cornerRadius={10}
              style={{ filter: 'url(#shadow)' }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  className="transition-all hover:opacity-80"
                />
              ))}
            </Pie>
            <ChartTooltip
              content={<ChartTooltipContent hideLabel className="glass-card bg-background/90" />}
              cursor={{ fill: 'transparent' }}
            />
            <ChartLegend
              content={<ChartLegendContent />}
              className="flex-wrap gap-x-4 gap-y-2 text-[11px] mt-4 font-medium"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
