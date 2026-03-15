import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Bike, HeadphonesIcon, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react'
import { MOCK_BIKES, MOCK_DELIVERERS, MOCK_CLOUD_HUMANS_TICKETS } from '@/lib/mock-data'
import { Link } from 'react-router-dom'

export default function Index() {
  const activeBikes = MOCK_BIKES.filter((b) => b.status === 'In Use').length
  const activeDeliverers = MOCK_DELIVERERS.filter((d) => d.status === 'Active').length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-secondary">Central Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of Be Bike fleet operations and deliverer status.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-primary">
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
        <Card className="border-l-4 border-l-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deliverers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {activeDeliverers} / {MOCK_DELIVERERS.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Deliverers with active contracts</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Conversion</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">+12%</div>
            <p className="text-xs text-muted-foreground mt-1">New onboardings this month</p>
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
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Open CH Panel
                </a>
              </Button>
            </div>
            <CardDescription>Recent support tickets from deliverers</CardDescription>
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
                  <Badge
                    variant={
                      ticket.status === 'Open'
                        ? 'destructive'
                        : ticket.status === 'In Progress'
                          ? 'default'
                          : 'secondary'
                    }
                  >
                    {ticket.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="bg-muted/30 border-b border-border">
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Direct shortcuts to main modules</CardDescription>
          </CardHeader>
          <CardContent className="p-6 grid gap-4 grid-cols-2">
            <Button
              variant="outline"
              className="h-24 flex flex-col gap-2 border-dashed hover:border-primary hover:text-primary"
              asChild
            >
              <Link to="/crm" target="_blank">
                <Users className="w-6 h-6" />
                <span>New Lead</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col gap-2 border-dashed hover:border-primary hover:text-primary"
              asChild
            >
              <Link to="/bikes" target="_blank">
                <Bike className="w-6 h-6" />
                <span>Register Bike</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
