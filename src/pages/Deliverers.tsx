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
import { Users, Download, Upload } from 'lucide-react'
import { MOCK_DELIVERERS } from '@/lib/mock-data'
import { useToast } from '@/hooks/use-toast'
import { useTranslation } from '@/lib/i18n'

export default function Deliverers() {
  const { toast } = useToast()
  const t = useTranslation()

  const handleAction = (type: string) =>
    toast({ title: t('action_executed'), description: `${t('system_processing')} ${type}.` })

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary">
            {t('deliverer_title')}
          </h1>
          <p className="text-muted-foreground">{t('deliverer_desc')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => handleAction('Export CSV')}>
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleAction('Export XML')}>
            <Download className="w-4 h-4 mr-2" /> XML
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleAction('Bulk Import')}>
            <Upload className="w-4 h-4 mr-2" /> {t('import_clients')}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> {t('directory')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('name')}</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>{t('status')}</TableHead>
                <TableHead>{t('financial_standing')}</TableHead>
                <TableHead>{t('active_bike')}</TableHead>
                <TableHead className="text-right">{t('profile')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_DELIVERERS.map((deliverer) => (
                <TableRow key={deliverer.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{deliverer.name}</TableCell>
                  <TableCell className="font-mono text-xs">{deliverer.cpf}</TableCell>
                  <TableCell>
                    <Badge variant={deliverer.status === 'Active' ? 'default' : 'outline'}>
                      {t(deliverer.status as any)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        deliverer.contractStatus === 'Adimplente' ? 'outline' : 'destructive'
                      }
                      className={
                        deliverer.contractStatus === 'Adimplente'
                          ? 'text-emerald-600 border-emerald-500'
                          : ''
                      }
                    >
                      {t(deliverer.contractStatus as any)}
                    </Badge>
                  </TableCell>
                  <TableCell>{deliverer.activeBike || '-'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/deliverers/${deliverer.id}`}>{t('open_card')}</Link>
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
