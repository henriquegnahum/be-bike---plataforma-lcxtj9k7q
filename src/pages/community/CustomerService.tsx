import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Headset, Clock, CheckCircle2, MessageSquare, AlertCircle, RefreshCcw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function CustomerService() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Atendimento Integrado
          </h1>
          <p className="text-muted-foreground mt-2 text-lg font-medium">
            Gestão de chamados N1 e integrações Cloud Humans.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="border-emerald-500 text-emerald-600 bg-emerald-50/50 px-3 py-1 shadow-sm gap-1.5 h-9 items-center flex"
          >
            <RefreshCcw className="w-3.5 h-3.5" /> Sincronizado com o CRM
          </Badge>
        </div>
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
            <div className="text-xs font-medium text-muted-foreground mt-2 flex items-center gap-1.5">
              SLA médio de primeira resposta
            </div>
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
              Índice de satisfação do cliente
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card flex flex-col h-full border-blue-500/20">
          <CardHeader className="bg-blue-500/5 border-b border-blue-500/10 pb-4">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2 text-lg text-blue-600">
                <MessageSquare className="w-5 h-5" /> Integrações de Canais
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 flex-1">
            <div className="flex items-center justify-between p-4 border rounded-2xl bg-background/50 shadow-sm">
              <div>
                <h4 className="font-bold text-[15px]">Cloud Humans (Terceirizado)</h4>
                <p className="text-xs font-medium text-muted-foreground mt-1">
                  Gestão de N1 e transbordo automático
                </p>
              </div>
              <Badge variant="default" className="shadow-sm">
                Ativo
              </Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-2xl bg-background/50 shadow-sm">
              <div>
                <h4 className="font-bold text-[15px]">WhatsApp Business API</h4>
                <p className="text-xs font-medium text-muted-foreground mt-1">
                  Fluxo de mensagens e bots de triagem
                </p>
              </div>
              <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600 shadow-sm">
                Online
              </Badge>
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
