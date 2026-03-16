import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Gift, Trophy, Star, TrendingUp, Medal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function PointsProgram() {
  const users = [
    { id: 1, name: 'Lucas Mendes', level: 'Ouro', points: 15400, trend: '+12%' },
    { id: 2, name: 'Rafael Costa', level: 'Prata', points: 8200, trend: '+5%' },
    { id: 3, name: 'Beatriz Lima', level: 'Bronze', points: 3100, trend: '-2%' },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 flex items-center gap-3">
          <Medal className="w-10 h-10 text-primary" /> Programa de Pontos
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Gestão de fidelidade, recompensas e níveis da base.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass-card premium-glow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-600">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Total Resgatado
              </p>
              <p className="text-3xl font-extrabold">2.4M pts</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card premium-glow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Recompensas Ativas
              </p>
              <p className="text-3xl font-extrabold">45</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card premium-glow border-purple-500/30">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-600">
              <Star className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Membros Ouro
              </p>
              <p className="text-3xl font-extrabold">12%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card overflow-hidden">
        <CardHeader className="bg-muted/10 border-b">
          <CardTitle>Classificação de Membros</CardTitle>
          <CardDescription>
            Acompanhe o saldo e progressão de pontos dos entregadores.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-background/50">
              <TableRow>
                <TableHead className="pl-6">Entregador</TableHead>
                <TableHead>Nível</TableHead>
                <TableHead>Pontos Atuais</TableHead>
                <TableHead className="pr-6 text-right">Evolução</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="pl-6 font-bold">{u.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`
                      ${
                        u.level === 'Ouro'
                          ? 'border-yellow-500 text-yellow-600 bg-yellow-50/50'
                          : u.level === 'Prata'
                            ? 'border-slate-400 text-slate-500 bg-slate-50/50'
                            : 'border-amber-700 text-amber-800 bg-amber-50/50'
                      }
                    `}
                    >
                      {u.level}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono font-semibold">
                    {u.points.toLocaleString()} pts
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <span
                      className={`text-xs font-bold flex items-center justify-end gap-1 ${u.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}
                    >
                      <TrendingUp
                        className={`w-3 h-3 ${u.trend.startsWith('-') ? 'rotate-180' : ''}`}
                      />{' '}
                      {u.trend}
                    </span>
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
