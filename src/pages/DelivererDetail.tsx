import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  User,
  FileText,
  MessageSquare,
  Bike,
  CalendarDays,
  AlertTriangle,
} from 'lucide-react'
import { MOCK_DELIVERERS, MOCK_DELIVERER_LOGS } from '@/lib/mock-data'

export default function DelivererDetail() {
  const { id } = useParams()
  const deliverer = MOCK_DELIVERERS.find((d) => d.id === id) || MOCK_DELIVERERS[0]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-primary text-white border-primary'
      case 'Onboarding':
        return 'bg-blue-500 text-white border-blue-500'
      case 'In Debt':
        return 'bg-destructive text-white border-destructive'
      default:
        return 'bg-secondary text-white border-secondary'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-4">
        <Button variant="outline" size="icon" asChild>
          <Link to="/deliverers">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-secondary">{deliverer.name}</h1>
            <Badge variant="outline" className={getStatusColor(deliverer.status)}>
              {deliverer.status}
            </Badge>
          </div>
          <p className="text-muted-foreground flex items-center gap-2 mt-1 font-mono text-sm">
            CPF: {deliverer.cpf}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6 md:col-span-1">
          <Card className="border-border shadow-sm">
            <CardHeader className="bg-muted/20 border-b border-border pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Profile Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Joined Date</p>
                <p className="font-medium flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-secondary" /> {deliverer.joinDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Performance</p>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="font-bold text-lg">{deliverer.trips}</span> trips
                  </div>
                  <div>
                    <span className="font-bold text-lg text-primary">{deliverer.rating}</span> avg
                    rating
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Current Asset</p>
                {deliverer.activeBike ? (
                  <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg border border-border">
                    <Bike className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Chassi ID</p>
                      <p className="font-mono font-medium text-sm">{deliverer.activeBike}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm italic text-muted-foreground">
                    No bike currently assigned.
                  </p>
                )}
              </div>
              {deliverer.status === 'In Debt' && (
                <div className="mt-4 p-3 bg-destructive/10 border border-destructive text-destructive rounded-lg flex items-start gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 mt-0.5" />
                  <p>User currently has pending payments. Contract suspended.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card className="border-border shadow-sm h-full">
            <CardHeader className="bg-muted/20 border-b border-border pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" /> Journey & Communication Logs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {MOCK_DELIVERER_LOGS.map((log) => (
                  <div key={log.id} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-secondary border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                        {log.type === 'Communication' ? (
                          <MessageSquare className="w-4 h-4" />
                        ) : log.type === 'Fleet' ? (
                          <Bike className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                      </div>
                      <div className="w-px h-full bg-border mt-2 group-last:hidden"></div>
                    </div>
                    <div className="pb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                          {log.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{log.date}</span>
                      </div>
                      <p className="text-sm text-secondary leading-relaxed bg-muted/30 p-3 rounded-lg border border-border mt-2">
                        {log.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
