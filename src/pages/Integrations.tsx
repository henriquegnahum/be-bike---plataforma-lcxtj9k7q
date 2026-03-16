import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Integrations() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Integrações</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Google Workspace</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Sincronização ativa.</p>
        </CardContent>
      </Card>
    </div>
  )
}
