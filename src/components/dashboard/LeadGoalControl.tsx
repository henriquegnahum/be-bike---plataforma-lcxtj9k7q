import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useTranslation } from '@/lib/i18n'
import { Progress } from '@/components/ui/progress'

export function LeadGoalControl() {
  const t = useTranslation()

  const goals = [
    { source: 'Instagram (Meta)', actual: 320, target: 400 },
    { source: 'Indicação', actual: 150, target: 100 },
    { source: 'Site Orgânico', actual: 85, target: 150 },
    { source: 'Eventos', actual: 45, target: 50 },
  ]

  return (
    <Card className="glass-card border-border/60">
      <CardHeader>
        <CardTitle>{t('lead_goal_control')}</CardTitle>
        <CardDescription>Acompanhamento de conversão por origem da captação</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pb-6">
        {goals.map((g) => {
          const percent = Math.min(100, Math.round((g.actual / g.target) * 100))
          const isOverGoal = g.actual >= g.target
          return (
            <div key={g.source} className="space-y-2 group">
              <div className="flex justify-between text-sm items-end">
                <span className="font-semibold text-foreground">{g.source}</span>
                <span className="text-muted-foreground font-mono text-xs">
                  <span className={isOverGoal ? 'text-primary font-bold' : ''}>{g.actual}</span> /{' '}
                  {g.target} ({percent}%)
                </span>
              </div>
              <Progress
                value={percent}
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
