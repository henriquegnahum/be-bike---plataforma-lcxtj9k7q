import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ShieldAlert, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/lib/i18n'

export default function Security() {
  const t = useTranslation()

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('sec_title')}</h1>
        <p className="text-muted-foreground mt-1">{t('sec_desc')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-red-200 shadow-sm">
          <CardHeader className="bg-red-50/50 pb-4">
            <CardTitle className="text-red-700 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> {t('high_risk_alerts')}
            </CardTitle>
            <CardDescription>{t('high_risk_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-mono font-bold">Chassi: 9C88X1...</p>
                  <p className="text-sm text-muted-foreground">{t('last_seen')}</p>
                </div>
                <Button variant="destructive" size="sm">
                  {t('trigger_recovery')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> {t('trackplus_integration')}
            </CardTitle>
            <CardDescription>{t('live_map_feed')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-100 rounded-lg h-48 flex items-center justify-center border text-muted-foreground">
              {t('map_placeholder')}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
