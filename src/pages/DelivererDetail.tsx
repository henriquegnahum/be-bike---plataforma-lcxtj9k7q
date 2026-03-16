import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User } from 'lucide-react'
import { MOCK_DELIVERERS } from '@/lib/mock-data'
import { useTranslation } from '@/lib/i18n'

export default function DelivererDetail() {
  const { id } = useParams()
  const deliverer = MOCK_DELIVERERS.find((d) => d.id === id) || MOCK_DELIVERERS[0]
  const t = useTranslation()

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center gap-4 bg-card border rounded-lg p-6">
        <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
          <User className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            {deliverer.name} <Badge className="ml-2">{t(deliverer.status as any)}</Badge>
          </h1>
          <p className="text-muted-foreground mt-1">CPF: {deliverer.cpf}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Informações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Telefone</p>
              <p className="font-medium">{deliverer.phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bike Ativa</p>
              <p className="font-medium">{deliverer.activeBike || '-'}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
