import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/lib/i18n'

export function FinancialContractsTable() {
  const t = useTranslation()

  const contracts = [
    { id: 'CTR-001', type: 'fleet_segment_99food', value: 'R$ 45.000', status: 'Adimplente' },
    { id: 'CTR-002', type: 'fleet_segment_b2b', value: 'R$ 12.500', status: 'Adimplente' },
    { id: 'CTR-003', type: 'fleet_segment_other', value: 'R$ 8.200', status: 'Inadimplente' },
    { id: 'CTR-004', type: 'fleet_segment_own', value: 'R$ 22.000', status: 'Adimplente' },
    {
      id: 'CTR-005',
      type: 'fleet_segment_intermediation',
      value: 'R$ 5.400',
      status: 'Em avaliação',
    },
  ]

  return (
    <Card className="glass-card border-border/60 overflow-hidden">
      <CardHeader className="border-b bg-muted/20 pb-4">
        <CardTitle>{t('financial_contracts_overview')}</CardTitle>
        <CardDescription>Detalhamento de contratos gerais e status de adimplência</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/10 hover:bg-muted/10 border-b-border/60">
              <TableHead className="font-semibold text-foreground">{t('contract_id')}</TableHead>
              <TableHead className="font-semibold text-foreground">{t('contract_type')}</TableHead>
              <TableHead className="font-semibold text-foreground">{t('contract_value')}</TableHead>
              <TableHead className="font-semibold text-foreground">{t('status')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((c) => (
              <TableRow key={c.id} className="hover:bg-muted/40 transition-colors">
                <TableCell className="font-mono text-xs font-medium">{c.id}</TableCell>
                <TableCell className="font-medium text-foreground/90">{t(c.type as any)}</TableCell>
                <TableCell className="font-bold text-foreground">{c.value}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      c.status === 'Adimplente'
                        ? 'outline'
                        : c.status === 'Inadimplente'
                          ? 'destructive'
                          : 'secondary'
                    }
                    className={
                      c.status === 'Adimplente'
                        ? 'border-primary/50 text-primary bg-primary/10 shadow-[0_0_8px_rgba(28,209,92,0.1)]'
                        : ''
                    }
                  >
                    {t(c.status as any)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
