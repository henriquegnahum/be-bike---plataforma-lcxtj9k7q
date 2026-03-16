import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Menu, MapPin, Wrench, Users, Star } from 'lucide-react'
import logoImg from '@/assets/bebike_logo-5fe56.png'

export default function Landing() {
  const logos = [
    { name: 'delivery', query: 'delivery' },
    { name: 'logistics', query: 'logistics' },
    { name: 'food', query: 'food' },
    { name: 'transport', query: 'transport' },
    { name: 'partner', query: 'partner' },
  ]

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Be Bike" className="h-8 w-auto object-contain dark:invert" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#funcionalidades"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#solucoes"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Soluções
            </a>
            <a
              href="#cases"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Cases
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-bold" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="font-bold shadow-md" asChild>
              <Link to="/login">Começar Grátis</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] glass-card border-none bg-background/90"
            >
              <SheetHeader className="text-left mb-6">
                <SheetTitle>
                  <img src={logoImg} alt="Be Bike" className="h-8 w-auto dark:invert" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                <a
                  href="#funcionalidades"
                  className="text-lg font-medium py-2 border-b border-border/50"
                >
                  Funcionalidades
                </a>
                <a href="#solucoes" className="text-lg font-medium py-2 border-b border-border/50">
                  Soluções
                </a>
                <a href="#cases" className="text-lg font-medium py-2 border-b border-border/50">
                  Cases
                </a>
                <a href="#contato" className="text-lg font-medium py-2 border-b border-border/50">
                  Contato
                </a>
                <div className="flex flex-col gap-3 mt-6">
                  <Button variant="outline" className="w-full h-12 text-base font-bold" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="w-full h-12 text-base font-bold shadow-md" asChild>
                    <Link to="/login">Começar Grátis</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pt-24 pb-20">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" />

        <div className="container relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Gestão Completa para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Sua Frota de Bikes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
            Operação centralizada, inteligência preditiva e integração de dados para escalar a
            performance do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-8 text-[15px] font-bold shadow-lg w-full sm:w-auto"
              asChild
            >
              <Link to="/login">Começar Grátis</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-[15px] font-bold bg-background/50 backdrop-blur-sm w-full sm:w-auto border-border/60"
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-y border-border/50 bg-muted/20 relative z-10">
        <div className="container">
          <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">
            Empresas que confiam na Be Bike
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-80">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={`https://img.usecurling.com/i?q=${logo.query}&color=multicolor&shape=fill`}
                alt={`Client ${i}`}
                className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100 hover:scale-110 cursor-pointer drop-shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="py-24 container relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">
          Tecnologia que move seu negócio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-card group cursor-default">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Rastreamento Inteligente</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Acompanhe sua frota em tempo real, defina cercas virtuais e receba alertas
                preditivos de segurança e uso.
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card group cursor-default">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Gestão de Manutenção</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Previsão automática de revisões, kanban ágil de O.S. e controle de estoque de peças
                100% integrado.
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card group cursor-default">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">CRM Integrado</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Gerencie todos os leads, funis de conversão, assinaturas e suporte N1 em uma única
                plataforma unificada.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-foreground text-background relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50 mix-blend-overlay" />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-3 text-primary">+30%</p>
              <p className="text-background/80 font-bold uppercase tracking-wider text-xs">
                Redução de Custos
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-3 text-primary">+20%</p>
              <p className="text-background/80 font-bold uppercase tracking-wider text-xs">
                Disponibilidade
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-3 text-primary">-15%</p>
              <p className="text-background/80 font-bold uppercase tracking-wider text-xs">
                Churn de Clientes
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-3 text-primary">100%</p>
              <p className="text-background/80 font-bold uppercase tracking-wider text-xs">
                Controle Operacional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="cases" className="py-24 container relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">
          O que nossos parceiros dizem
        </h2>
        <Carousel className="max-w-4xl mx-auto cursor-grab active:cursor-grabbing">
          <CarouselContent>
            {[1, 2, 3].map((i) => (
              <CarouselItem key={i}>
                <div className="text-center px-4 md:px-16">
                  <div className="flex justify-center mb-6 text-yellow-500 gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-medium italic mb-10 leading-relaxed text-foreground/90">
                    "A plataforma Be Bike revolucionou a forma como gerenciamos nossa frota diária.
                    A inteligência preditiva nos ajudou a reduzir o tempo de bikes paradas em mais
                    de 40% no primeiro trimestre."
                  </p>
                  <div className="flex flex-col items-center">
                    <img
                      src={`https://img.usecurling.com/ppl/thumbnail?seed=${i + 10}`}
                      alt="Avatar"
                      className="w-16 h-16 rounded-full mb-4 shadow-lg border-2 border-background"
                    />
                    <p className="font-bold text-foreground text-lg">Carlos Oliveira</p>
                    <p className="text-sm font-medium text-muted-foreground mt-0.5">
                      Diretor de Operações, LogiBikes
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-border/50 bg-background/50 backdrop-blur-sm shadow-sm" />
          <CarouselNext className="hidden md:flex border-border/50 bg-background/50 backdrop-blur-sm shadow-sm" />
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-muted/20 relative z-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Be Bike"
              className="h-6 w-auto grayscale opacity-70 dark:invert"
            />
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Be Bike OS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
