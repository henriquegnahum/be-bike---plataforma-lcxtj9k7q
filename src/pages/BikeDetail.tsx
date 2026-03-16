import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Wrench, Settings, Bike as BikeIcon, Activity, ShieldCheck, Calendar } from 'lucide-react'
import { MOCK_BIKES, MOCK_BIKE_OS } from '@/lib/mock-data'
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

export default function BikeDetail() {
  const { id } = useParams()
  const foundBike = MOCK_BIKES.find((b) => b.id === id) || MOCK_BIKES[0]
  const [bike, setBike] = useState(foundBike)
  const { toast } = useToast()

  const nextRevisionKm = bike.lastRevisionKm + 2500
  const kmToRevision = nextRevisionKm - bike.mileage

  const getRevisionStatus = () => {
    if (bike.status === 'Oficina')
      return { label: 'Em Revisão', color: 'text-blue-500', bg: 'bg-blue-50' }
    if (kmToRevision <= 0) return { label: 'Revisar Agora', color: 'text-red-500', bg: 'bg-red-50' }
    if (kmToRevision <= 300)
      return { label: 'Atenção', color: 'text-orange-500', bg: 'bg-orange-50' }
    return { label: 'Ok', color: 'text-emerald-500', bg: 'bg-emerald-50' }
  }
  const revStatus = getRevisionStatus()

  const setOficina = () => {
    setBike({ ...bike, status: 'Oficina' })
    toast({ title: 'Status Atualizado', description: 'Moto encaminhada para oficina. Log criado.' })
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border shadow-sm">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-mono text-secondary">
            {bike.chassi}
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <BikeIcon className="w-4 h-4 text-primary" /> {bike.model} • {bike.project}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            className="text-lg px-4 py-1"
            variant={bike.status === 'Ativa' ? 'default' : 'secondary'}
          >
            {bike.status}
          </Badge>
          <Button variant="outline" onClick={setOficina} disabled={bike.status === 'Oficina'}>
            Enviar Oficina
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-4 h-4" /> Telemetry
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="text-xs text-muted-foreground uppercase">Total KM</p>
              <p className="text-2xl font-bold">{bike.mileage} km</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase">Last Revision</p>
              <p className="font-medium">{bike.lastRevisionKm} km</p>
            </div>
            <div
              className={`p-3 rounded-lg border ${revStatus.bg} border-${revStatus.color.split('-')[1]}-200`}
            >
              <p className="text-xs font-semibold uppercase flex justify-between">
                Next <span className={revStatus.color}>{revStatus.label}</span>
              </p>
              <p className="font-bold text-lg">{nextRevisionKm} km</p>
              <p className="text-xs text-muted-foreground mt-1">
                em {Math.max(kmToRevision, 0)} km
              </p>
            </div>
            <Button className="w-full mt-4" variant="default">
              <Wrench className="w-4 h-4 mr-2" /> Auto O.S.
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardContent className="p-0">
            <Tabs defaultValue="specs" className="w-full">
              <div className="px-6 py-4 border-b bg-muted/10">
                <TabsList>
                  <TabsTrigger value="specs">
                    <Settings className="w-4 h-4 mr-2" /> Specs & Finance
                  </TabsTrigger>
                  <TabsTrigger value="maintenance">
                    <Wrench className="w-4 h-4 mr-2" /> O.S. Log
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="specs" className="p-6 m-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Brand / Size</p>
                    <p className="font-medium">
                      {bike.brand} - {bike.size}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Color / Version</p>
                    <p className="font-medium">
                      {bike.color} - {bike.version}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Purchase / Invoice
                    </p>
                    <p className="font-medium">
                      {bike.purchaseDate} • {bike.invoiceValue}
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-secondary mt-8 mb-4 border-b pb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Security Assets
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-slate-50 p-4 rounded-xl border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Tracker #</p>
                    <p className="font-mono text-sm">{bike.trackerNum}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Battery #</p>
                    <p className="font-mono text-sm">{bike.batteryNum}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Lock Code</p>
                    <p className="font-mono text-sm font-bold">{bike.lockCode}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="maintenance" className="p-6 m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>O.S.</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_BIKE_OS.map((os) => (
                      <TableRow key={os.id}>
                        <TableCell className="font-mono text-xs">{os.id}</TableCell>
                        <TableCell>{os.date}</TableCell>
                        <TableCell>{os.description}</TableCell>
                        <TableCell>R$ {os.cost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
