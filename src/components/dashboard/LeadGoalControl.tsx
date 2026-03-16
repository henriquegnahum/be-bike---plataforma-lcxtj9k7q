import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">{t('lead_goal_control')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pb-6">
        {goals.map((g) => {
          const percent = Math.min(100, Math.round((g.actual / g.target) * 100))
          return (
            <div key={g.source} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-secondary">{g.source}</span>
                <span className="text-muted-foreground">
                  {g.actual} / {g.target} ({percent}%)
                </span>
              </div>
              <Progress value={percent} className="h-2" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
