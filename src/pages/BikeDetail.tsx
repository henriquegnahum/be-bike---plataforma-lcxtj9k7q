import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MOCK_BIKES } from '@/lib/mock-data'
import { useTranslation } from '@/lib/i18n'

export default function BikeDetail() {
  const { id } = useParams()
  const bike = MOCK_BIKES.find((b) => b.id === id) || MOCK_BIKES[0]
  const t = useTranslation()

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center bg-card border rounded-lg p-6">
        <div>
          <h1 className="text-2xl font-bold font-mono">{bike.chassi}</h1>
          <p className="text-muted-foreground mt-1">
            {bike.model} • {bike.project}
          </p>
        </div>
        <Badge variant="outline" className="text-sm px-3 py-1">
          {t(bike.status as any)}
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Telemetria</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">KM Total</p>
              <p className="font-medium text-xl">{bike.mileage} km</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Última Revisão</p>
              <p className="font-medium text-xl">{bike.lastRevisionKm} km</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Segurança</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Rastreador #</p>
              <p className="font-mono">{bike.trackerNum}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bateria #</p>
              <p className="font-mono">{bike.batteryNum}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
