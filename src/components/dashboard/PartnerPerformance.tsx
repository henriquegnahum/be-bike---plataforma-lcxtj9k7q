import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from '@/lib/i18n'
import { Progress } from '@/components/ui/progress'

export function PartnerPerformance() {
  const t = useTranslation()

  const metrics = [
    { label: 'Taxa de Aceite', value: 92, target: 90 },
    { label: 'Conclusão de Corridas', value: 88, target: 85 },
    { label: 'Disponibilidade (Uptime)', value: 96, target: 95 },
    { label: 'Satisfação (NPS)', value: 92, target: 90 },
  ]

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">{t('partner_performance')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pb-6">
        {metrics.map((m) => (
          <div key={m.label} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-secondary">{m.label}</span>
              <span className="text-muted-foreground">
                {m.value}% / {m.target}%
              </span>
            </div>
            <Progress value={m.value} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
