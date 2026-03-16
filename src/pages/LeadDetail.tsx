import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/lib/i18n'
import { User, MessageSquare, AlertTriangle } from 'lucide-react'
import { MOCK_CRM_LEADS } from '@/lib/mock-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function LeadDetail() {
  const { id } = useParams()
  const t = useTranslation()
  const lead = MOCK_CRM_LEADS.find((l) => l.id === id) || MOCK_CRM_LEADS[0]

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card border rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {lead.name} <Badge variant="outline">{t(lead.stage as any)}</Badge>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {lead.phone} • {t(lead.type as any)}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <MessageSquare className="w-4 h-4 mr-2" /> {t('whatsapp')}
          </Button>
          <Button variant="destructive">
            <AlertTriangle className="w-4 h-4 mr-2" /> B.O.
          </Button>
        </div>
      </div>

      <Tabs defaultValue="master">
        <TabsList className="mb-4">
          <TabsTrigger value="master">{t('master_360')}</TabsTrigger>
          <TabsTrigger value="contract">{t('contracts')}</TabsTrigger>
        </TabsList>

        <TabsContent value="master" className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('reg_data')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground">{t('cpf_rg')}</p>
                <p className="font-medium">
                  {lead.cpf || '-'} / {lead.rg || '-'}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t('email')}</p>
                <p className="font-medium">{lead.email || '-'}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t('fin_contract_status')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">{t(lead.contractStatus as any)}</Badge>
                <Badge variant={lead.financialStatus === 'Adimplente' ? 'outline' : 'destructive'}>
                  {t(lead.financialStatus as any)}
                </Badge>
              </div>
              <p className="text-sm">
                Score Preditivo: <strong>{lead.performanceScore || 'N/A'}</strong>
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contract">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Integração ZapSign - Contratos aqui.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
