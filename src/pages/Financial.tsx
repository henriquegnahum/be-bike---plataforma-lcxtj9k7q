import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Financial() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financeiro</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">A Receber</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 142.5k</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">A Pagar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 38.2k</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
