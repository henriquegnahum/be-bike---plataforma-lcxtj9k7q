import { useState } from 'react'
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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Download } from 'lucide-react'
import { MOCK_BIKES } from '@/lib/mock-data'
import { useTranslation } from '@/lib/i18n'

export default function Bikes() {
  const t = useTranslation()
  const [statusFilter, setStatusFilter] = useState('Todas')

  const filteredBikes = MOCK_BIKES.filter(
    (b) => statusFilter === 'Todas' || b.status === statusFilter,
  )

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('fleet_title')}</h1>
          <p className="text-muted-foreground mt-1">{t('fleet_desc')}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> CSV
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" /> Nova Bike
          </Button>
        </div>
      </div>

      <Tabs defaultValue="Todas" onValueChange={setStatusFilter}>
        <TabsList className="mb-4">
          <TabsTrigger value="Todas">Todas</TabsTrigger>
          <TabsTrigger value="Ativa">Ativas</TabsTrigger>
          <TabsTrigger value="Oficina">Oficina</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-lg">Frota</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Chassi</TableHead>
                  <TableHead>Modelo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>KM</TableHead>
                  <TableHead>Entregador</TableHead>
                  <TableHead className="text-right">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBikes.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell className="font-mono text-sm">{b.chassi}</TableCell>
                    <TableCell>{b.model}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          b.status === 'Ativa'
                            ? 'default'
                            : b.status === 'Oficina'
                              ? 'destructive'
                              : 'secondary'
                        }
                      >
                        {t(b.status as any)}
                      </Badge>
                    </TableCell>
                    <TableCell>{b.mileage}</TableCell>
                    <TableCell>{b.deliverer || '-'}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/bikes/${b.id}`}>Ver</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}
