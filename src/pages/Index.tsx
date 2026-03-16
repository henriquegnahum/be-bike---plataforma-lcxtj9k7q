import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Bike, HeadphonesIcon, TrendingUp, DollarSign, Lightbulb } from 'lucide-react'
import { MOCK_BIKES, MOCK_DELIVERERS, MOCK_CLOUD_HUMANS_TICKETS } from '@/lib/mock-data'
import { useTranslation } from '@/lib/i18n'

export default function Index() {
  const activeBikes = MOCK_BIKES.filter((b) => b.status === 'Ativa').length
  const activeDeliverers = MOCK_DELIVERERS.filter((d) => d.status === 'Active').length
  const t = useTranslation()

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-secondary">{t('dashboard')}</h1>
        <p className="text-muted-foreground">
          Centralized command center unifying CRM, Operations, and Financial data.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-primary shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Fleet</CardTitle>
            <Bike className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activeBikes} / {MOCK_BIKES.length}
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-secondary shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Deliverers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {activeDeliverers} / {MOCK_DELIVERERS.length}
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Conversion</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12%</div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-emerald-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">MRR (AsaaS)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 142k</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader className="bg-muted/30 border-b">
            <CardTitle className="flex items-center gap-2">
              <HeadphonesIcon className="w-5 h-5 text-primary" /> Cloud Humans Service
            </CardTitle>
            <CardDescription>Recent support tickets integrated via API</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {MOCK_CLOUD_HUMANS_TICKETS.map((ticket) => (
                <div key={ticket.id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium leading-tight">{ticket.subject}</p>
                    <p className="text-sm text-muted-foreground mt-1">{ticket.user}</p>
                  </div>
                  <Badge variant={ticket.status === 'Open' ? 'destructive' : 'secondary'}>
                    {ticket.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Lightbulb className="w-5 h-5" /> AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm border">
              <strong>Predictive Churn:</strong> 15 couriers are showing signs of inactivity.
              Suggesting retention workflow.
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm border">
              <strong>Maintenance Alert:</strong> 8 bikes will hit the 2500km threshold this week.
              Generate O.S. automatically.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
