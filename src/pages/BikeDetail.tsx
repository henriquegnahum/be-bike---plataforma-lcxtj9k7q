import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Activity, MapPin, AlertTriangle, PlusCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { bikes } from '@/lib/mock-data'

export default function BikeDetail() {
  const { id } = useParams()
  const { toast } = useToast()

  const bikeId = id || 'X-123'
  const bike = bikes.find((b) => b.chassi === bikeId) || bikes[0]

  const needsMaintenance = bike.mileage >= 2500

  const handleCreateOS = () => {
    toast({
      title: 'Ordem de Serviço Criada',
      description: `OS Preditiva gerada para a Bike #${bikeId}. Notificação enviada à oficina.`,
    })
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-10">
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/frota">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bike #{bikeId}</h1>
          <p className="text-muted-foreground">Telemetria e Histórico Operacional</p>
        </div>
        <Badge className="ml-auto bg-primary text-primary-foreground">Ativa (Em Rota)</Badge>
      </div>

      {needsMaintenance && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Alerta de Manutenção Preditiva</h4>
              <p className="text-sm opacity-90">
                A bicicleta ultrapassou o limite de 2.500km de telemetria.
              </p>
            </div>
          </div>
          <Button variant="destructive" onClick={handleCreateOS}>
            <PlusCircle className="w-4 h-4 mr-2" />
            Gerar OS Auto
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-subtle md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="text-primary w-5 h-5" />
              Visão de Telemetria Integrada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl border bg-muted/30">
                <p className="text-sm text-muted-foreground mb-1">Km Atual</p>
                <p className={`text-3xl font-bold ${needsMaintenance ? 'text-destructive' : ''}`}>
                  {bike.mileage.toLocaleString()}{' '}
                  <span className="text-sm font-normal text-muted-foreground">km</span>
                </p>
                <div className="w-full bg-muted rounded-full h-1 mt-3 overflow-hidden">
                  <div
                    className={`${needsMaintenance ? 'bg-destructive' : 'bg-primary'} h-1 rounded-full`}
                    style={{ width: `${Math.min((bike.mileage / 2500) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 text-right">
                  Limite preventivo: 2.500km
                </p>
              </div>
              <div className="p-4 rounded-xl border bg-muted/30">
                <p className="text-sm text-muted-foreground mb-1">Status da Bateria</p>
                <p className="text-3xl font-bold">78%</p>
                <div className="w-full bg-muted rounded-full h-1 mt-3 overflow-hidden">
                  <div className="bg-primary h-1 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>

            <div className="h-48 rounded-xl bg-slate-100 flex items-center justify-center border relative overflow-hidden">
              <MapPin
                className="text-primary w-8 h-8 absolute animate-bounce"
                style={{ top: '40%', left: '50%' }}
              />
              <div className="absolute inset-0 opacity-10 bg-[url('https://img.usecurling.com/p/800/400?q=map')] bg-cover bg-center"></div>
              <p className="text-muted-foreground font-medium z-10 relative bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm">
                Localização Real-time
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-subtle">
          <CardHeader>
            <CardTitle>Ciclo de Manutenção</CardTitle>
            <CardDescription>Histórico de intervenções</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative border-l ml-3 border-muted space-y-6">
              {needsMaintenance && (
                <div className="relative pl-6">
                  <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-destructive ring-4 ring-background animate-pulse-alert"></span>
                  <p className="text-sm font-semibold text-destructive">Hoje</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Alerta preditivo gerado (2.500km).
                  </p>
                </div>
              )}
              <div className="relative pl-6">
                <span
                  className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${!needsMaintenance ? 'bg-primary' : 'bg-muted-foreground'} ring-4 ring-background`}
                ></span>
                <p className="text-sm font-semibold">{bike.lastMaintenance}</p>
                <p className="text-xs text-muted-foreground mt-1">Revisão preventiva (OS #1029).</p>
              </div>
              <div className="relative pl-6">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-muted-foreground ring-4 ring-background"></span>
                <p className="text-sm font-semibold">15/01/2026</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Troca de pneu traseiro (OS #0844).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
