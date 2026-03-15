import { Link } from 'react-router-dom'
import { bikes } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight, Wrench } from 'lucide-react'

export default function Bikes() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Frota Master
        </h1>
        <p className="text-muted-foreground mt-1">Gestão de ativos, telemetria e manutenções</p>
      </div>

      <Card className="shadow-subtle overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <CardTitle>Lista de Ativos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Chassi</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Quilometragem</TableHead>
                <TableHead>Última Manutenção</TableHead>
                <TableHead>Entregador Atual</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bikes.map((b) => (
                <TableRow key={b.chassi} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-mono font-semibold">{b.chassi}</TableCell>
                  <TableCell>
                    <Badge
                      variant={b.status === 'Ativa' ? 'default' : 'secondary'}
                      className={
                        b.status === 'Manutenção'
                          ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                          : ''
                      }
                    >
                      {b.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{b.mileage} km</span>
                      {b.mileage > 2500 && b.status !== 'Manutenção' && (
                        <Wrench
                          className="w-3 h-3 text-destructive animate-pulse-alert"
                          title="Revisão necessária"
                        />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{b.lastMaintenance}</TableCell>
                  <TableCell className="text-muted-foreground">{b.user}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/frota/${b.chassi}`}>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
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
