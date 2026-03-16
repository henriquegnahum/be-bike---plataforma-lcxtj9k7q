import { useState } from 'react'
import { MessageSquare, Hash, Search, Send, Plus, UserCircle2, CheckCircle2 } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export function InternalChat({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (o: boolean) => void
}) {
  const [activeChannel, setActiveChannel] = useState('operacoes')
  const [msg, setMsg] = useState('')
  const [messages, setMessages] = useState<any[]>([])

  const channels = ['geral', 'operacoes', 'manutencao', 'hubs', 'financeiro']

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!msg.trim()) return
    const isCommand = msg.includes('@be.ai') || msg.startsWith('/')
    const newMsg = { text: msg, time: 'Agora', sender: 'Você', isCommand }
    setMessages([...messages, newMsg])
    setMsg('')
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-3xl flex p-0 border-l-border/50 bg-background/80 backdrop-blur-3xl shadow-[-20px_0_60px_rgba(0,0,0,0.1)] gap-0">
        <div className="w-64 border-r border-border/50 bg-muted/10 flex flex-col h-full">
          <div className="p-4 border-b border-border/50">
            <h2 className="font-extrabold text-lg flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" /> Chat Interno
            </h2>
            <div className="relative mt-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-9 h-9 rounded-full bg-background/50 border-border/60"
                placeholder="Buscar..."
              />
            </div>
          </div>
          <ScrollArea className="flex-1 p-3">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2 mb-2 flex justify-between items-center">
                Canais <Plus className="w-3 h-3 cursor-pointer hover:text-primary" />
              </div>
              {channels.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveChannel(c)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${activeChannel === c ? 'bg-primary/10 text-primary font-bold shadow-sm' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'}`}
                >
                  <Hash className="w-4 h-4 opacity-70" /> {c}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex-1 flex flex-col h-full bg-background/50">
          <SheetHeader className="p-4 border-b border-border/50 bg-background flex flex-row items-center justify-between h-16">
            <SheetTitle className="flex items-center gap-2 text-foreground font-bold">
              <Hash className="w-5 h-5 text-muted-foreground" /> {activeChannel}
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center shrink-0">
                  <UserCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-foreground">Marcos (Gerente)</span>
                    <span className="text-[10px] text-muted-foreground">10:42</span>
                  </div>
                  <p className="text-sm font-medium mt-0.5 text-foreground/90">
                    Pessoal, a demanda no hub SP-Sul subiu muito. Alguém disponível para reforço?
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-600 flex items-center justify-center shrink-0">
                  <UserCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-foreground">Ana (Mecânica)</span>
                    <span className="text-[10px] text-muted-foreground">10:45</span>
                  </div>
                  <p className="text-sm font-medium mt-0.5 text-foreground/90">
                    Estou finalizando uma O.S. no Centro e posso ir.
                  </p>
                </div>
              </div>

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-3 relative ${m.isCommand ? 'before:absolute before:inset-0 before:w-1 before:bg-primary/40 before:rounded-full before:-ml-1' : ''}`}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 ml-2">
                    <UserCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-foreground">{m.sender}</span>
                      <span className="text-[10px] text-muted-foreground">{m.time}</span>
                    </div>
                    <p className="text-sm font-medium mt-0.5 text-foreground/90">{m.text}</p>
                    {m.isCommand && (
                      <div className="mt-2 p-3 bg-muted/30 border border-border/50 rounded-xl max-w-sm animate-in fade-in duration-500">
                        <p className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-primary" /> Comando processado com
                          sucesso.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 bg-background border-t border-border/50">
            <form onSubmit={handleSend} className="relative">
              <Input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Mensagem ou comando (ex: @be.ai create OS BB204)"
                className="pr-12 h-12 rounded-xl bg-muted/10 font-medium border-border/60 focus-visible:ring-primary/50"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 rounded-lg shadow-sm"
                disabled={!msg.trim()}
              >
                <Send className="w-4 h-4 ml-0.5" />
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
