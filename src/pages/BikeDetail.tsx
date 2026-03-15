import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Activity, MapPin } from 'lucide-react'

export default function BikeDetail() {
  const { id } = useParams()

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/frota">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bike #{id || 'X-123'}</h1>
          <p className="text-muted-foreground">Telemetria e Histórico</p>
        </div>
        <Badge className="ml-auto bg-primary text-primary-foreground">Ativa (Em Rota)</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-subtle md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="text-primary w-5 h-5" />
              Visão de Telemetria (Trackplus)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl border bg-muted/30">
                <p className="text-sm text-muted-foreground mb-1">Km Atual</p>
                <p className="text-3xl font-bold">
                  2.450 <span className="text-sm font-normal text-muted-foreground">km</span>
                </p>
                <div className="w-full bg-muted rounded-full h-1 mt-3">
                  <div className="bg-chart-3 h-1 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1 text-right">
                  Proxima revisão: 2.500km
                </p>
              </div>
              <div className="p-4 rounded-xl border bg-muted/30">
                <p className="text-sm text-muted-foreground mb-1">Status da Bateria</p>
                <p className="text-3xl font-bold">78%</p>
                <div className="w-full bg-muted rounded-full h-1 mt-3">
                  <div className="bg-primary h-1 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>

            <div className="h-48 rounded-xl bg-slate-100 flex items-center justify-center border relative overflow-hidden">
              {/* Fake Map visualization */}
              <MapPin
                className="text-primary w-8 h-8 absolute"
                style={{ top: '40%', left: '50%' }}
              />
              <div className="absolute inset-0 opacity-10 bg-[url('https://img.usecurling.com/p/800/400?q=map')] bg-cover bg-center"></div>
              <p className="text-muted-foreground font-medium z-10 relative bg-white/80 px-3 py-1 rounded-full shadow-sm">
                Localização Real-time
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-subtle">
          <CardHeader>
            <CardTitle>Ciclo de Manutenção</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l ml-3 border-muted space-y-6">
              <div className="relative pl-6">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></span>
                <p className="text-sm font-semibold">Hoje</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Alerta gerado: Troca de pastilhas iminente.
                </p>
              </div>
              <div className="relative pl-6">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-muted-foreground ring-4 ring-background"></span>
                <p className="text-sm font-semibold">10/02/2026</p>
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
