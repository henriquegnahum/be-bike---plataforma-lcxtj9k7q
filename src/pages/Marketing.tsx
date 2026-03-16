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

export default function Marketing() {
  const campaigns = [
    {
      name: 'Campanha SP (Meta)',
      platform: 'Meta Ads',
      spend: 'R$ 1.200',
      leads: 450,
      cpl: 'R$ 2,66',
      status: 'Ativa',
    },
    {
      name: 'Search Brand (Google)',
      platform: 'Google Ads',
      spend: 'R$ 800',
      leads: 320,
      cpl: 'R$ 2,50',
      status: 'Ativa',
    },
  ]

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Marketing e Ads</h1>
        <p className="text-muted-foreground mt-1">Performance de aquisição.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campanhas Ativas</CardTitle>
          <CardDescription>Integração com plataformas de anúncios.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campanha</TableHead>
                <TableHead>Canal</TableHead>
                <TableHead>Gasto</TableHead>
                <TableHead>Leads</TableHead>
                <TableHead>CPL</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((c, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.platform}</TableCell>
                  <TableCell>{c.spend}</TableCell>
                  <TableCell>{c.leads}</TableCell>
                  <TableCell>{c.cpl}</TableCell>
                  <TableCell>
                    <Badge>{c.status}</Badge>
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
