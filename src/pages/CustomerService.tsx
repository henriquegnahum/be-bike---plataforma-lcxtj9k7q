import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Headset, Clock, CheckCircle2 } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export default function CustomerService() {
  const t = useTranslation()

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('customer_service')}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Gestão de chamados e suporte aos entregadores.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Headset className="w-5 h-5" /> Chamados Abertos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">45</div>
            <p className="text-sm text-muted-foreground mt-2">Tíquetes aguardando atendimento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-500">
              <Clock className="w-5 h-5" /> Tempo de Resposta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">4m 12s</div>
            <p className="text-sm text-muted-foreground mt-2">SLA médio de primeira resposta</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-500">
              <CheckCircle2 className="w-5 h-5" /> CSAT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">92%</div>
            <p className="text-sm text-muted-foreground mt-2">Índice de satisfação do cliente</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
