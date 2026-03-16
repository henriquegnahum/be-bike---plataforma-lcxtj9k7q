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
    if (type === 'withdrawal') return <ArrowUpRight className="w-4 h-4" />
    if (type === 'return') return <ArrowDownLeft className="w-4 h-4" />
    return <Wrench className="w-4 h-4" />
  }

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('calendar')}</h1>
          <p className="text-muted-foreground mt-1">Sincronização global de agenda.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <RefreshCcw className="w-4 h-4" /> Sync Calendar
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1 h-fit">
          <CardContent className="p-4 flex justify-center">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full flex justify-center"
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5" /> {t('events_for')} {date?.toLocaleDateString()}
            </CardTitle>
            <CardDescription>Eventos operacionais vinculados às entidades mestras.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {dayEvents.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground border border-dashed rounded-lg">
                <CalendarDays className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p>Sem eventos programados para esta data.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {dayEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-muted">{getEventIcon(ev.type)}</div>
                      <div>
                        <h4 className="font-semibold">{ev.title}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {ev.time}
                          </span>
                          <Badge variant="secondary" className="text-[10px] uppercase">
                            {ev.linkedTo}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Detalhes
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
