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

export default function Deliverers() {
  const { toast } = useToast()

  const handleAction = (type: string) =>
    toast({ title: `Ação Executada`, description: `Sistema processando: ${type}.` })

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-secondary">
            Deliverer Master Data
          </h1>
          <p className="text-muted-foreground">Unified base for all couriers and subscribers.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => handleAction('Export CSV')}>
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleAction('Export XML')}>
            <Download className="w-4 h-4 mr-2" /> XML
          </Button>
          <Button variant="secondary" size="sm" onClick={() => handleAction('Bulk Import')}>
            <Upload className="w-4 h-4 mr-2" /> Import Clientes
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Directory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Financial</TableHead>
                <TableHead>Active Bike</TableHead>
                <TableHead className="text-right">Profile</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_DELIVERERS.map((deliverer) => (
                <TableRow key={deliverer.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{deliverer.name}</TableCell>
                  <TableCell className="font-mono text-xs">{deliverer.cpf}</TableCell>
                  <TableCell>
                    <Badge variant={deliverer.status === 'Active' ? 'default' : 'outline'}>
                      {deliverer.status}
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
                      {deliverer.contractStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{deliverer.activeBike || '-'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/deliverers/${deliverer.id}`}>Open Card</Link>
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
