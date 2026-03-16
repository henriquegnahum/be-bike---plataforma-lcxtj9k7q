import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircleHeart, Star, Activity } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

export default function Community() {
  const t = useTranslation()

  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {t('community')}
        </h1>
        <p className="text-muted-foreground mt-2 text-lg font-medium">
          Engajamento, gamificação e base de parceiros.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MessageCircleHeart className="w-5 h-5" /> Engajamento App
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">85%</div>
            <p className="text-sm text-muted-foreground mt-2">MAU / WAU na plataforma Be Bike</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-500">
              <Star className="w-5 h-5" /> Clube de Benefícios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">1.420</div>
            <p className="text-sm text-muted-foreground mt-2">Membros ativos no nível Ouro</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pink-500">
              <Activity className="w-5 h-5" /> Eventos Físicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-extrabold">3</div>
            <p className="text-sm text-muted-foreground mt-2">Pit-stops planejados para o mês</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
