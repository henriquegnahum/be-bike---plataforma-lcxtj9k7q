import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Search, Download, Filter, UserSearch } from 'lucide-react'
import { MOCK_CRM_LEADS } from '@/lib/mock-data'

export default function CustomerBase() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredCustomers = MOCK_CRM_LEADS.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) || c.cpf.includes(search)
    const matchesStatus = statusFilter === 'all' || c.stage === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Base de Clientes
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Gestão consolidada de leads e clientes da operação.
          </p>
        </div>
        <Button variant="outline" className="shadow-sm">
          <Download className="w-4 h-4 mr-2" /> Exportar Base
        </Button>
      </div>

      <Card className="glass-card shadow-sm">
        <CardHeader className="bg-muted/10 border-b pb-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <CardTitle className="flex items-center gap-2 w-full sm:w-auto">
              <UserSearch className="w-5 h-5 text-primary" /> Clientes
            </CardTitle>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar nome ou CPF..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 bg-background/50 border-border/60"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px] bg-background/50 border-border/60">
                  <Filter className="w-4 h-4 mr-2" /> <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="Leads">Leads</SelectItem>
                  <SelectItem value="Contacted">Contatados</SelectItem>
                  <SelectItem value="Analysis">Em Análise</SelectItem>
                  <SelectItem value="Negotiation">Negociação</SelectItem>
                  <SelectItem value="Signed/Onboarding">Assinado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-background/50 backdrop-blur-md">
              <TableRow>
                <TableHead className="pl-6">Nome</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Estágio</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead className="text-right pr-6">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((c) => (
                <TableRow key={c.id} className="hover:bg-muted/40 transition-colors">
                  <TableCell className="font-bold pl-6">{c.name}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {c.cpf || '-'}
                  </TableCell>
                  <TableCell className="text-sm">{c.phone}</TableCell>
                  <TableCell>
                    <Badge
                      variant={c.stage === 'Signed/Onboarding' ? 'default' : 'secondary'}
                      className="shadow-sm"
                    >
                      {c.stage}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs uppercase font-bold text-muted-foreground tracking-wider">
                    {c.source}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-bold hover:text-primary transition-colors"
                      asChild
                    >
                      <Link to={`/sales/customers/${c.id}`}>Ver Perfil</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredCustomers.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-10 text-muted-foreground font-medium"
                  >
                    Nenhum cliente encontrado com estes filtros.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
