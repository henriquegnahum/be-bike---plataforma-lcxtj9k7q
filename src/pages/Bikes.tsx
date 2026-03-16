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
import { Bike as BikeIcon, Plus, Download, Upload } from 'lucide-react'
import { MOCK_BIKES } from '@/lib/mock-data'
import { useToast } from '@/hooks/use-toast'
import { useTranslation } from '@/lib/i18n'

export default function Bikes() {
  const { toast } = useToast()
  const t = useTranslation()

  const handleAction = (type: string) =>
    toast({ title: t('action_executed'), description: `${t('system_processing')} ${type}.` })

  const getRevisionBadge = (mileage: number, lastRev: number) => {
    const diff = mileage - lastRev
    if (diff >= 2500)
      return (
        <span
          className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"
          title={t('Revisar Agora')}
        ></span>
      )
    if (diff >= 2200)
      return <span className="flex h-2 w-2 rounded-full bg-orange-500" title={t('Atenção')}></span>
    return null
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary">{t('fleet_title')}</h1>
          <p className="text-muted-foreground">{t('fleet_desc')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => handleAction('Export CSV')} size="sm">
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button variant="outline" onClick={() => handleAction('Export XML')} size="sm">
            <Download className="w-4 h-4 mr-2" /> XML
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleAction('Bulk Import')}>
            <Upload className="w-4 h-4 mr-2" /> {t('bulk_import')}
          </Button>
          <Button className="bg-primary text-white">
            <Plus className="w-4 h-4 mr-2" /> {t('new_bike')}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BikeIcon className="w-5 h-5 text-primary" /> {t('active_fleet_inventory')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
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
                <TableRow key={bike.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono font-medium text-xs">{bike.chassi}</TableCell>
                  <TableCell>
                    {bike.model}{' '}
                    <span className="text-muted-foreground text-xs block">{bike.project}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={bike.status === 'Ativa' ? 'default' : 'outline'}>
                      {t(bike.status as any)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{bike.mileage}</span>
                      {getRevisionBadge(bike.mileage, bike.lastRevisionKm)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {bike.deliverer || (
                      <span className="text-muted-foreground italic">{t('unassigned')}</span>
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
