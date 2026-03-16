import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
      active_contracts: { label: t('active_contracts'), color: '#10b981' },
      expiring_contracts: { label: t('expiring_contracts'), color: '#f59e0b' },
      pending_contracts: { label: t('pending_contracts'), color: '#64748b' },
    }),
    [t],
  )

  return (
    <Card className="shadow-sm flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{t('contracts_status')}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer config={config} className="w-full h-[250px]">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="status"
              type="category"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => t(value as any)}
              width={80}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
