import { AlertTriangle, TrendingDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function TopAlerts() {
  return (
    <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-2 flex items-center justify-between z-10 backdrop-blur-md">
      <div className="flex items-center gap-4 overflow-hidden w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs shrink-0 whitespace-nowrap">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          Alertas Críticos Ativos:
        </div>

        <div className="flex flex-1 overflow-x-auto gap-4 no-scrollbar items-center animate-in fade-in slide-in-from-right-4 duration-1000">
          <Badge
            variant="outline"
            className="border-red-200 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 shadow-sm gap-1 whitespace-nowrap"
          >
            <AlertTriangle className="w-3 h-3" /> Revisão Vencida: 8 Bikes (Hub SP-Sul)
          </Badge>
          <Badge
            variant="outline"
            className="border-orange-200 bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 shadow-sm gap-1 whitespace-nowrap"
          >
            <TrendingDown className="w-3 h-3" /> Estoque Crítico: Pneu Aro 26 (Hub RJ-Centro)
          </Badge>
          <Badge
            variant="outline"
            className="border-blue-200 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 shadow-sm gap-1 whitespace-nowrap"
          >
            <AlertTriangle className="w-3 h-3" /> SLA Atrasado: 3 Tíquetes N1
          </Badge>
        </div>
      </div>
    </div>
  )
}
