import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Hammer, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ComingSoon() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[70vh] flex items-center justify-center animate-in fade-in duration-700 p-4">
      <Card className="glass-card max-w-md w-full border-primary/20 shadow-[0_8px_30px_rgba(28,209,92,0.1)]">
        <CardContent className="pt-10 pb-8 px-8 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-inner border border-primary/20">
            <Hammer className="w-10 h-10 animate-bounce" />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground mb-3">
            Módulo em Desenvolvimento
          </h2>
          <p className="text-muted-foreground font-medium mb-8">
            Esta funcionalidade está sendo construída e estará disponível em breve. Sem dados
            disponíveis no momento.
          </p>
          <Button
            onClick={() => navigate(-1)}
            className="w-full shadow-md font-bold text-[15px] h-12 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
