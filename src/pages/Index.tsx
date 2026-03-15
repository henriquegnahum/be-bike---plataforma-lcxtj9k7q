import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, TrendingUp, Activity, DollarSign, Sparkles } from 'lucide-react'
import { kpis, financialData, fleetStatusData, alerts } from '@/lib/mock-data'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const chartConfig = {
  projetado: { label: 'Projetado', color: 'hsl(var(--muted-foreground))' },
  realizado: { label: 'Realizado', color: 'hsl(var(--primary))' },
  ativas: { label: 'Ativas', color: 'hsl(var(--primary))' },
  manutencao: { label: 'Manutenção', color: 'hsl(var(--chart-4))' },
  ociosas: { label: 'Ociosas', color: 'hsl(var(--chart-3))' },
}

export default function Index() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Command Center</h1>
          <p className="text-muted-foreground mt-1">Visão geral da operação Be Bike</p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          Última Sincronização: Há 2 min
        </Badge>
      </div>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="MRR (Mensal)"
          value={kpis.mrr}
          icon={DollarSign}
          trend="+12% vs last month"
        />
        <MetricCard title="Frota Ativa" value={kpis.activeFleet} icon={Activity} />
        <MetricCard title="Risco de Churn" value={kpis.churnRisk} icon={AlertTriangle} alert />
        <MetricCard title="Subsídio Pago" value={kpis.subsidyPaid} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts */}
        <Card className="lg:col-span-2 shadow-subtle hover:shadow-elevation transition-shadow">
          <CardHeader>
            <CardTitle>Crescimento Financeiro (Realizado vs Projetado)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={financialData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis
                    tickFormatter={(val) => `R$${val / 1000}k`}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="projetado"
                    stroke="var(--color-projetado)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <Line
                    type="monotone"
                    dataKey="realizado"
                    stroke="var(--color-realizado)"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Fleet Status */}
        <Card className="shadow-subtle hover:shadow-elevation transition-shadow">
          <CardHeader>
            <CardTitle>Status da Frota</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={fleetStatusData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {fleetStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Predictive Alerts */}
      <Card className="border-l-4 border-l-primary shadow-subtle">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Ações Urgentes (AI Predictive)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-3 rounded-lg bg-muted/50 border hover:bg-muted transition-colors"
              >
                <div
                  className={`mt-0.5 w-2 h-2 rounded-full ${alert.urgent ? 'bg-destructive animate-pulse-alert' : 'bg-primary'}`}
                />
                <div>
                  <h4 className="font-semibold text-sm">{alert.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{alert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MetricCard({ title, value, icon: Icon, trend, alert }: any) {
  return (
    <Card className="shadow-subtle hover:shadow-elevation transition-shadow">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div
            className={`p-2 rounded-lg ${alert ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}
          >
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className={`text-2xl font-bold ${alert ? 'text-destructive' : ''}`}>{value}</h3>
          {trend && <p className="text-xs text-muted-foreground mt-1">{trend}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
