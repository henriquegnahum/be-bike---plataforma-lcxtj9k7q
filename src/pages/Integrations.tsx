import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Calendar as CalendarIcon,
  Mail,
  HardDrive,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Integrations() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Google Workspace
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Integrações ativas e sincronização de dados do ecossistema Be Bike.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Calendar */}
        <Card className="glass-card group hover:border-blue-500/30 flex flex-col shadow-[0_8px_30px_rgba(59,130,246,0.05)]">
          <CardHeader className="border-b border-border/50 bg-blue-500/5 pb-4">
            <div className="flex justify-between items-start">
              <CardTitle className="flex items-center gap-2 text-lg text-blue-600 dark:text-blue-400">
                <CalendarIcon className="w-5 h-5" /> Google Calendar
              </CardTitle>
              <Badge
                variant="outline"
                className="border-emerald-200 text-emerald-600 bg-emerald-50 shadow-sm gap-1"
              >
                <CheckCircle2 className="w-3 h-3" /> Sincronizado
              </Badge>
            </div>
            <CardDescription className="font-medium mt-2">Próximos eventos hoje</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col">
            <div className="space-y-4 flex-1">
              <div className="p-3 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
                <p className="text-[13px] font-bold text-foreground">Reunião: Expansão Hubs RJ</p>
                <p className="text-xs font-medium text-muted-foreground mt-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> 14:00 - 15:00
                </p>
              </div>
              <div className="p-3 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-colors">
                <p className="text-[13px] font-bold text-foreground">Sync Diretoria Operações</p>
                <p className="text-xs font-medium text-muted-foreground mt-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> 16:30 - 17:30
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-6 shadow-sm group-hover:bg-blue-50/50 dark:group-hover:bg-blue-950/20 transition-colors"
            >
              Abrir Agenda <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Gmail */}
        <Card className="glass-card group hover:border-red-500/30 flex flex-col shadow-[0_8px_30px_rgba(239,68,68,0.05)]">
          <CardHeader className="border-b border-border/50 bg-red-500/5 pb-4">
            <div className="flex justify-between items-start">
              <CardTitle className="flex items-center gap-2 text-lg text-red-600 dark:text-red-400">
                <Mail className="w-5 h-5" /> Gmail
              </CardTitle>
              <Badge
                variant="outline"
                className="border-emerald-200 text-emerald-600 bg-emerald-50 shadow-sm gap-1"
              >
                <CheckCircle2 className="w-3 h-3" /> Sincronizado
              </Badge>
            </div>
            <CardDescription className="font-medium mt-2">
              Visão da Caixa de Entrada
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-background/50 border border-border/60 shadow-sm">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-foreground">12</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Não Lidos
                </p>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-sm" />
                <div>
                  <p className="text-[13px] font-bold text-foreground line-clamp-1">
                    Novo Contrato ZapSign Assinado
                  </p>
                  <p className="text-[11px] font-medium text-muted-foreground mt-0.5">
                    De: ZapSign (Automático)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-sm" />
                <div>
                  <p className="text-[13px] font-bold text-foreground line-clamp-1">
                    Alerta de Estoque Crítico
                  </p>
                  <p className="text-[11px] font-medium text-muted-foreground mt-0.5">
                    De: Be Bike System
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-6 shadow-sm group-hover:bg-red-50/50 dark:group-hover:bg-red-950/20 transition-colors"
            >
              Ir para o Gmail <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Drive */}
        <Card className="glass-card group hover:border-yellow-500/30 flex flex-col shadow-[0_8px_30px_rgba(234,179,8,0.05)]">
          <CardHeader className="border-b border-border/50 bg-yellow-500/5 pb-4">
            <div className="flex justify-between items-start">
              <CardTitle className="flex items-center gap-2 text-lg text-yellow-600 dark:text-yellow-500">
                <HardDrive className="w-5 h-5" /> Google Drive
              </CardTitle>
              <Badge
                variant="outline"
                className="border-emerald-200 text-emerald-600 bg-emerald-50 shadow-sm gap-1"
              >
                <CheckCircle2 className="w-3 h-3" /> Sincronizado
              </Badge>
            </div>
            <CardDescription className="font-medium mt-2">Documentos Recentes</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div className="flex items-center justify-between p-3 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm shadow-sm hover:border-yellow-500/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <p className="text-[13px] font-bold text-foreground">
                    Planilha_Controle_Hubs.xlsx
                  </p>
                </div>
                <ArrowRight className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm shadow-sm hover:border-yellow-500/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-indigo-500" />
                  <p className="text-[13px] font-bold text-foreground">Apresentacao_Board_Q2.pdf</p>
                </div>
                <ArrowRight className="w-3 h-3 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm shadow-sm hover:border-yellow-500/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <p className="text-[13px] font-bold text-foreground">
                    Relatorio_Manutencao_V2.csv
                  </p>
                </div>
                <ArrowRight className="w-3 h-3 text-muted-foreground" />
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-6 shadow-sm group-hover:bg-yellow-50/50 dark:group-hover:bg-yellow-950/20 transition-colors"
            >
              Explorar Arquivos <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
