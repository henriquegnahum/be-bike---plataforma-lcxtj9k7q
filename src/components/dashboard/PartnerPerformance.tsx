import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useTranslation } from '@/lib/i18n'
import { Progress } from '@/components/ui/progress'

export function PartnerPerformance() {
  const t = useTranslation()

  const metrics = [
    { label: 'Taxa de Aceite (99Food)', value: 92, target: 90 },
    { label: 'Conclusão de Corridas', value: 88, target: 85 },
    { label: 'Disponibilidade (Uptime)', value: 96, target: 95 },
    { label: 'Satisfação (NPS)', value: 92, target: 90 },
  ]

  return (
    <Card className="glass-card border-border/60">
      <CardHeader>
        <CardTitle>{t('partner_performance')}</CardTitle>
        <CardDescription>Métricas chaves de operação integradas via API</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pb-6">
        {metrics.map((m) => {
          const isOverGoal = m.value >= m.target
          return (
            <div key={m.label} className="space-y-2 group">
              <div className="flex justify-between text-sm items-end">
                <span className="font-semibold text-foreground">{m.label}</span>
                <span className="text-muted-foreground font-mono text-xs">
                  <span className={isOverGoal ? 'text-primary font-bold' : ''}>{m.value}%</span> /{' '}
                  {m.target}%
                </span>
              </div>
              <Progress
                value={m.value}
                className="h-2.5 bg-muted group-hover:bg-muted/80 transition-colors"
                indicatorClassName={isOverGoal ? 'bg-primary' : 'bg-primary/70'}
              />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
