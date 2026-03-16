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
    <Card>
      <CardHeader>
        <CardTitle>{t('financial_contracts_overview')}</CardTitle>
        <CardDescription>Detalhamento de contratos gerais e status de adimplência</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('contract_id')}</TableHead>
              <TableHead>{t('contract_type')}</TableHead>
              <TableHead>{t('contract_value')}</TableHead>
              <TableHead>{t('status')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.id}</TableCell>
                <TableCell>{t(c.type as any)}</TableCell>
                <TableCell>{c.value}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      c.status === 'Adimplente'
                        ? 'default'
                        : c.status === 'Inadimplente'
                          ? 'destructive'
                          : 'secondary'
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
