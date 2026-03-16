import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { User, FileText, MessageSquare, AlertTriangle, UploadCloud, DollarSign } from 'lucide-react'
import { MOCK_CRM_LEADS } from '@/lib/mock-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function LeadDetail() {
  const { id } = useParams()
  const { toast } = useToast()
  const lead = MOCK_CRM_LEADS.find((l) => l.id === id) || MOCK_CRM_LEADS[0]

  const handleExportBO = () => {
    const s =
      `B.O. Be Bike - CPF: ${lead.cpf || 'N/A'} | Nome: ${lead.name} | RG: ${lead.rg || 'N/A'} | End: ${lead.address || 'N/A'} | Status: ${lead.contractStatus || 'N/A'} | Contato: ${lead.phone}`.padEnd(
        1400,
        '.',
      )
    navigator.clipboard.writeText(s.substring(0, 1400))
    toast({
      title: 'Resumo B.O. Copiado (1400c)',
      description: 'Cole no portal da delegacia. Redirecionando...',
    })
    window.open(
      'https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/pages/comunicar-ocorrencia',
      '_blank',
    )
  }

  const fields = [
    { l: 'CPF / RG', v: `${lead.cpf || '-'} / ${lead.rg || '-'}` },
    { l: 'Nasc. / Naturalidade', v: `${lead.dob || '-'} / ${lead.naturalidade || '-'}` },
    { l: 'Email', v: lead.email || '-' },
    { l: 'Filiação', v: lead.parentsNames || '-' },
    { l: 'Endereço', v: `${lead.address || '-'} - CEP: ${lead.cep || '-'}` },
    { l: 'Bikes Anteriores', v: lead.bikesHistory?.join(', ') || 'Nenhuma' },
  ]

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-secondary flex items-center gap-3">
              {lead.name} <Badge variant="outline">{lead.stage}</Badge>
            </h1>
            <p className="text-muted-foreground font-mono text-sm mt-1">
              {lead.phone} • {lead.type}
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" asChild>
            <a href={`https://wa.me/55${lead.phone}`} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
            </a>
          </Button>
          <Button variant="destructive" onClick={handleExportBO}>
            <AlertTriangle className="w-4 h-4 mr-2" /> Gerar B.O.
          </Button>
        </div>
      </div>

      <Tabs defaultValue="master" className="w-full">
        <TabsList className="grid w-full max-w-2xl grid-cols-4">
          <TabsTrigger value="master">360º Master</TabsTrigger>
          <TabsTrigger value="contract">Contratos</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="files">Arquivos</TabsTrigger>
        </TabsList>

        <TabsContent value="master" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dados Cadastrais</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-y-4">
              {fields.map((f) => (
                <div key={f.l}>
                  <p className="text-xs text-muted-foreground uppercase">{f.l}</p>
                  <p className="font-medium text-sm text-secondary">{f.v}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-slate-50 border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Status Financeiro e Contrato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant={lead.contractStatus === 'Vigente' ? 'default' : 'secondary'}>
                    {lead.contractStatus}
                  </Badge>
                  <Badge
                    variant={lead.financialStatus === 'Adimplente' ? 'outline' : 'destructive'}
                    className={
                      lead.financialStatus === 'Adimplente'
                        ? 'border-emerald-500 text-emerald-600'
                        : ''
                    }
                  >
                    {lead.financialStatus}
                  </Badge>
                </div>
                <p className="text-sm">
                  Score (99Food): <strong>{lead.performanceScore || 'N/A'}</strong> | Duração:{' '}
                  {lead.contractDuration || 'N/A'}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contract" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>ZapSign Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Termo de Locação Padrão</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-primary text-primary">
                  Assinado
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Planilha 99Food</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center bg-muted/10 cursor-pointer hover:bg-muted/30 transition-colors">
                <UploadCloud className="w-10 h-10 text-muted-foreground mb-4" />
                <h3 className="font-semibold">Arraste a planilha CSV/Excel</h3>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="mt-6">
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground py-10 border-2 border-dashed rounded-lg m-6">
              Drop de apólices e CNH aqui.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
