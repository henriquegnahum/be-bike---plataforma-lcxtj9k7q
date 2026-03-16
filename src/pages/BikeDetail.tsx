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
import {
  Wrench,
  Settings,
  Bike as BikeIcon,
  Activity,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'
import { MOCK_BIKES, MOCK_BIKE_OS } from '@/lib/mock-data'
import { useState } from 'react'
import { useTranslation } from '@/lib/i18n'

export default function BikeDetail() {
  const { id } = useParams()
  const foundBike = MOCK_BIKES.find((b) => b.id === id) || MOCK_BIKES[0]
  const [bike, setBike] = useState(foundBike)
  const t = useTranslation()

  const nextRevisionKm = bike.lastRevisionKm + 2500
  const kmToRevision = nextRevisionKm - bike.mileage

  const getRevData = () => {
    if (bike.status === 'Oficina')
      return { l: 'Em Revisão', c: 'text-blue-500', bg: 'bg-blue-50', i: Wrench }
    if (kmToRevision <= 0)
      return { l: 'Revisar Agora', c: 'text-red-500', bg: 'bg-red-50', i: AlertTriangle }
    if (kmToRevision <= 300)
      return { l: 'Atenção', c: 'text-orange-500', bg: 'bg-orange-50', i: AlertCircle }
    return { l: 'OK', c: 'text-emerald-500', bg: 'bg-emerald-50', i: CheckCircle2 }
  }
  const revStatus = getRevData()
  const RevIcon = revStatus.i

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 glass-card p-6 border-primary/20 shadow-[0_8px_30px_rgba(28,209,92,0.05)]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight font-mono text-foreground">
            {bike.chassi}
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-2 font-medium">
            <BikeIcon className="w-5 h-5 text-primary" /> {bike.model} • {bike.project}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            className="text-lg px-4 py-1.5 shadow-md"
            variant={bike.status === 'Ativa' ? 'default' : 'secondary'}
          >
            {t(bike.status as any)}
          </Badge>
          <Button variant="outline" disabled={bike.status === 'Oficina'}>
            <Wrench className="w-4 h-4 mr-2" /> {t('send_workshop')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1 glass-card border-primary/20">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" /> {t('telemetry')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                {t('total_km')}
              </p>
              <p className="text-3xl font-extrabold tabular-nums">
                {bike.mileage} <span className="text-lg text-muted-foreground font-medium">km</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                {t('last_revision')}
              </p>
              <p className="text-lg font-semibold tabular-nums">{bike.lastRevisionKm} km</p>
            </div>
            <div
              className={`p-4 rounded-2xl border ${revStatus.bg} border-${revStatus.c.split('-')[1]}-200 shadow-inner`}
            >
              <p className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
                {t('next_revision')}{' '}
                <Badge
                  variant="outline"
                  className={`ml-auto border-transparent ${revStatus.c} bg-white/50 flex gap-1`}
                >
                  <RevIcon className="w-3 h-3" /> {revStatus.l}
                </Badge>
              </p>
              <p className="font-extrabold text-2xl tabular-nums">{nextRevisionKm} km</p>
              <p className="text-sm font-medium mt-1 opacity-80">
                {t('in')} {Math.max(kmToRevision, 0)} km
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 glass-card overflow-hidden">
          <CardContent className="p-0">
            <Tabs defaultValue="specs" className="w-full">
              <div className="px-6 py-4 border-b bg-muted/10 backdrop-blur-md">
                <TabsList className="bg-background/50 shadow-sm">
                  <TabsTrigger value="specs" className="gap-2">
                    <Settings className="w-4 h-4" /> {t('specs_finance')}
                  </TabsTrigger>
                  <TabsTrigger value="maintenance" className="gap-2">
                    <Wrench className="w-4 h-4" /> {t('maintenance_log')}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="specs" className="p-8 m-0 space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                      {t('brand_size')}
                    </p>
                    <p className="font-semibold text-lg">
                      {bike.brand} - {bike.size}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                      {t('color_version')}
                    </p>
                    <p className="font-semibold text-lg">
                      {bike.color} - {bike.version}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {t('purchase_invoice')}
                    </p>
                    <p className="font-semibold text-lg">{bike.purchaseDate}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" /> {t('security_assets')}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-background/50 p-6 rounded-2xl border shadow-sm">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                        {t('tracker_num')}
                      </p>
                      <p className="font-mono text-base font-medium">{bike.trackerNum}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                        {t('battery_num')}
                      </p>
                      <p className="font-mono text-base font-medium">{bike.batteryNum}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                        {t('lock_code')}
                      </p>
                      <p className="font-mono text-xl font-extrabold text-primary">
                        {bike.lockCode}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="maintenance" className="p-0 m-0">
                <Table>
                  <TableHeader className="bg-muted/5">
                    <TableRow>
                      <TableHead className="pl-6">O.S.</TableHead>
                      <TableHead>{t('date')}</TableHead>
                      <TableHead>{t('description')}</TableHead>
                      <TableHead className="pr-6 text-right">{t('cost')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_BIKE_OS.map((os) => (
                      <TableRow key={os.id}>
                        <TableCell className="pl-6 font-mono text-xs font-bold">{os.id}</TableCell>
                        <TableCell className="font-medium">{os.date}</TableCell>
                        <TableCell>{os.description}</TableCell>
                        <TableCell className="pr-6 text-right font-bold text-primary">
                          R$ {os.cost.toFixed(2)}
                        </TableCell>
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
