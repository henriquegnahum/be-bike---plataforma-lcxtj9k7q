import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useTranslation } from '@/lib/i18n'
import { User, FileText, MessageSquare, AlertTriangle, UploadCloud, DollarSign } from 'lucide-react'
import { MOCK_CRM_LEADS } from '@/lib/mock-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function LeadDetail() {
  const { id } = useParams()
  const { toast } = useToast()
  const t = useTranslation()
  const lead = MOCK_CRM_LEADS.find((l) => l.id === id) || MOCK_CRM_LEADS[0]

  const handleExportBO = () => {
    const s = t('bo_summary', {
      cpf: lead.cpf || 'N/A',
      name: lead.name,
      rg: lead.rg || 'N/A',
      address: lead.address || 'N/A',
      status: t(lead.contractStatus as any) || 'N/A',
      phone: lead.phone,
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

  const fields = [
    { l: t('cpf_rg'), v: `${lead.cpf || '-'} / ${lead.rg || '-'}` },
    { l: t('dob_nat'), v: `${lead.dob || '-'} / ${lead.naturalidade || '-'}` },
    { l: t('email'), v: lead.email || '-' },
    { l: t('parents'), v: lead.parentsNames || '-' },
    { l: t('address'), v: `${lead.address || '-'} - CEP: ${lead.cep || '-'}` },
    { l: t('previous_bikes'), v: lead.bikesHistory?.join(', ') || t('none') },
  ]

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 glass-card p-6 border-primary/20 shadow-[0_8px_30px_rgba(28,209,92,0.05)]">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner border border-primary/20">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
              {lead.name}{' '}
              <Badge variant="outline" className="shadow-sm">
                {t(lead.stage as any)}
              </Badge>
            </h1>
            <p className="text-muted-foreground font-mono text-sm mt-1 font-medium">
              {lead.phone} • {t(lead.type as any)}
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="shadow-sm hover:shadow-md" asChild>
            <a href={`https://wa.me/55${lead.phone}`} target="_blank" rel="noopener noreferrer">
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

      <Tabs defaultValue="master" className="w-full">
        <div className="glass-card p-2 w-fit mb-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-transparent h-auto p-0 gap-2">
            <TabsTrigger
              value="master"
              className="py-2.5 rounded-xl data-[state=active]:bg-background/80 data-[state=active]:shadow-sm"
            >
              {t('master_360')}
            </TabsTrigger>
            <TabsTrigger
              value="contract"
              className="py-2.5 rounded-xl data-[state=active]:bg-background/80 data-[state=active]:shadow-sm"
            >
              {t('contracts')}
            </TabsTrigger>
            <TabsTrigger
              value="performance"
              className="py-2.5 rounded-xl data-[state=active]:bg-background/80 data-[state=active]:shadow-sm"
            >
              {t('performance')}
            </TabsTrigger>
            <TabsTrigger
              value="files"
              className="py-2.5 rounded-xl data-[state=active]:bg-background/80 data-[state=active]:shadow-sm"
            >
              {t('files')}
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="master" className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader className="bg-muted/10 border-b pb-4">
              <CardTitle className="text-lg">{t('reg_data')}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-y-4 pt-6">
              {fields.map((f) => (
                <div key={f.l}>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                    {f.l}
                  </p>
                  <p className="font-medium text-[15px] text-foreground mt-0.5">{f.v}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass-card bg-slate-50/50 dark:bg-slate-900/30 border-slate-200/50 dark:border-slate-800/50">
              <CardHeader className="pb-4 border-b border-border/50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-500" /> {t('fin_contract_status')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2 mb-5">
                  <Badge
                    className="shadow-sm px-3 py-1 text-sm"
                    variant={lead.contractStatus === 'Vigente' ? 'default' : 'secondary'}
                  >
                    {t(lead.contractStatus as any)}
                  </Badge>
                  <Badge
                    variant={lead.financialStatus === 'Adimplente' ? 'outline' : 'destructive'}
                    className={`shadow-sm px-3 py-1 text-sm ${
                      lead.financialStatus === 'Adimplente'
                        ? 'border-emerald-500 text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20'
                        : ''
                    }`}
                  >
                    {t(lead.financialStatus as any)}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                      {t('score')} (99Food)
                    </p>
                    <p className="font-extrabold text-xl text-primary mt-1">
                      {lead.performanceScore || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                      {t('duration')}
                    </p>
                    <p className="font-semibold text-lg mt-1">{lead.contractDuration || 'N/A'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contract" className="mt-0">
          <Card className="glass-card">
            <CardHeader className="bg-muted/10 border-b pb-4">
              <CardTitle>{t('zapsign_integration')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between p-5 border rounded-2xl bg-background/50 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base">{t('standard_lease')}</p>
                    <p className="text-sm text-muted-foreground font-medium mt-0.5">
                      Assinado digitalmente via ZapSign
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="border-primary text-primary shadow-sm px-3 py-1 gap-1"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {t('signed')}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="mt-0">
          <Card className="glass-card">
            <CardHeader className="bg-muted/10 border-b pb-4">
              <CardTitle>{t('upload_sheet')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="border-2 border-dashed border-border/60 rounded-3xl p-12 flex flex-col items-center justify-center text-center bg-background/30 backdrop-blur-sm cursor-pointer hover:bg-muted/30 hover:border-primary/50 transition-all duration-300">
                <div className="p-4 bg-muted/50 rounded-full mb-4 shadow-sm">
                  <UploadCloud className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-bold text-lg">{t('drag_sheet')}</h3>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  Ou clique para selecionar arquivo CSV/XLSX
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="mt-0">
          <Card className="glass-card min-h-[300px] flex items-center justify-center">
            <CardContent className="pt-6 text-center text-muted-foreground w-full px-6">
              <div className="border-2 border-dashed border-border/60 rounded-3xl py-16 flex flex-col items-center justify-center bg-background/30 backdrop-blur-sm cursor-pointer hover:bg-muted/30 transition-all duration-300">
                <FileText className="w-12 h-12 opacity-20 mb-4" />
                <p className="font-medium">{t('drop_files')}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
