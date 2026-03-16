import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CommunityDashboard() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Comunidade e Engajamento</h1>
        <p className="text-muted-foreground mt-1">Métricas de uso e satisfação.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Engajamento App</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">85%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Membros Ouro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.420</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Eventos Realizados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
