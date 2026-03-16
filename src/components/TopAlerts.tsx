import { AlertTriangle, TrendingDown, Clock, ShieldAlert, Bike, Activity } from 'lucide-react'

export function TopAlerts() {
  const alerts = [
    { icon: Bike, text: 'Bikes paradas há mais de 5 dias: 12 unidades', color: 'text-amber-500' },
    {
      icon: AlertTriangle,
      text: 'Revisões críticas vencidas: 8 bikes no Hub SP-Sul',
      color: 'text-red-500',
    },
    {
      icon: TrendingDown,
      text: 'Hubs com estoque abaixo do mínimo: RJ-Centro',
      color: 'text-red-500',
    },
    { icon: ShieldAlert, text: 'Casos de risco em aberto: 3 ocorrências', color: 'text-amber-500' },
    { icon: Clock, text: 'SLA de atendimento acima do limite na fila N1', color: 'text-amber-500' },
    {
      icon: Activity,
      text: 'Incidentes relevantes de operação: Queda de conectividade',
      color: 'text-red-500',
    },
  ]

  // Quadruple the array for seamless infinite looping
  const items = [...alerts, ...alerts, ...alerts, ...alerts]

  return (
    <div className="bg-background/80 border-b border-border/50 flex items-center z-10 backdrop-blur-md overflow-hidden marquee-container h-10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee gap-8 items-center px-4 w-max">
        {items.map((alert, i) => {
          const Icon = alert.icon
          return (
            <div
              key={i}
              className={`flex items-center gap-2 text-[12px] uppercase tracking-wider font-extrabold whitespace-nowrap ${alert.color}`}
            >
              <Icon className="w-4 h-4" />
              {alert.text}
            </div>
          )
        })}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  )
}
