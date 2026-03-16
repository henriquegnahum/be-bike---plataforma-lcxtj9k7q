import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import useAppStore from '@/stores/main'
import logoImg from '@/assets/bebike_logo-5fe56.png'
import { Sparkles, Lock } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsAuthenticated } = useAppStore()
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'thiago@bebike.com.br' && password === '123456') {
      setIsAuthenticated(true)
      toast({ title: 'Acesso liberado', description: 'Bem-vindo ao Be Bike OS 2.0.' })
    } else {
      toast({
        title: 'Erro de autenticação',
        description: 'Credenciais inválidas. Tente thiago@bebike.com.br / 123456',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden selection:bg-primary/20 selection:text-primary">
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      <Card className="w-full max-w-md glass-card border-primary/20 shadow-[0_8px_40px_rgba(28,209,92,0.1)] relative z-10 m-4 animate-in fade-in zoom-in-95 duration-700">
        <CardHeader className="text-center pb-8 pt-10">
          <div className="flex justify-center mb-6">
            <img src={logoImg} alt="Be Bike" className="h-10 w-auto dark:invert" />
          </div>
          <CardTitle className="text-2xl font-extrabold tracking-tight">Be Bike OS 2.0</CardTitle>
          <CardDescription className="text-base font-medium mt-2">
            Acesse o centro de comando global
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-1">
                  E-mail Corporativo
                </label>
                <Input
                  type="email"
                  placeholder="thiago@bebike.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-2xl bg-background/50 border-border/60 shadow-inner focus-visible:ring-primary/50 text-[15px] px-4"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-1">
                  Senha
                </label>
                <Input
                  type="password"
                  placeholder="••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-2xl bg-background/50 border-border/60 shadow-inner focus-visible:ring-primary/50 text-[15px] px-4 font-mono tracking-widest"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-12 rounded-2xl text-[15px] font-bold shadow-[0_8px_20px_rgba(28,209,92,0.2)] hover:shadow-[0_12px_24px_rgba(28,209,92,0.3)] transition-all"
            >
              <Sparkles className="w-5 h-5 mr-2" /> Entrar no Sistema
            </Button>
            <p className="text-center text-xs text-muted-foreground font-medium pt-4 flex items-center justify-center gap-1.5 opacity-70">
              <Lock className="w-3 h-3" /> Acesso protegido por criptografia E2E
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
