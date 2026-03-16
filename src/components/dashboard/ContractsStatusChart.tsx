import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
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
    <Card className="glass-card flex flex-col h-full border-border/60">
      <CardHeader>
        <CardTitle>{t('contracts_status')}</CardTitle>
        <CardDescription>Volume de contratos por ciclo de vida atual</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4 pt-2">
        <ChartContainer config={config} className="w-full h-[250px]">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="hsl(var(--border))"
              opacity={0.5}
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
            />
            <ChartTooltip
              cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} animationDuration={1500} barSize={32} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
