import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, User, ArrowRight, ArrowLeft } from 'lucide-react'
import { MOCK_CRM_LEADS } from '@/lib/mock-data'

const STAGES = ['Leads', 'Contacted', 'Analysis', 'Negotiation', 'Signed/Onboarding']

export default function CRM() {
  const [leads, setLeads] = useState(MOCK_CRM_LEADS)

  const moveLead = (id: string, direction: 'next' | 'prev') => {
    setLeads((current) =>
      current.map((lead) => {
        if (lead.id !== id) return lead
        const currentIndex = STAGES.indexOf(lead.stage)
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
        if (newIndex >= 0 && newIndex < STAGES.length) {
          return { ...lead, stage: STAGES[newIndex] }
        }
        return lead
      }),
    )
  }

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary">CRM & Sales Funnel</h1>
          <p className="text-muted-foreground">Manage deliverer acquisition pipeline.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Add New Lead
        </Button>
      </div>

      <div className="flex-1 flex gap-4 overflow-x-auto pb-4 items-start">
        {STAGES.map((stage, stageIndex) => (
          <div
            key={stage}
            className="w-80 flex-shrink-0 bg-muted/40 rounded-xl p-4 border border-border flex flex-col max-h-full"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-secondary">{stage}</h3>
              <Badge variant="secondary" className="bg-white">
                {leads.filter((l) => l.stage === stage).length}
              </Badge>
            </div>

            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
              {leads
                .filter((l) => l.stage === stage)
                .map((lead) => (
                  <Card
                    key={lead.id}
                    className="cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <CardHeader className="p-3 pb-2">
                      <CardTitle className="text-sm flex items-center gap-2 text-secondary">
                        <User className="w-4 h-4 text-primary" />
                        {lead.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Phone className="w-3 h-3" />
                        {lead.phone}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                          {lead.source}
                        </Badge>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            disabled={stageIndex === 0}
                            onClick={() => moveLead(lead.id, 'prev')}
                          >
                            <ArrowLeft className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            disabled={stageIndex === STAGES.length - 1}
                            onClick={() => moveLead(lead.id, 'next')}
                          >
                            <ArrowRight className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {leads.filter((l) => l.stage === stage).length === 0 && (
                <div className="text-center text-sm text-muted-foreground py-8 border-2 border-dashed rounded-lg">
                  No leads in this stage
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
