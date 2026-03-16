import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Megaphone, Target, Users } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export default function Marketing() {
  const t = useTranslation()

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('marketing')}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Estratégias de aquisição, retenção e branding.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Megaphone className="w-5 h-5" /> Campanhas Ativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">12</div>
            <p className="text-sm text-muted-foreground mt-2">
              Em execução no Meta Ads e Google Ads
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-500">
              <Target className="w-5 h-5" /> CPA Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">R$ 14,50</div>
            <p className="text-sm text-muted-foreground mt-2">
              Custo por Aquisição (Entregador ativado)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-500">
              <Users className="w-5 h-5" /> Leads Gerados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">1.240</div>
            <p className="text-sm text-muted-foreground mt-2">Volume captação últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
