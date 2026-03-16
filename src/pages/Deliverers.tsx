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
import { Users, Download, Upload, UserSearch } from 'lucide-react'
import { MOCK_DELIVERERS } from '@/lib/mock-data'
import { useToast } from '@/hooks/use-toast'
import { useTranslation } from '@/lib/i18n'

export default function Deliverers() {
  const { toast } = useToast()
  const t = useTranslation()

  const handleAction = (type: string) =>
    toast({ title: t('action_executed'), description: `${t('system_processing')} ${type}.` })

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {t('deliverer_title')}
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">{t('deliverer_desc')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="shadow-sm"
            onClick={() => handleAction('Export CSV')}
          >
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="shadow-sm"
            onClick={() => handleAction('Export XML')}
          >
            <Download className="w-4 h-4 mr-2" /> XML
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="shadow-sm"
            onClick={() => handleAction('Bulk Import')}
          >
            <Upload className="w-4 h-4 mr-2" /> {t('import_clients')}
          </Button>
        </div>
      </div>

      <Card className="glass-card overflow-hidden">
        <CardHeader className="bg-muted/10 border-b pb-4">
          <CardTitle className="flex items-center gap-2">
            <UserSearch className="w-5 h-5 text-primary" /> {t('directory')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-background/50 backdrop-blur-md">
              <TableRow>
                <TableHead className="pl-6">{t('name')}</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>{t('status')}</TableHead>
                <TableHead>{t('financial_standing')}</TableHead>
                <TableHead>{t('active_bike')}</TableHead>
                <TableHead className="text-right pr-6">{t('profile')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_DELIVERERS.map((deliverer) => (
                <TableRow key={deliverer.id} className="hover:bg-muted/40 transition-colors">
                  <TableCell className="font-bold pl-6 text-[15px]">{deliverer.name}</TableCell>
                  <TableCell className="font-mono text-xs font-medium text-muted-foreground">
                    {deliverer.cpf}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={deliverer.status === 'Active' ? 'default' : 'outline'}
                      className="shadow-sm"
                    >
                      {t(deliverer.status as any)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        deliverer.contractStatus === 'Adimplente' ? 'outline' : 'destructive'
                      }
                      className={`shadow-sm ${
                        deliverer.contractStatus === 'Adimplente'
                          ? 'text-emerald-600 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
                          : ''
                      }`}
                    >
                      {t(deliverer.contractStatus as any)}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs font-bold text-foreground/80">
                    {deliverer.activeBike || '-'}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-bold tracking-wide hover:text-primary transition-colors"
                      asChild
                    >
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
