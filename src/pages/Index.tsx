import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Bike, HeadphonesIcon, TrendingUp, DollarSign, Lightbulb } from 'lucide-react'
import { MOCK_BIKES, MOCK_DELIVERERS, MOCK_CLOUD_HUMANS_TICKETS } from '@/lib/mock-data'
import { Link } from 'react-router-dom'

export default function Index() {
  const activeBikes = MOCK_BIKES.filter((b) => b.status === 'Ativa').length
  const activeDeliverers = MOCK_DELIVERERS.filter((d) => d.status === 'Active').length

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-secondary">Modular Dashboard Hub</h1>
        <p className="text-muted-foreground">
          Centralized command center unifying Monday, HubSpot, AsaaS, and internal data.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-primary shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Fleet</CardTitle>
            <Bike className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {activeBikes} / {MOCK_BIKES.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Bikes currently on the streets</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-secondary shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deliverers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {activeDeliverers} / {MOCK_DELIVERERS.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Partners with active contracts</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Conversion</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">+12%</div>
            <p className="text-xs text-muted-foreground mt-1">New onboardings this month</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-emerald-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MRR (AsaaS)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">R$ 142k</div>
            <p className="text-xs text-muted-foreground mt-1">Estimated recurring revenue</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border shadow-sm">
          <CardHeader className="bg-muted/30 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="w-5 h-5 text-primary" />
                <CardTitle>Cloud Humans Service</CardTitle>
              </div>
            </div>
            <CardDescription>Recent support tickets integrated via API</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {MOCK_CLOUD_HUMANS_TICKETS.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 flex items-center justify-between hover:bg-muted/10 transition-colors"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none text-secondary">
                      {ticket.subject}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {ticket.user} • {ticket.time}
                    </p>
                  </div>
                  <Badge variant={ticket.status === 'Open' ? 'destructive' : 'secondary'}>
                    {ticket.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              <CardTitle className="text-primary">Suggestions for Implementation</CardTitle>
            </div>
            <CardDescription>AI-driven insights for operational improvements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm border">
              <strong>Predictive Churn:</strong> 15 couriers are showing signs of inactivity on
              99Food. Suggest initiating a retention workflow via WhatsApp.
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm border">
              <strong>Maintenance Alert:</strong> 8 bikes will hit the 2500km threshold this week.
              Generate O.S. automatically to prevent downtime.
            </div>
            <Button className="w-full" variant="outline">
              View All AI Insights
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
