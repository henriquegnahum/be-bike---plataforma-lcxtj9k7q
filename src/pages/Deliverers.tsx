import { Link } from 'react-router-dom'
import { deliverers } from '@/lib/mock-data'
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
import { ChevronRight } from 'lucide-react'

export default function Deliverers() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Entregador Master
        </h1>
        <p className="text-muted-foreground mt-1">Gestão de parceiros e análise de risco</p>
      </div>

      <Card className="shadow-subtle overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <CardTitle>Lista de Entregadores</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>CPF</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score 99</TableHead>
                <TableHead>Risco</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliverers.map((d) => (
                <TableRow key={d.cpf} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-mono">{d.cpf}</TableCell>
                  <TableCell className="font-medium">{d.name}</TableCell>
                  <TableCell>
                    <Badge variant={d.status === 'Ativo' ? 'default' : 'destructive'}>
                      {d.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${d.score > 80 ? 'bg-primary' : 'bg-chart-4'}`}
                          style={{ width: `${d.score}%` }}
                        />
                      </div>
                      <span className="text-xs">{d.score}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        d.risk === 'Alto'
                          ? 'border-destructive text-destructive'
                          : 'border-primary text-primary'
                      }
                    >
                      {d.risk}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/entregadores/${d.cpf.replace(/\D/g, '')}`}>
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
