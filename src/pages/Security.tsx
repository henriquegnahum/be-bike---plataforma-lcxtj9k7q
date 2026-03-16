import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ShieldAlert, MapPin, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTranslation } from '@/lib/i18n'
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

export default function Security() {
  const t = useTranslation()
  const { toast } = useToast()
  const [docInput, setDocInput] = useState('')

  const handleGenerateBO = () => {
    if (!docInput)
      return toast({
        title: 'Atenção',
        description: 'Insira CPF ou Chassi.',
        variant: 'destructive',
      })
    const text = t('bo_summary', {
      cpf: docInput,
      name: 'João Silva',
      rg: '12.345.678-9',
      address: 'Rua X',
      status: 'Apropriação Indébita',
      phone: '1199999999',
    })
    navigator.clipboard.writeText(text)
    toast({ title: t('bo_copied_title'), description: t('bo_copied_desc') })
    setDocInput('')
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('sec_title')}
        </h1>
        <p className="text-muted-foreground mt-2 font-medium">{t('sec_desc')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="glass-card border-red-500/30 shadow-[0_8px_30px_rgba(239,68,68,0.1)]">
            <CardHeader className="bg-red-500/5 pb-4 border-b border-red-500/10">
              <CardTitle className="text-red-600 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" /> {t('high_risk_alerts')}
              </CardTitle>
              <CardDescription className="text-red-900/60 dark:text-red-400/80">
                {t('high_risk_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-red-500/10">
                <div className="p-5 flex items-center justify-between hover:bg-red-500/5 transition-colors">
                  <div>
                    <p className="font-mono font-bold text-lg text-foreground">Chassi: 9C88X1...</p>
                    <p className="text-sm font-medium text-muted-foreground mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-red-500" /> {t('last_seen')}
                    </p>
                  </div>
                  <Button variant="destructive" className="shadow-md">
                    {t('trigger_recovery')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="w-5 h-5" /> Gerador B.O. (Apropriação Indébita)
              </CardTitle>
              <CardDescription>
                Gera template formatado (1400 chars) para portal da SSP-SP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Input
                  value={docInput}
                  onChange={(e) => setDocInput(e.target.value)}
                  placeholder="Insira CPF ou Chassi Master"
                  className="flex-1 bg-background/50 border-border/60"
                />
                <Button onClick={handleGenerateBO} className="shrink-0">
                  <FileText className="w-4 h-4 mr-2" /> Gerar B.O.
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> {t('trackplus_integration')}
            </CardTitle>
            <CardDescription>{t('live_map_feed')}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 min-h-[400px]">
            <div className="w-full h-full bg-muted/20 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground gap-3">
              <MapPin className="w-12 h-12 opacity-20" />
              <p className="font-medium tracking-wide">{t('map_placeholder')}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
