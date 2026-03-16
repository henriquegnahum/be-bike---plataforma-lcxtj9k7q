import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Target, TrendingUp, Users, DollarSign, Activity } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  LineChart,
  Line,
  PieChart,
  Pie,
} from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const conversionData = [
  { month: 'Jan', rate: 12 },
  { month: 'Feb', rate: 15 },
  { month: 'Mar', rate: 18 },
  { month: 'Apr', rate: 14 },
  { month: 'May', rate: 22 },
  { month: 'Jun', rate: 25 },
]

const sourceData = [
  { name: 'Meta Ads', value: 45000, fill: 'hsl(var(--primary))' },
  { name: 'Google Search', value: 30000, fill: 'hsl(var(--chart-2, 210 100% 50%))' },
  { name: 'Organic/Referral', value: 15000, fill: 'hsl(var(--chart-3, 30 100% 50%))' },
]

const velocityData = [
  { stage: 'Leads -> Contato', days: 2 },
  { stage: 'Contato -> Análise', days: 4 },
  { stage: 'Análise -> Negociação', days: 3 },
  { stage: 'Negociação -> Assinado', days: 1 },
]

export default function SalesDashboard() {
  const kpis = [
    { label: 'Novos Clientes (Mês)', value: '342', icon: Users, color: 'text-blue-500' },
    { label: 'Receita Prevista', value: 'R$ 125.4k', icon: DollarSign, color: 'text-emerald-500' },
    { label: 'Taxa de Conversão', value: '25%', icon: Target, color: 'text-orange-500' },
    { label: 'Velocidade Média', value: '10 Dias', icon: Activity, color: 'text-primary' },
  ]

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Dashboard de Vendas
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Métricas de conversão, receita e funil de aquisição.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, i) => (
          <Card key={i} className="glass-card group hover:-translate-y-1 transition-transform">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {kpi.label}
                </p>
                <p className="text-3xl font-extrabold">{kpi.value}</p>
              </div>
              <div className={`p-3 bg-background rounded-2xl shadow-sm border ${kpi.color}`}>
                <kpi.icon className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="glass-card premium-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Evolução da Conversão (%)
            </CardTitle>
            <CardDescription>
              Taxa de conversão de Leads para Assinado ao longo dos meses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ rate: { label: 'Conversão %', color: 'hsl(var(--primary))' } }}
              className="h-[300px] w-full"
            >
              <LineChart
                data={conversionData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="hsl(var(--border))"
                  opacity={0.4}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={12}
                  className="text-xs font-medium"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={12}
                  className="text-xs font-medium"
                />
                <ChartTooltip content={<ChartTooltipContent className="glass-card" />} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="var(--color-rate)"
                  strokeWidth={4}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass-card premium-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" /> Receita por Origem (R$)
            </CardTitle>
            <CardDescription>
              Distribuição de receita prevista por canal de aquisição.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ value: { label: 'Receita', color: 'hsl(var(--primary))' } }}
              className="h-[300px] w-full"
            >
              <PieChart>
                <Pie
                  data={sourceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent className="glass-card" />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="glass-card lg:col-span-2 premium-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" /> Velocidade de Vendas (Dias por Etapa)
            </CardTitle>
            <CardDescription>Tempo médio que um lead passa em cada fase do funil.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ days: { label: 'Dias', color: 'hsl(var(--primary))' } }}
              className="h-[250px] w-full"
            >
              <BarChart
                data={velocityData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                layout="vertical"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="hsl(var(--border))"
                  opacity={0.4}
                />
                <XAxis
                  type="number"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={12}
                  className="text-xs font-medium"
                />
                <YAxis
                  dataKey="stage"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={12}
                  width={150}
                  className="text-xs font-medium"
                />
                <ChartTooltip content={<ChartTooltipContent className="glass-card" />} />
                <Bar dataKey="days" fill="var(--color-days)" radius={[0, 4, 4, 0]} barSize={24}>
                  {velocityData.map((e, i) => (
                    <Cell key={i} className="hover:opacity-80" />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
