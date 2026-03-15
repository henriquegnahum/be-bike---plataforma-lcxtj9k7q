import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Activity, Send } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useToast } from '@/hooks/use-toast'
import { deliverers } from '@/lib/mock-data'

export default function DelivererDetail() {
  const { id } = useParams()
  const { toast } = useToast()

  // Find deliverer or use default
  const deliverer = deliverers.find((d) => d.cpf.replace(/\D/g, '') === id) || deliverers[0]

  const handleComms = () => {
    toast({
      title: 'Notificação Enviada',
      description: 'SMS e WhatsApp disparados com sucesso via Hub de Comunicação.',
    })
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-10">
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/entregadores">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{deliverer.name}</h1>
          <p className="text-muted-foreground font-mono">CPF: {deliverer.cpf}</p>
        </div>
        <Badge className="ml-auto bg-primary text-primary-foreground">Ativo</Badge>
        <Button variant="outline" size="sm" onClick={handleComms}>
          <Send className="w-4 h-4 mr-2" /> Contatar
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-subtle">
          <CardHeader>
            <CardTitle>Módulo de Subsídio (Integração 99)</CardTitle>
            <CardDescription>Cálculo automático de elegibilidade mensal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <SubsidyMetric title="Tempo de Serviço" value={deliverer.subsidy.time} min={80} />
            <SubsidyMetric
              title="Taxa de Aceitação"
              value={deliverer.subsidy.acceptance}
              min={85}
            />
            <SubsidyMetric
              title="Taxa de Conclusão"
              value={deliverer.subsidy.completion}
              min={90}
            />

            <div className="pt-4 border-t mt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Status Atual</span>
                <Badge variant={deliverer.subsidy.completion >= 90 ? 'default' : 'destructive'}>
                  {deliverer.subsidy.completion >= 90 ? 'Elegível (Ouro)' : 'Risco de Perda'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
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
                    <h4 className="font-semibold text-sm">Bike Chassi #{deliverer.bike}</h4>
                    <p className="text-xs text-muted-foreground">Última Telemetria: Há 5 min</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/frota/${deliverer.bike}`}>
                    Ver Frota <ExternalLink className="ml-2 w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="shadow-subtle">
        <CardHeader>
          <CardTitle>Histórico de Vinculação (Master Data)</CardTitle>
          <CardDescription>Relacionamento entre CPF e Chassi ao longo do tempo</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Chassi (Bike)</TableHead>
                <TableHead>Data Início</TableHead>
                <TableHead>Data Fim</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">{deliverer.bike}</TableCell>
                <TableCell>15/01/2026</TableCell>
                <TableCell className="text-muted-foreground">Atual</TableCell>
                <TableCell>
                  <Badge>Ativo</Badge>
                </TableCell>
              </TableRow>
              <TableRow className="opacity-70">
                <TableCell className="font-mono">W-098</TableCell>
                <TableCell>01/10/2025</TableCell>
                <TableCell>14/01/2026</TableCell>
                <TableCell>
                  <Badge variant="secondary">Concluído</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function SubsidyMetric({ title, value, min }: { title: string; value: number; min: number }) {
  const isEligible = value >= min
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{title}</span>
        <span className={`text-sm font-bold ${isEligible ? 'text-primary' : 'text-destructive'}`}>
          {value}% <span className="text-xs text-muted-foreground font-normal">(Min: {min}%)</span>
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={`h-2 rounded-full ${isEligible ? 'bg-primary' : 'bg-destructive'}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
