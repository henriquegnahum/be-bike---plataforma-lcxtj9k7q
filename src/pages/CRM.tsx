import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
          <p className="text-muted-foreground mt-1">{t('crm_desc')}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button>
            <Upload className="w-4 h-4 mr-2" /> {t('import')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
        <Card className="glass-card">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{t('conversion_rate')}</p>
              <p className="text-2xl font-bold">12.5%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-primary opacity-50" />
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{t('avg_ticket')}</p>
              <p className="text-2xl font-bold">R$ 280,00</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-500 opacity-50" />
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{t('time_per_stage')}</p>
              <p className="text-2xl font-bold">3.2 {t('duration')}</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500 opacity-50" />
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 flex gap-4 overflow-x-auto pb-4 items-start">
        {STAGES.map((stage, stageIndex) => (
          <div
            key={stage}
            className="w-80 flex-shrink-0 glass-panel rounded-[2rem] p-4 border flex flex-col max-h-full"
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-foreground/80 uppercase text-sm tracking-wider">
                {t(stage)}
              </h3>
              <Badge variant="secondary" className="shadow-sm">
                {leads.filter((l) => l.stage === stage).length}
              </Badge>
            </div>
            <div className="space-y-3 overflow-y-auto flex-1 pr-1 pb-2">
              {leads
                .filter((l) => l.stage === stage)
                .map((lead) => (
                  <Link key={lead.id} to={`/crm/${lead.id}`}>
                    <Card className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group bg-background/80">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-sm flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" /> {lead.name}
                          </span>
                          <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col gap-2 mb-3">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {lead.phone}
                          </span>
                          {lead.type && (
                            <Badge
                              variant="outline"
                              className="w-fit text-[10px] bg-blue-50/50 text-blue-600 border-blue-200"
                            >
                              {t(lead.type as any)}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-3 pt-3 border-t">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                            {lead.source}
                          </span>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              disabled={stageIndex === 0}
                              onClick={(e) => moveLead(e, lead.id, 'prev')}
                            >
                              <ArrowLeft className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              disabled={stageIndex === STAGES.length - 1}
                              onClick={(e) => moveLead(e, lead.id, 'next')}
                            >
                              <ArrowRight className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              {leads.filter((l) => l.stage === stage).length === 0 && (
                <div className="text-center text-xs text-muted-foreground py-8 border-2 border-dashed rounded-xl opacity-60">
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
