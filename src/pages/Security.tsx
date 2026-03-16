import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Security() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Segurança e Risco</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Alertas Ativos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Nenhum incidente crítico registrado.</p>
        </CardContent>
      </Card>
    </div>
  )
}
