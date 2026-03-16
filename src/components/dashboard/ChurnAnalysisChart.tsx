import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
      count: { label: t('churn_reasons'), color: 'hsl(var(--destructive))' },
    }),
    [t],
  )

  return (
    <Card className="shadow-sm flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{t('churn_reasons')}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer config={config} className="w-full h-[250px]">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="reason"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={10}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
