import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Bike as BikeIcon,
  Plus,
  Download,
  Upload,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Wrench,
} from 'lucide-react'
import { MOCK_BIKES } from '@/lib/mock-data'
import { useTranslation } from '@/lib/i18n'

export default function Bikes() {
  const t = useTranslation()

  const getRevisionBadge = (mileage: number, lastRev: number, status: string) => {
    if (status === 'Oficina')
      return (
        <Badge variant="secondary" className="ml-2 gap-1 text-[10px]">
          <Wrench className="w-3 h-3" /> Em Revisão
        </Badge>
      )
    const diff = mileage - lastRev
    if (diff >= 2500)
      return (
        <Badge variant="destructive" className="ml-2 gap-1 text-[10px]">
          <AlertTriangle className="w-3 h-3" /> Revisar Agora
        </Badge>
      )
    if (diff >= 2200)
      return (
        <Badge
          variant="outline"
          className="ml-2 gap-1 text-[10px] text-orange-500 border-orange-500"
        >
          <AlertCircle className="w-3 h-3" /> Atenção
        </Badge>
      )
    return (
      <Badge
        variant="outline"
        className="ml-2 gap-1 text-[10px] text-emerald-500 border-emerald-500"
      >
        <CheckCircle2 className="w-3 h-3" /> OK
      </Badge>
    )
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t('fleet_title')}
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">{t('fleet_desc')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button variant="secondary" size="sm">
            <Upload className="w-4 h-4 mr-2" /> {t('bulk_import')}
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> {t('new_bike')}
          </Button>
        </div>
      </div>

      <Card className="glass-card overflow-hidden">
        <CardHeader className="bg-muted/10 border-b">
          <CardTitle className="flex items-center gap-2">
            <BikeIcon className="w-5 h-5 text-primary" /> {t('active_fleet_inventory')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-background/50 backdrop-blur-md">
              <TableRow>
                <TableHead>{t('chassi_id')}</TableHead>
                <TableHead>{t('model_project')}</TableHead>
                <TableHead>{t('status')}</TableHead>
                <TableHead>{t('telemetry_km')}</TableHead>
                <TableHead>{t('assigned_to')}</TableHead>
                <TableHead className="text-right">{t('action')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_BIKES.map((bike) => (
                <TableRow key={bike.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-mono font-bold text-xs">{bike.chassi}</TableCell>
                  <TableCell>
                    {bike.model}{' '}
                    <span className="text-muted-foreground text-xs block font-medium">
                      {bike.project}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        bike.status === 'Ativa'
                          ? 'default'
                          : bike.status === 'Oficina'
                            ? 'destructive'
                            : 'secondary'
                      }
                      className={
                        bike.status === 'Ativa'
                          ? 'bg-primary/20 text-primary border-primary/20 hover:bg-primary/30'
                          : ''
                      }
                    >
                      {t(bike.status as any)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-semibold tabular-nums">{bike.mileage}</span>
                      {getRevisionBadge(bike.mileage, bike.lastRevisionKm, bike.status)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {bike.deliverer || (
                      <span className="text-muted-foreground italic text-xs">
                        {t('unassigned')}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/bikes/${bike.id}`}>{t('view_details')}</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
