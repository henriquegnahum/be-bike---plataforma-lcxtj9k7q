import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Phone,
  User,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Download,
  Upload,
  TrendingUp,
  Clock,
  DollarSign,
} from 'lucide-react'
import { MOCK_CRM_LEADS } from '@/lib/mock-data'
import { Link } from 'react-router-dom'
import { useTranslation } from '@/lib/i18n'
import { useToast } from '@/hooks/use-toast'

const STAGES = ['Leads', 'Contacted', 'Analysis', 'Negotiation', 'Signed/Onboarding'] as const

export default function CRM() {
  const [leads, setLeads] = useState(MOCK_CRM_LEADS)
  const t = useTranslation()
  const { toast } = useToast()

  const moveLead = (e: React.MouseEvent, id: string, direction: 'next' | 'prev') => {
    e.preventDefault()
    e.stopPropagation()
    setLeads((current) =>
      current.map((lead) => {
        if (lead.id !== id) return lead
        const currentIndex = STAGES.indexOf(lead.stage as any)
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
        if (newIndex >= 0 && newIndex < STAGES.length) return { ...lead, stage: STAGES[newIndex] }
        return lead
      }),
    )
  }

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col animate-in fade-in duration-700">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t('crm_title')}
          </h1>
          <p className="text-muted-foreground mt-1 font-medium">{t('crm_desc')}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shadow-sm">
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button className="shadow-sm">
            <Upload className="w-4 h-4 mr-2" /> {t('import')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2 shrink-0">
        <Card className="glass-card">
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t('conversion_rate')}
              </p>
              <p className="text-3xl font-extrabold text-foreground">12.5%</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-2xl">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t('avg_ticket')}
              </p>
              <p className="text-3xl font-extrabold text-foreground">R$ 280,00</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-2xl">
              <DollarSign className="w-6 h-6 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {t('time_per_stage')}
              </p>
              <p className="text-3xl font-extrabold text-foreground">
                3.2{' '}
                <span className="text-lg text-muted-foreground font-medium">{t('duration')}</span>
              </p>
            </div>
            <div className="p-3 bg-orange-500/10 rounded-2xl">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 flex gap-5 overflow-x-auto pb-6 items-start no-scrollbar min-h-0">
        {STAGES.map((stage, stageIndex) => (
          <div
            key={stage}
            className="w-80 flex-shrink-0 glass-panel rounded-[2rem] p-4 border flex flex-col h-full shadow-sm"
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <div
                className="font-extrabold text-foreground/80 uppercase text-xs tracking-wider flex items-center gap-2"
                role="heading"
                aria-level={3}
              >
                {t(stage)}
                <Badge variant="secondary" className="shadow-sm text-[10px] py-0">
                  {leads.filter((l) => l.stage === stage).length}
                </Badge>
              </div>
            </div>
            <div className="space-y-3 overflow-y-auto flex-1 pr-1 pb-2 no-scrollbar">
              {leads
                .filter((l) => l.stage === stage)
                .map((lead) => (
                  <Link key={lead.id} to={`/crm/${lead.id}`}>
                    <Card className="glass-card cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group bg-background/50 border-border/60 rounded-2xl">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-[14px] flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                              <User className="w-3.5 h-3.5" />
                            </div>
                            {lead.name}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col gap-2 mb-3 mt-3">
                          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" /> {lead.phone}
                          </span>
                          {lead.type && (
                            <Badge
                              variant="outline"
                              className="w-fit text-[10px] bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border-blue-200/50 font-bold"
                            >
                              {t(lead.type as any)}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                            {lead.source}
                          </span>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-lg hover:bg-background shadow-sm border border-transparent hover:border-border/50"
                              disabled={stageIndex === 0}
                              onClick={(e) => moveLead(e, lead.id, 'prev')}
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-lg hover:bg-background shadow-sm border border-transparent hover:border-border/50"
                              disabled={stageIndex === STAGES.length - 1}
                              onClick={(e) => moveLead(e, lead.id, 'next')}
                            >
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              {leads.filter((l) => l.stage === stage).length === 0 && (
                <div className="text-center text-xs font-medium text-muted-foreground py-10 border-2 border-dashed border-border/50 rounded-2xl bg-background/20 backdrop-blur-sm">
                  {t('no_leads')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
