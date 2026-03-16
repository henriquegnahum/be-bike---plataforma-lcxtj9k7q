import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { MessageCircleHeart, Star, Activity, Trophy, Medal } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { Progress } from '@/components/ui/progress'

export default function Community() {
  const t = useTranslation()

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('community')}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Engajamento, gamificação e base de parceiros da plataforma.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass-card group hover:-translate-y-1 transition-transform relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-2 text-primary text-sm uppercase tracking-wider font-bold">
              <MessageCircleHeart className="w-4 h-4" /> Engajamento App
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-5xl font-extrabold tabular-nums tracking-tight">85%</div>
            <p className="text-xs font-medium text-muted-foreground mt-2">
              MAU / WAU na plataforma Be Bike
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:-translate-y-1 transition-transform relative overflow-hidden border-yellow-500/30">
          <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/20 transition-colors duration-700" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-2 text-yellow-600 text-sm uppercase tracking-wider font-bold">
              <Star className="w-4 h-4" /> Clube de Benefícios
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-5xl font-extrabold tabular-nums tracking-tight text-yellow-600">
              1.420
            </div>
            <p className="text-xs font-medium text-muted-foreground mt-2">
              Membros ativos no nível Ouro
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card group hover:-translate-y-1 transition-transform relative overflow-hidden border-pink-500/30">
          <div className="absolute right-0 top-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/20 transition-colors duration-700" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="flex items-center gap-2 text-pink-500 text-sm uppercase tracking-wider font-bold">
              <Activity className="w-4 h-4" /> Eventos Físicos
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-5xl font-extrabold tabular-nums tracking-tight text-pink-600">
              3
            </div>
            <p className="text-xs font-medium text-muted-foreground mt-2">
              Pit-stops planejados para o mês (SP/RJ)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card">
          <CardHeader className="bg-muted/10 border-b pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="w-5 h-5 text-primary" /> Gamificação: Top Entregadores
            </CardTitle>
            <CardDescription>Ranking semanal por km rodado e avaliação</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {[
                { name: 'João Silva', score: 980, rank: 1, color: 'text-yellow-500' },
                { name: 'Carlos Santos', score: 945, rank: 2, color: 'text-slate-400' },
                { name: 'Marcos Paulo', score: 910, rank: 3, color: 'text-amber-700' },
              ].map((user) => (
                <div key={user.rank} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full bg-background border flex items-center justify-center font-extrabold shadow-sm ${user.color}`}
                  >
                    {user.rank}
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex justify-between text-sm font-bold">
                      <span>{user.name}</span>
                      <span className="text-primary">{user.score} pts</span>
                    </div>
                    <Progress value={user.score / 10} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-primary/20 bg-primary/5">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg text-primary">
              <Medal className="w-5 h-5" /> Score de Fidelidade
            </CardTitle>
            <CardDescription className="text-primary/70">
              Visão preditiva de retenção por coorte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-primary/40 border-2 border-dashed border-primary/20 rounded-2xl bg-background/50 backdrop-blur-sm">
              <Activity className="w-10 h-10 mb-3 opacity-50" />
              <p className="font-medium text-sm text-primary/60">
                Integração com painel preditivo em andamento.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
