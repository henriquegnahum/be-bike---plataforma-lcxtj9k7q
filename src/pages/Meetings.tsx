import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Video,
  Calendar as CalendarIcon,
  Users,
  Clock,
  Plus,
  ExternalLink,
  History,
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function Meetings() {
  const { toast } = useToast()

  const handleInstantMeeting = () => {
    toast({ title: 'Reunião Iniciada', description: 'Abrindo sala virtual segura...' })
  }

  const pastMeetings = [
    { title: 'Alinhamento Operação RJ', date: 'Hoje, 09:00', duration: '45 min', participants: 4 },
    {
      title: 'Sync Semanal - Manutenção',
      date: 'Ontem, 16:30',
      duration: '60 min',
      participants: 8,
    },
    { title: 'Revisão de Metas Q3', date: '12 Out, 14:00', duration: '120 min', participants: 12 },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Reuniões Virtuais
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Central de comunicação por vídeo integrada ao Google Workspace.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glass-card bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20 group hover:shadow-lg transition-all">
          <CardContent className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 shadow-inner group-hover:scale-110 transition-transform">
              <Video className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Reunião Instantânea</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Inicie uma videochamada agora e compartilhe o link de acesso seguro com a equipe.
              </p>
            </div>
            <Button
              onClick={handleInstantMeeting}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-xl h-12"
            >
              <Plus className="w-4 h-4 mr-2" /> Iniciar Agora
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card bg-gradient-to-br from-primary/10 to-transparent border-primary/20 group hover:shadow-lg transition-all">
          <CardContent className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform">
              <CalendarIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Agendar Reunião</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Crie um evento no Google Calendar e anexe automaticamente um link do Meet.
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-primary/50 text-primary hover:bg-primary/10 shadow-sm rounded-xl h-12"
              asChild
            >
              <a href="https://calendar.google.com" target="_blank" rel="noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> Abrir Google Calendar
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader className="border-b border-border/50 bg-muted/10 pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <History className="w-5 h-5 text-primary" /> Histórico de Reuniões
          </CardTitle>
          <CardDescription>Visualização de sessões passadas e participantes.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {pastMeetings.map((m, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-border/60 rounded-2xl hover:bg-muted/30 transition-colors bg-background/50 shadow-sm backdrop-blur-sm gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-muted rounded-xl text-muted-foreground shrink-0 mt-0.5">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px]">{m.title}</h4>
                    <div className="flex items-center gap-4 mt-2 text-xs font-medium text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {m.date} ({m.duration})
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {m.participants} participantes
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto font-bold shadow-sm rounded-xl"
                >
                  Detalhes da Chamada
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
