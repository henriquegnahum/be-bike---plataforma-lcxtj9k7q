import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Circle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function Tasks() {
  const [step1Valid, setStep1Valid] = useState(false)
  const [step2Valid, setStep2Valid] = useState(false)
  const { toast } = useToast()

  const handleValidateStep1 = () => {
    toast({ title: 'CPF Validado', description: 'O CPF não possui restrições.' })
    setStep1Valid(true)
  }

  const handleValidateStep2 = () => {
    toast({ title: 'Contrato Assinado', description: 'Integração com ZapSign concluída.' })
    setStep2Valid(true)
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gerenciador de Tarefas</h1>
        <p className="text-muted-foreground mt-1">Validação em Cascata e Caixa de Aprovações</p>
      </div>

      <Card className="shadow-subtle border-primary/20">
        <CardHeader>
          <CardTitle>Onboarding: Novo Entregador</CardTitle>
          <CardDescription>O fluxo exige validação sequencial para evitar fraudes.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div
            className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${step1Valid ? 'bg-primary/5 border-primary/30' : 'bg-background'}`}
          >
            <div className="flex items-center gap-4">
              {step1Valid ? (
                <CheckCircle2 className="text-primary w-6 h-6" />
              ) : (
                <Circle className="text-muted-foreground w-6 h-6" />
              )}
              <div>
                <h4 className="font-semibold">Passo 1: Verificação de CPF e Background Check</h4>
                <p className="text-sm text-muted-foreground">
                  Consulta automatizada na Receita Federal e Bureau de Crédito.
                </p>
              </div>
            </div>
            <Button
              onClick={handleValidateStep1}
              disabled={step1Valid}
              variant={step1Valid ? 'secondary' : 'default'}
            >
              {step1Valid ? 'Validado' : 'Executar Verificação'}
            </Button>
          </div>

          <div
            className={`relative p-4 rounded-xl border flex items-center justify-between transition-colors ${!step1Valid ? 'opacity-50 pointer-events-none' : ''} ${step2Valid ? 'bg-primary/5 border-primary/30' : 'bg-background'}`}
          >
            {!step1Valid && (
              <div className="absolute -top-3 left-10 w-0.5 h-6 bg-muted-foreground" />
            )}
            <div className="flex items-center gap-4">
              {step2Valid ? (
                <CheckCircle2 className="text-primary w-6 h-6" />
              ) : (
                <Circle className="text-muted-foreground w-6 h-6" />
              )}
              <div>
                <h4 className="font-semibold">Passo 2: Assinatura de Contrato (ZapSign)</h4>
                <p className="text-sm text-muted-foreground">
                  Envio de termos de responsabilidade da Bike.
                </p>
              </div>
            </div>
            <Button
              onClick={handleValidateStep2}
              disabled={!step1Valid || step2Valid}
              variant={step2Valid ? 'secondary' : 'default'}
            >
              {step2Valid ? 'Assinado' : 'Enviar Contrato'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
