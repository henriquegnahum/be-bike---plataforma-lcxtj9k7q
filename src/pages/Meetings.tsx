import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Meetings() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reuniões</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Agenda</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Sem reuniões programadas para hoje.</p>
        </CardContent>
      </Card>
    </div>
  )
}
