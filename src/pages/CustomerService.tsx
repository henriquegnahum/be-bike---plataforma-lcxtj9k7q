import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Headset, Clock, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'

export default function CustomerService() {
  const t = useTranslation()

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('customer_service')}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Gestão de chamados e suporte aos entregadores integrado via Cloud Humans.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass-card group hover:border-primary/50 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-2 text-primary text-sm uppercase tracking-wider font-bold">
              <Headset className="w-4 h-4" /> Chamados Abertos
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-5xl font-extrabold tabular-nums tracking-tight">45</div>
            <p className="text-xs font-medium text-muted-foreground mt-2">
              Tíquetes aguardando atendimento N1
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:border-amber-500/50 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-2 text-amber-500 text-sm uppercase tracking-wider font-bold">
              <Clock className="w-4 h-4" /> Tempo de Resposta
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-5xl font-extrabold tabular-nums tracking-tight">
              4<span className="text-3xl text-muted-foreground">m</span> 12
              <span className="text-3xl text-muted-foreground">s</span>
            </div>
            <p className="text-xs font-medium text-muted-foreground mt-2 flex items-center gap-1.5">
              SLA médio de primeira resposta{' '}
              <Badge
                variant="outline"
                className="text-[10px] py-0 border-amber-200 text-amber-600 bg-amber-50/50"
              >
                -15s vs ontem
              </Badge>
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:border-emerald-500/50 relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-2 text-emerald-500 text-sm uppercase tracking-wider font-bold">
              <CheckCircle2 className="w-4 h-4" /> CSAT Global
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-5xl font-extrabold tabular-nums tracking-tight text-emerald-600">
              92%
            </div>
            <p className="text-xs font-medium text-muted-foreground mt-2">
              Índice de satisfação do cliente (Últimos 7 dias)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <MessageSquare className="w-5 h-5 text-primary" /> Últimas Interações
            </CardTitle>
            <CardDescription>Feed em tempo real do atendimento</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground border-2 border-dashed border-border/60 rounded-2xl bg-background/30 backdrop-blur-sm">
              <MessageSquare className="w-10 h-10 mb-3 opacity-20" />
              <p className="font-medium">Nenhuma interação crítica no momento.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="w-5 h-5 text-orange-500" /> Alertas de SLA
            </CardTitle>
            <CardDescription>Tíquetes próximos ao vencimento do SLA</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground border-2 border-dashed border-border/60 rounded-2xl bg-background/30 backdrop-blur-sm">
              <CheckCircle2 className="w-10 h-10 mb-3 opacity-20 text-emerald-500" />
              <p className="font-medium text-emerald-600">Todos os SLAs estão sob controle.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
