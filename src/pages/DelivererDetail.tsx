import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { User, FileText, MessageSquare, Bike, CalendarDays, AlertTriangle } from 'lucide-react'
import { MOCK_DELIVERERS, MOCK_DELIVERER_LOGS } from '@/lib/mock-data'
import { useToast } from '@/hooks/use-toast'
import { useTranslation } from '@/lib/i18n'

export default function DelivererDetail() {
  const { id } = useParams()
  const deliverer = MOCK_DELIVERERS.find((d) => d.id === id) || MOCK_DELIVERERS[0]
  const { toast } = useToast()
  const t = useTranslation()

  const handleExportBO = () => {
    const s = t('bo_summary_deliverer', {
      name: deliverer.name,
      cpf: deliverer.cpf,
      status: t(deliverer.status as any),
      bike: deliverer.activeBike || t('none'),
    }).padEnd(1400, '.')

    navigator.clipboard.writeText(s.substring(0, 1400))
    toast({
      title: t('bo_copied_title'),
      description: t('bo_copied_desc'),
    })
    window.open(
      'https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia',
      '_blank',
    )
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-card p-6 border-primary/20 shadow-[0_8px_30px_rgba(28,209,92,0.05)]">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-inner">
            <User className="h-8 w-8" />
          </div>
          <div>
            <div
              className="text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-3"
              role="heading"
              aria-level={1}
            >
              {deliverer.name}
              <Badge
                variant={deliverer.status === 'Active' ? 'default' : 'outline'}
                className="shadow-sm ml-2"
              >
                {t(deliverer.status as any)}
              </Badge>
            </div>
            <p className="text-muted-foreground font-mono text-sm mt-1 font-medium">
              CPF: {deliverer.cpf}
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="shadow-sm hover:shadow-md" asChild>
            <a
              href={`https://wa.me/55${deliverer.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-emerald-500" /> {t('whatsapp')}
            </a>
          </Button>
          <Button
            variant="destructive"
            className="shadow-sm hover:shadow-md"
            onClick={handleExportBO}
          >
            <AlertTriangle className="w-4 h-4 mr-2" /> {t('generate_bo')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card shadow-sm">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-4 h-4 text-primary" /> {t('profile_snapshot')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-wider">
                {t('joined_date')}
              </p>
              <p className="font-semibold text-[15px] flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-muted-foreground" /> {deliverer.joinDate}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase font-bold tracking-wider">
                {t('financial_standing')}
              </p>
              <Badge
                variant={deliverer.contractStatus === 'Adimplente' ? 'outline' : 'destructive'}
                className={`w-full justify-center py-1.5 shadow-sm text-sm ${deliverer.contractStatus === 'Adimplente' ? 'border-emerald-500 text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20' : ''}`}
              >
                {t(deliverer.contractStatus as any)}
              </Badge>
            </div>
            <div className="pt-4 border-t border-border/60">
              <p className="text-xs text-muted-foreground mb-3 uppercase font-bold tracking-wider">
                {t('current_asset')}
              </p>
              {deliverer.activeBike ? (
                <div className="flex items-center gap-3 p-4 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Bike className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-sm group-hover:text-primary transition-colors">
                      {deliverer.activeBike}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      Clique para ver detalhes
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 border-2 border-dashed border-border/60 rounded-2xl bg-muted/10 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    {t('no_bike_assigned')}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card lg:col-span-2 shadow-sm h-full">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" /> {t('logs')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {MOCK_DELIVERER_LOGS.map((log, i) => (
                <div key={log.id} className="relative pl-6 pb-2">
                  {i < MOCK_DELIVERER_LOGS.length - 1 && (
                    <div className="absolute top-6 left-[11px] w-px h-[calc(100%+8px)] bg-border/80" />
                  )}
                  <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="ml-2 w-full">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-[10px] uppercase shadow-sm">
                        {t(log.type as any)}
                      </Badge>
                      <span className="text-xs font-mono font-medium text-muted-foreground">
                        {log.date}
                      </span>
                    </div>
                    <p className="text-[14px] font-medium text-foreground leading-relaxed bg-background/50 backdrop-blur-sm p-4 rounded-2xl border border-border/60 shadow-sm">
                      {log.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
