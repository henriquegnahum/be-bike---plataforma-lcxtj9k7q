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
  { name: 'Google', value: 30000, fill: 'hsl(var(--chart-2, 210 100% 50%))' },
  { name: 'Orgânico', value: 15000, fill: 'hsl(var(--chart-3, 30 100% 50%))' },
]

const velocityData = [
  { stage: 'Leads -> Contato', days: 2 },
  { stage: 'Contato -> Análise', days: 4 },
  { stage: 'Análise -> Negociação', days: 3 },
  { stage: 'Negociação -> Assinado', days: 1 },
]

export default function SalesDashboard() {
  const kpis = [
    { label: 'Novos Clientes', value: '342', icon: Users },
    { label: 'Receita Prevista', value: 'R$ 125.4k', icon: DollarSign },
    { label: 'Conversão', value: '25%', icon: Target },
    { label: 'Velocidade', value: '10 Dias', icon: Activity },
  ]

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Comercial</h1>
        <p className="text-muted-foreground mt-1">Métricas de conversão, receita e funil.</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, i) => (
          <Card key={i}>
            <CardContent className="p-6 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{kpi.label}</p>
                <p className="text-2xl font-bold">{kpi.value}</p>
              </div>
              <div className="p-2 bg-muted rounded-md">
                <kpi.icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Evolução da Conversão (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ rate: { label: 'Conversão', color: 'hsl(var(--primary))' } }}
              className="h-[300px] w-full"
            >
              <LineChart
                data={conversionData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" strokeWidth={3} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Receita por Origem</CardTitle>
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
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Velocidade de Vendas (Dias)</CardTitle>
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
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis
                  dataKey="stage"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  width={150}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="days" fill="var(--color-days)" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
