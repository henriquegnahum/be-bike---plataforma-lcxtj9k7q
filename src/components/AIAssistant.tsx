import { useState, useEffect } from 'react'
import { Sparkles, Send, Bot, User, BrainCircuit } from 'lucide-react'
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
import { useTranslation } from '@/lib/i18n'
import useAppStore from '@/stores/main'

export function AIAssistant({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (o: boolean) => void
}) {
  const t = useTranslation()
  const { language } = useAppStore()
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: t('ai_default_response'),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const defaultContent = t('ai_default_response')
    if (
      messages.length === 1 &&
      messages[0].role === 'assistant' &&
      messages[0].content !== defaultContent
    ) {
      setMessages([{ role: 'assistant', content: defaultContent }])
    }
  }, [language, t, messages])

  const handleSend = () => {
    if (!input.trim()) return
    const newMsg = { role: 'user', content: input }
    setMessages((prev) => [...prev, newMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      let aiResponse = t('ai_default_response')
      const lowerInput = newMsg.content.toLowerCase()

      if (
        lowerInput.includes('churn') ||
        lowerInput.includes('risc') ||
        lowerInput.includes('riesgo') ||
        lowerInput.includes('risk')
      ) {
        aiResponse = t('ai_churn_response')
      } else if (
        lowerInput.includes('manuten') ||
        lowerInput.includes('bike') ||
        lowerInput.includes('maint') ||
        lowerInput.includes('peca')
      ) {
        aiResponse = t('ai_maint_response')
      } else if (
        lowerInput.includes('99') ||
        lowerInput.includes('sub') ||
        lowerInput.includes('finan')
      ) {
        aiResponse = t('ai_fin_response')
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }])
      setIsTyping(false)
    }, 1800)
  }

  const renderMessageContent = (content: string) => {
    if (content.includes('[Explicabilidade]:')) {
      const parts = content.split('[Explicabilidade]:')
      return (
        <>
          <p>{parts[0]}</p>
          <div className="mt-2 bg-background/50 p-2.5 rounded-lg border border-primary/20 shadow-inner flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase text-primary flex items-center gap-1">
              <BrainCircuit className="w-3 h-3" /> Explicabilidade do Modelo
            </span>
            <p className="text-xs text-muted-foreground">{parts[1].trim()}</p>
          </div>
        </>
      )
    }
    return <p>{content}</p>
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-primary/20 bg-background/80 backdrop-blur-3xl shadow-[-10px_0_40px_rgba(28,209,92,0.1)]">
        <SheetHeader className="p-6 border-b border-border/50 bg-muted/30">
          <SheetTitle className="flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            {t('ai_title')}
          </SheetTitle>
          <SheetDescription>{t('ai_subtitle')}</SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 max-w-[90%] animate-fade-in-up ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary border border-primary/20'}`}
                >
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-card/90 border border-border/50 rounded-tl-sm backdrop-blur-md'}`}
                >
                  {renderMessageContent(m.content)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 max-w-[85%] animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-secondary text-primary border border-primary/20 flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-3.5 rounded-2xl text-sm bg-card/90 border border-border/50 rounded-tl-sm backdrop-blur-md flex items-center gap-1.5 h-[50px]">
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce"></span>
                  <span
                    className="w-2 h-2 rounded-full bg-primary/50 animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></span>
                  <span
                    className="w-2 h-2 rounded-full bg-primary/50 animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border/50 bg-background/50 backdrop-blur-lg">
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
              placeholder={t('ai_placeholder')}
              className="rounded-full shadow-inner border-border/50 bg-background/80 focus-visible:ring-primary/50 h-11 px-4"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="icon"
              className="h-11 w-11 rounded-full shrink-0 shadow-md bg-primary hover:bg-primary/90 text-white transition-transform hover:scale-105"
              disabled={isTyping || !input.trim()}
            >
              <Send className="w-4 h-4 ml-0.5" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
