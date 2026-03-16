import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Tasks() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tarefas</h1>
        <p className="text-muted-foreground mt-1">Gestão de workflows e aprovações.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Caixa de Entrada</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Sem pendências no momento.</p>
        </CardContent>
      </Card>
    </div>
  )
}
