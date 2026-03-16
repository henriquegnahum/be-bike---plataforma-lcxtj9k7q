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
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-secondary text-white flex items-center justify-center">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-secondary">{deliverer.name}</h1>
            <p className="text-muted-foreground font-mono text-sm mt-1">CPF: {deliverer.cpf}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a
              href={`https://wa.me/55${deliverer.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-4 h-4 mr-2" /> {t('whatsapp')}
            </a>
          </Button>
          <Button variant="destructive" onClick={handleExportBO}>
            <AlertTriangle className="w-4 h-4 mr-2" /> {t('generate_bo')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-border shadow-sm">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-4 h-4" /> {t('profile_snapshot')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t('joined_date')}</p>
              <p className="font-medium flex items-center gap-2">
                <CalendarDays className="w-4 h-4" /> {deliverer.joinDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{t('financial_standing')}</p>
              <Badge
                variant={deliverer.contractStatus === 'Adimplente' ? 'outline' : 'destructive'}
                className="w-full justify-center"
              >
                {t(deliverer.contractStatus as any)}
              </Badge>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">{t('current_asset')}</p>
              {deliverer.activeBike ? (
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <Bike className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-mono font-bold text-sm">{deliverer.activeBike}</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm italic text-muted-foreground">{t('no_bike_assigned')}</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-sm h-full">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="w-4 h-4" /> {t('logs')}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {MOCK_DELIVERER_LOGS.map((log) => (
                <div key={log.id} className="flex gap-4">
                  <div className="pb-6 w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-[10px] uppercase">
                        {t(log.type as any)}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{log.date}</span>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed bg-muted/30 p-3 rounded-lg border mt-2">
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
