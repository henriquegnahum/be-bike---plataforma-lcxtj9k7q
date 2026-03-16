import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CustomerService() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Atendimento</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Chamados Abertos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">45</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Tempo Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4m 12s</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">CSAT</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">92%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
