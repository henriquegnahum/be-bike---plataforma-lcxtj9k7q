import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { CalendarDays, ArrowUpRight, ArrowDownLeft, Wrench, Clock, RefreshCcw } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { MOCK_EVENTS } from '@/lib/mock-data'

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const t = useTranslation()

  const selectedDateStr = date?.toISOString().split('T')[0] || ''
  const dayEvents = MOCK_EVENTS.filter((e) => e.date === selectedDateStr)

  const getEventIcon = (type: string) => {
    if (type === 'withdrawal') return <ArrowUpRight className="w-4 h-4 text-emerald-500" />
    if (type === 'return') return <ArrowDownLeft className="w-4 h-4 text-orange-500" />
    return <Wrench className="w-4 h-4 text-blue-500" />
  }

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t('calendar')}
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Sincronização global de agenda (Retiradas, Devoluções, Manutenções).
          </p>
        </div>
        <Button variant="outline" className="gap-2 shadow-sm">
          <RefreshCcw className="w-4 h-4" /> Sync G-Calendar
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="glass-card md:col-span-1 h-fit shadow-sm">
          <CardContent className="p-4 flex justify-center">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-2xl w-full flex justify-center"
            />
          </CardContent>
        </Card>

        <Card className="glass-card md:col-span-2 shadow-sm">
          <CardHeader className="border-b border-border/50 bg-muted/10 pb-4">
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" /> {t('events_for')}{' '}
              {date?.toLocaleDateString()}
            </CardTitle>
            <CardDescription>Eventos operacionais vinculados às entidades mestras.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {dayEvents.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-2xl bg-muted/5">
                <CalendarDays className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className="font-medium tracking-wide">Sem eventos programados para esta data.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {dayEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="flex items-center justify-between p-4 border rounded-2xl hover:bg-muted/30 transition-colors bg-background/50 shadow-sm cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-background shadow-sm border ${
                          ev.type === 'withdrawal'
                            ? 'border-emerald-200 bg-emerald-50/50'
                            : ev.type === 'return'
                              ? 'border-orange-200 bg-orange-50/50'
                              : 'border-blue-200 bg-blue-50/50'
                        }`}
                      >
                        {getEventIcon(ev.type)}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {ev.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {ev.time}
                          </span>
                          <Badge
                            variant="secondary"
                            className="font-mono text-[10px] uppercase shadow-sm"
                          >
                            {ev.linkedTo}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
