import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { useTranslation } from '@/lib/i18n'
import { useMemo } from 'react'

export function ContractsStatusChart() {
  const t = useTranslation()

  const data = useMemo(
    () => [
      { status: 'active_contracts', count: 850, fill: 'var(--color-active_contracts)' },
      { status: 'expiring_contracts', count: 120, fill: 'var(--color-expiring_contracts)' },
      { status: 'pending_contracts', count: 45, fill: 'var(--color-pending_contracts)' },
    ],
    [],
  )

  const config = useMemo(
    () => ({
      active_contracts: { label: t('active_contracts'), color: 'hsl(var(--primary))' },
      expiring_contracts: { label: t('expiring_contracts'), color: '#f59e0b' },
      pending_contracts: { label: t('pending_contracts'), color: '#64748b' },
    }),
    [t],
  )

  return (
    <Card className="flex flex-col h-full border-border/60">
      <CardHeader>
        <CardTitle>{t('contracts_status')}</CardTitle>
        <CardDescription>Volume de contratos por ciclo de vida atual</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4 pt-2">
        <ChartContainer
          config={config}
          className="w-full h-[250px] animate-in zoom-in-95 fade-in duration-1000 fill-mode-both"
        >
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="hsl(var(--border))"
              opacity={0.4}
            />
            <XAxis type="number" hide />
            <YAxis
              dataKey="status"
              type="category"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => t(value as any)}
              width={90}
              fontSize={12}
              className="font-medium"
            />
            <ChartTooltip
              cursor={{ fill: 'hsl(var(--muted)/0.3)' }}
              content={<ChartTooltipContent hideLabel className="glass-card bg-background/90" />}
            />
            <Bar dataKey="count" radius={[0, 8, 8, 0]} animationDuration={1500} barSize={36}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  className="hover:opacity-80 transition-opacity"
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
