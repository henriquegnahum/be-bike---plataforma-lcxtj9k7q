import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Megaphone,
  Target,
  MousePointerClick,
  Eye,
  TrendingUp,
  DollarSign,
  Activity,
  AlertTriangle,
  AlertCircle,
} from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export default function Marketing() {
  const t = useTranslation()

  const kpis = [
    { label: 'impressions', value: '1.2M', icon: Eye, color: 'text-blue-500' },
    { label: 'clicks', value: '45.2k', icon: MousePointerClick, color: 'text-orange-500' },
    { label: 'ctr', value: '3.7%', icon: Activity, color: 'text-indigo-500' },
    { label: 'cpc', value: 'R$ 0,85', icon: DollarSign, color: 'text-pink-500' },
    { label: 'cpa', value: 'R$ 14,50', icon: Target, color: 'text-primary' },
    { label: 'roi', value: '312%', icon: TrendingUp, color: 'text-emerald-500' },
  ]

  const campaigns = [
    {
      name: 'Campanha SP Centro (Meta)',
      platform: 'meta_ads',
      spend: 'R$ 1.200',
      leads: 450,
      cpl: 'R$ 2,66',
      status: 'Ativa',
    },
    {
      name: 'Search Brand terms (Google)',
      platform: 'google_ads',
      spend: 'R$ 800',
      leads: 320,
      cpl: 'R$ 2,50',
      status: 'Ativa',
    },
    {
      name: 'Retargeting Inativos (Meta)',
      platform: 'meta_ads',
      spend: 'R$ 450',
      leads: 85,
      cpl: 'R$ 5,29',
      status: 'Pausada',
    },
  ]

  const fatigueAlerts = [
    { creative: 'Ad_Video_Delivery_SP', drop: '-15%', status: 'Saturação Alta' },
    { creative: 'Banner_Promo_FirstMonth', drop: '-8%', status: 'Atenção' },
  ]

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('marketing')}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Estratégias de aquisição, ROI e Branding Integrado.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-2 lg:grid-cols-6">
        {kpis.map((kpi, i) => (
          <Card key={i} className="glass-card group hover:-translate-y-1 transition-transform">
            <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
              <CardTitle className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                {t(kpi.label as any)}
              </CardTitle>
              <div className={`p-1.5 bg-background rounded-lg shadow-sm border ${kpi.color}`}>
                <kpi.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-2xl font-extrabold tabular-nums">{kpi.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="glass-card lg:col-span-2 overflow-hidden shadow-sm">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-primary" /> Performance de Campanhas (API)
            </CardTitle>
            <CardDescription>Sincronização diária com Meta Business e Google Ads</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-background/50">
                <TableRow>
                  <TableHead className="pl-6">Campanha</TableHead>
                  <TableHead>Plataforma</TableHead>
                  <TableHead>Investimento</TableHead>
                  <TableHead>Leads</TableHead>
                  <TableHead>CPL</TableHead>
                  <TableHead className="pr-6">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((c, i) => (
                  <TableRow key={i} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium pl-6">{c.name}</TableCell>
                    <TableCell className="text-muted-foreground text-xs font-bold uppercase">
                      {t(c.platform as any)}
                    </TableCell>
                    <TableCell className="font-mono">{c.spend}</TableCell>
                    <TableCell className="font-bold">{c.leads}</TableCell>
                    <TableCell className="text-primary font-bold">{c.cpl}</TableCell>
                    <TableCell className="pr-6">
                      <Badge
                        variant={c.status === 'Ativa' ? 'default' : 'secondary'}
                        className="shadow-sm"
                      >
                        {c.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="glass-card border-orange-500/30 shadow-[0_8px_30px_rgba(249,115,22,0.1)] h-fit">
          <CardHeader className="bg-orange-500/5 pb-4 border-b border-orange-500/10">
            <CardTitle className="text-orange-600 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> {t('fatigue_alerts')}
            </CardTitle>
            <CardDescription className="text-orange-900/60 dark:text-orange-400/80">
              Monitoramento preditivo de criativos
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {fatigueAlerts.map((alert, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-xl hover:bg-orange-500/5 transition-colors bg-background/50 shadow-sm"
              >
                <div>
                  <p className="font-semibold text-sm">{alert.creative}</p>
                  <p className="text-xs font-bold text-red-500 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 rotate-180" /> CTR Drop: {alert.drop}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-orange-200 text-orange-600 bg-orange-50 shadow-sm gap-1"
                >
                  <AlertCircle className="w-3 h-3" /> {alert.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
