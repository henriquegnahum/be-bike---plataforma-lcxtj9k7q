import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, Check, AlignLeft, Ticket } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { pendingApprovals } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/lib/i18n'

const ONBOARDING_STEPS = [
  { id: 1, title: 'Validação de CPF', desc: 'Consulta Receita e Serasa.' },
  { id: 2, title: 'Dados Pessoais', desc: 'Preenchimento cadastral.' },
  { id: 3, title: 'Validação de Docs', desc: 'Análise de CNH e residência.' },
  { id: 4, title: 'Criação Master Data', desc: 'Sincronização no repositório unificado.' },
  { id: 5, title: 'Geração de Contrato', desc: 'Envio ZapSign automático.' },
  { id: 6, title: 'Ativação Assinatura', desc: 'Gateway de Pagamento.' },
  { id: 7, title: 'Liberação de Ativo', desc: 'Vínculo final CPF <> Chassi.' },
]

export default function Tasks() {
  const [currentStep, setCurrentStep] = useState(1)
  const [approvalsList, setApprovalsList] = useState(pendingApprovals)
  const { toast } = useToast()
  const t = useTranslation()

  const handleValidateStep = (stepId: number) => {
    toast({
      title: t('step_completed'),
      description: `${t(ONBOARDING_STEPS[stepId - 1].title as any)} ${t('step_completed_desc')}`,
    })
    setCurrentStep(stepId + 1)
  }

  const handleApprove = (id: string) => {
    setApprovalsList((prev) => prev.filter((a) => a.id !== id))
    toast({ title: t('approved'), description: t('approved_log') })
  }

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('tasks_title')}
        </h1>
        <p className="text-muted-foreground mt-2 font-medium">{t('tasks_desc')}</p>
      </div>

      <Tabs defaultValue="workflows" className="w-full">
        <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-3 h-auto glass-card p-1">
          <TabsTrigger value="workflows" className="py-2.5 gap-2 rounded-xl text-sm">
            {t('workflows')}
          </TabsTrigger>
          <TabsTrigger value="tickets" className="py-2.5 gap-2 rounded-xl text-sm">
            <Ticket className="w-4 h-4" /> {t('tickets')}
          </TabsTrigger>
          <TabsTrigger value="gantt" className="py-2.5 gap-2 rounded-xl text-sm">
            <AlignLeft className="w-4 h-4" /> {t('gantt')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="workflows" className="mt-8 space-y-8">
          <Card className="glass-card border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle>{t('cascade_workflow')}</CardTitle>
              <CardDescription>{t('cascade_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-0 pt-6">
              {ONBOARDING_STEPS.map((step, index) => {
                const isValidated = currentStep > step.id
                const isActive = currentStep === step.id
                const isLocked = currentStep < step.id

                return (
                  <div key={step.id} className="relative">
                    {index < ONBOARDING_STEPS.length - 1 && (
                      <div
                        className={`absolute top-10 left-6 w-[2px] h-full -ml-px ${isValidated ? 'bg-primary' : 'bg-muted'}`}
                      />
                    )}
                    <div
                      className={`relative p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 transition-all ${isActive ? 'bg-primary/5 border border-primary/30 shadow-md' : 'border border-transparent'} ${isLocked ? 'opacity-50 grayscale pointer-events-none' : ''}`}
                    >
                      <div className="flex items-center gap-4 z-10 bg-background/50 backdrop-blur-sm rounded-full pr-4 p-1">
                        {isValidated ? (
                          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-sm">
                            <Check className="w-5 h-5" />
                          </div>
                        ) : isActive ? (
                          <div className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0 bg-background shadow-[0_0_15px_rgba(28,209,92,0.2)]">
                            <span className="font-extrabold">{step.id}</span>
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0 font-bold">
                            {step.id}
                          </div>
                        )}
                        <div>
                          <h4
                            className={`font-bold tracking-tight text-[15px] ${isActive ? 'text-primary' : 'text-foreground'}`}
                          >
                            {t(step.title as any)}
                          </h4>
                          <p className="text-sm text-muted-foreground font-medium">
                            {t(step.desc as any)}
                          </p>
                        </div>
                      </div>
                      {!isLocked && !isValidated && (
                        <Button
                          onClick={() => handleValidateStep(step.id)}
                          size="sm"
                          className="ml-[3.25rem] sm:ml-0 font-bold tracking-wider uppercase text-xs"
                        >
                          {t('validate_step')}
                        </Button>
                      )}
                      {isValidated && (
                        <Badge
                          variant="outline"
                          className="ml-[3.25rem] sm:ml-0 text-primary border-primary gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3" /> {t('validated')}
                        </Badge>
                      )}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="bg-muted/10 border-b">
              <CardTitle className="flex items-center gap-2">
                {t('approvals_inbox')}
                {approvalsList.length > 0 && (
                  <Badge variant="destructive" className="ml-2 px-2 shadow-sm">
                    {approvalsList.length}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>{t('approvals_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {approvalsList.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-2xl bg-muted/5">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-3 opacity-20" />
                  <p className="font-medium tracking-wide">{t('no_approvals')}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {approvalsList.map((app) => (
                    <div
                      key={app.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border rounded-2xl hover:bg-muted/30 transition-colors bg-background/50 shadow-sm"
                    >
                      <div className="flex items-start gap-4 mb-4 sm:mb-0">
                        <Clock className="text-orange-500 w-5 h-5 mt-1 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="secondary" className="font-mono text-xs font-bold">
                              {app.id}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-[10px] uppercase font-bold text-muted-foreground"
                            >
                              {app.team}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-[15px]">
                            {app.type}: {app.desc}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1 font-medium">
                            {t('value')}: <strong className="text-foreground">{app.value}</strong> |{' '}
                            {t('requester')}: {app.requester}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <Button
                          variant="outline"
                          className="flex-1 sm:flex-none border-red-200 text-red-600 hover:bg-red-50"
                        >
                          {t('reject')}
                        </Button>
                        <Button
                          onClick={() => handleApprove(app.id)}
                          className="flex-1 sm:flex-none bg-primary"
                        >
                          {t('approve')}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="mt-8">
          <Card className="glass-card">
            <CardHeader className="bg-muted/10 border-b">
              <CardTitle>{t('global_tickets')}</CardTitle>
              <CardDescription>{t('global_tickets_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: 'TK-101',
                    title: 'Review Courier Documents',
                    module: 'Operations',
                    assignee: 'João (Hub)',
                    due: 'Today',
                  },
                ].map((tk) => (
                  <div
                    key={tk.id}
                    className="flex justify-between items-center p-4 border rounded-2xl hover:bg-muted/30 transition-colors bg-background/50"
                  >
                    <div>
                      <div className="flex gap-2 mb-1">
                        <Badge variant="secondary" className="font-mono text-xs">
                          {tk.id}
                        </Badge>
                      </div>
                      <h4 className="font-bold">{tk.title}</h4>
                    </div>
                    <Button variant="outline" size="sm">
                      {t('view')}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gantt" className="mt-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>{t('gantt_chart')}</CardTitle>
              <CardDescription>{t('gantt_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] border-2 border-dashed rounded-2xl flex items-center justify-center bg-muted/10 text-muted-foreground flex-col gap-3">
                <AlignLeft className="w-12 h-12 opacity-20" />
                <p className="font-medium tracking-wide">{t('gantt_placeholder')}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
