import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Activity } from 'lucide-react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const radarData = [
  { subject: 'Performance', A: 90, fullMark: 100 },
  { subject: 'Retenção', A: 85, fullMark: 100 },
  { subject: 'Elegível Subsídio', A: 95, fullMark: 100 },
  { subject: 'Conservação da Bike', A: 70, fullMark: 100 },
  { subject: 'Baixa Inadimplência', A: 60, fullMark: 100 },
]

export default function DelivererDetail() {
  const { id } = useParams()

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/entregadores">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">João Silva</h1>
          <p className="text-muted-foreground font-mono">CPF: {id || '111.222.333-44'}</p>
        </div>
        <Badge className="ml-auto bg-primary text-primary-foreground">Ativo</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-subtle">
          <CardHeader>
            <CardTitle>Radar de Scoring</CardTitle>
            <CardDescription>Risco vs Performance</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <ChartContainer
              config={{ A: { label: 'Score', color: 'hsl(var(--primary))' } }}
              className="w-full h-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Score"
                    dataKey="A"
                    stroke="var(--color-A)"
                    fill="var(--color-A)"
                    fillOpacity={0.3}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card className="shadow-subtle flex-1">
            <CardHeader>
              <CardTitle>Tracker de Subsídio (Integração 99)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Progresso do Nível Atual
                </span>
                <span className="text-sm font-bold text-primary">Nível Ouro (100% Elegível)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-4 mb-2">
                <div className="bg-primary h-4 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground text-right">
                85% das corridas atingidas para manter benefício
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-subtle">
            <CardHeader>
              <CardTitle>Ativo Vinculado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-xl bg-muted/30">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-Bike Chassi #X-123</h4>
                    <p className="text-xs text-muted-foreground">Última Telemetria: Há 5 min</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/frota/X-123">
                    Ver Frota <ExternalLink className="ml-2 w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
