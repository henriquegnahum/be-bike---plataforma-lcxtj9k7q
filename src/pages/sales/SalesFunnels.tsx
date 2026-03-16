import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus, ArrowRight, ArrowLeft } from 'lucide-react'
import { MOCK_CRM_LEADS } from '@/lib/mock-data'
import { Link } from 'react-router-dom'

const STAGES = ['Leads', 'Contacted', 'Analysis', 'Negotiation', 'Signed/Onboarding'] as const

export default function SalesFunnels() {
  const [leads, setLeads] = useState(MOCK_CRM_LEADS)
  const [funnel, setFunnel] = useState('b2c')

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
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col pb-6">
      <div className="flex justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Funis de Vendas</h1>
          <p className="text-muted-foreground mt-1">Gestão de pipeline comercial.</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={funnel} onValueChange={setFunnel}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Funil" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="b2c">B2C (Entregadores)</SelectItem>
              <SelectItem value="b2b">B2B (Frotas)</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Novo
          </Button>
        </div>
      </div>

      <div className="flex-1 flex gap-4 overflow-x-auto items-start min-h-0">
        {STAGES.map((stage, stageIndex) => (
          <div
            key={stage}
            className="w-80 flex-shrink-0 bg-muted/30 rounded-lg p-3 flex flex-col h-full border"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="font-semibold text-sm flex items-center gap-2">
                {stage}
                <Badge variant="secondary" className="text-[10px]">
                  {leads.filter((l) => l.stage === stage).length}
                </Badge>
              </div>
            </div>
            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
              {leads
                .filter((l) => l.stage === stage)
                .map((lead) => (
                  <Link key={lead.id} to={`/sales/customers/${lead.id}`}>
                    <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                      <CardContent className="p-3">
                        <p className="font-medium text-sm">{lead.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{lead.phone}</p>
                        <div className="flex items-center justify-between mt-3 pt-2 border-t">
                          <span className="text-[10px] text-muted-foreground">{lead.source}</span>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
