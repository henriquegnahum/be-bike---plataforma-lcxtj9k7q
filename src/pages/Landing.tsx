import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import logoImg from '@/assets/bebike_logo-5fe56.png'
import { MapPin, Wrench, Users, ShieldCheck } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <img src={logoImg} alt="Be Bike" className="h-8 dark:invert" />
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/login">Começar</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-muted/30">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Gestão Centralizada de Frota e Entregadores
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          Acompanhamento em tempo real, manutenção preditiva e suporte em uma única plataforma.
        </p>
        <div className="flex gap-4 mb-20">
          <Button size="lg" asChild>
            <Link to="/login">Acessar Sistema</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl w-full text-left">
          <Card>
            <CardContent className="pt-6">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Rastreamento</h3>
              <p className="text-muted-foreground">Localização em tempo real de toda a frota.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Wrench className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Manutenção</h3>
              <p className="text-muted-foreground">O.S. preditivas e controle de estoque.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Comunidade</h3>
              <p className="text-muted-foreground">Gestão de entregadores e programa de pontos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Segurança</h3>
              <p className="text-muted-foreground">Controle de inadimplência e recuperação.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
