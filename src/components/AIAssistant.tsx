import { useState } from 'react'
import { Sparkles, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'

export function AIAssistant({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (o: boolean) => void
}) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Olá! Sou a Be Bike AI. Conectada ao Master Data. Como posso ajudar com insights operacionais hoje?',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return
    const newMsg = { role: 'user', content: input }
    setMessages((prev) => [...prev, newMsg])
    setInput('')
    setIsTyping(true)

    // Contextual Mock AI response based on keywords
    setTimeout(() => {
      let aiResponse =
        'Consultei a base unificada. Notei que temos entregadores com risco alto de churn esta semana e 3 bikes aguardando manutenção preditiva.'

      const lowerInput = newMsg.content.toLowerCase()
      if (lowerInput.includes('churn') || lowerInput.includes('risco')) {
        aiResponse =
          'Identifiquei 12 entregadores com risco alto de churn. O CPF 222.333.444-55 (Maria Oliveira) está com score 60 e taxa de conclusão no app 99 em apenas 70%. Deseja iniciar um fluxo de retenção?'
      } else if (lowerInput.includes('manuten') || lowerInput.includes('bike')) {
        aiResponse =
          'A Bike #X-123 ultrapassou o limite de 2.500km hoje. Uma OS preditiva foi sugerida. Além disso, o estoque de Pneu Aro 29 no Hub Centro está crítico (4 unidades).'
      } else if (lowerInput.includes('99') || lowerInput.includes('sub')) {
        aiResponse =
          'A sincronização com a 99 ocorreu há 2 horas. 85% dos entregadores estão elegíveis para o nível Ouro de subsídio este mês.'
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-primary/20">
        <SheetHeader className="p-6 border-b bg-muted/30">
          <SheetTitle className="flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            Be Bike AI Insights
          </SheetTitle>
          <SheetDescription>
            Faça perguntas sobre frota, churn, subsídios e alertas.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 max-w-[90%] ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                >
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`p-3 rounded-xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-muted/50 border rounded-tl-sm'}`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-3 rounded-xl text-sm bg-muted/50 border rounded-tl-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce"></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-background">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Quem está em risco de churn?"
              className="rounded-full shadow-sm"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="icon"
              className="rounded-full shrink-0 shadow-sm"
              disabled={isTyping || !input.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
