import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Circle, Clock, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { pendingApprovals } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'

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

  const handleValidateStep = (stepId: number) => {
    toast({
      title: 'Etapa Concluída',
      description: `${ONBOARDING_STEPS[stepId - 1].title} finalizada com sucesso.`,
    })
    setCurrentStep(stepId + 1)
  }

  const handleApprove = (id: string) => {
    setApprovalsList((prev) => prev.filter((a) => a.id !== id))
    toast({ title: 'Aprovado', description: `Solicitação ${id} aprovada e registrada em log.` })
  }

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Workflows & Tarefas</h1>
        <p className="text-muted-foreground mt-1">
          Motor de tarefas em cascata e alçadas de aprovação
        </p>
      </div>

      <Tabs defaultValue="cascade" className="w-full">
        <TabsList>
          <TabsTrigger value="cascade">Workflow em Cascata</TabsTrigger>
          <TabsTrigger value="approvals" className="gap-2">
            Alçadas de Aprovação
            {approvalsList.length > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 min-w-5">
                {approvalsList.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cascade" className="mt-6">
          <Card className="shadow-subtle border-primary/20">
            <CardHeader>
              <CardTitle>Onboarding: Novo Entregador</CardTitle>
              <CardDescription>O fluxo exige validação sequencial obrigatória.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-0">
              {ONBOARDING_STEPS.map((step, index) => {
                const isValidated = currentStep > step.id
                const isActive = currentStep === step.id
                const isLocked = currentStep < step.id

                return (
                  <div key={step.id} className="relative">
                    {index < ONBOARDING_STEPS.length - 1 && (
                      <div
                        className={`absolute top-10 left-6 w-0.5 h-full -ml-px ${isValidated ? 'bg-primary' : 'bg-muted'}`}
                      />
                    )}

                    <div
                      className={`relative p-4 rounded-xl flex items-center justify-between mb-4 transition-all
                      ${isActive ? 'bg-primary/5 border border-primary/30 shadow-sm' : 'border border-transparent'}
                      ${isLocked ? 'opacity-50 grayscale pointer-events-none' : ''}
                    `}
                    >
                      <div className="flex items-center gap-4 z-10 bg-background/50 rounded-full pr-4">
                        {isValidated ? (
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5" />
                          </div>
                        ) : isActive ? (
                          <div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0 bg-background">
                            <span className="font-bold text-sm">{step.id}</span>
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                            <span className="font-medium text-sm">{step.id}</span>
                          </div>
                        )}
                        <div>
                          <h4 className={`font-semibold ${isActive ? 'text-primary' : ''}`}>
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>

                      {!isLocked && !isValidated && (
                        <Button onClick={() => handleValidateStep(step.id)} size="sm">
                          Validar Etapa
                        </Button>
                      )}
                      {isValidated && (
                        <Badge variant="outline" className="text-primary border-primary">
                          Validado
                        </Badge>
                      )}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approvals" className="mt-6">
          <Card className="shadow-subtle">
            <CardHeader>
              <CardTitle>Caixa de Aprovações</CardTitle>
              <CardDescription>
                Ações críticas que requerem dupla validação de times específicos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {approvalsList.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-3 opacity-20" />
                  <p>Nenhuma aprovação pendente.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {approvalsList.map((app) => (
                    <div
                      key={app.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-xl hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-4 sm:mb-0">
                        <Clock className="text-amber-500 w-5 h-5 mt-0.5" />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="secondary" className="font-mono text-xs">
                              {app.id}
                            </Badge>
                            <Badge variant="outline">{app.team}</Badge>
                          </div>
                          <h4 className="font-semibold text-sm">
                            {app.type}: {app.desc}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Valor: <strong className="text-foreground">{app.value}</strong> |
                            Solicitante: {app.requester}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Button variant="outline" className="flex-1 sm:flex-none">
                          Rejeitar
                        </Button>
                        <Button
                          onClick={() => handleApprove(app.id)}
                          className="flex-1 sm:flex-none"
                        >
                          Aprovar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
