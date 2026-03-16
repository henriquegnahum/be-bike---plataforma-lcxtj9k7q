import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  User,
  FileText,
  MessageSquare,
  Bike,
  CalendarDays,
  AlertTriangle,
  DownloadCloud,
} from 'lucide-react'
import { MOCK_DELIVERERS, MOCK_DELIVERER_LOGS } from '@/lib/mock-data'
import { useToast } from '@/hooks/use-toast'

export default function DelivererDetail() {
  const { id } = useParams()
  const deliverer = MOCK_DELIVERERS.find((d) => d.id === id) || MOCK_DELIVERERS[0]
  const { toast } = useToast()

  const handleExportBO = () => {
    const summary =
      `B.O. Report\nName: ${deliverer.name}\nCPF: ${deliverer.cpf}\nStatus: ${deliverer.status}\nBike: ${deliverer.activeBike || 'None'}\n---`.substring(
        0,
        1400,
      )
    navigator.clipboard.writeText(summary)
    toast({
      title: 'Exportado para B.O.',
      description: 'Dados copiados para área de transferência.',
    })
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-secondary text-white flex items-center justify-center">
            <User className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-secondary">{deliverer.name}</h1>
              <Badge variant={deliverer.status === 'Active' ? 'default' : 'secondary'}>
                {deliverer.status}
              </Badge>
            </div>
            <p className="text-muted-foreground flex items-center gap-2 mt-1 font-mono text-sm">
              CPF: {deliverer.cpf}
            </p>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="gap-2" asChild>
            <a
              href={`https://wa.me/55${deliverer.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp CH
            </a>
          </Button>
          <Button variant="destructive" onClick={handleExportBO}>
            <AlertTriangle className="w-4 h-4 mr-2" /> Gerar B.O.
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6 lg:col-span-1">
          <Card className="border-border shadow-sm">
            <CardHeader className="bg-muted/10 border-b border-border pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Profile Snapshot
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Joined Date</p>
                <p className="font-medium flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" /> {deliverer.joinDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Financial Standing</p>
                <Badge
                  variant={deliverer.contractStatus === 'Adimplente' ? 'outline' : 'destructive'}
                  className="w-full justify-center py-1.5"
                >
                  {deliverer.contractStatus}
                </Badge>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Current Asset</p>
                {deliverer.activeBike ? (
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <Bike className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Chassi ID</p>
                      <p className="font-mono font-bold text-sm">{deliverer.activeBike}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm italic text-muted-foreground">
                    No bike currently assigned.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border shadow-sm h-full">
            <CardHeader className="bg-muted/10 border-b border-border pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" /> Communication & History Logs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {MOCK_DELIVERER_LOGS.map((log) => (
                  <div key={log.id} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-secondary border border-border">
                        {log.type === 'Communication' ? (
                          <MessageSquare className="w-4 h-4" />
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
                      <p className="text-sm text-secondary leading-relaxed bg-muted/30 p-3 rounded-lg border mt-2">
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
