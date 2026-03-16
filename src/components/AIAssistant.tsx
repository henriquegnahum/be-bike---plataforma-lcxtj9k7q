import { useState, useEffect } from 'react'
import { Sparkles, Send, Bot, User, BrainCircuit, Mic, AudioLines } from 'lucide-react'
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
    { role: 'assistant', content: t('ai_default_response') },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

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

  const handleVoiceToggle = () => {
    if (isListening) {
      setIsListening(false)
    } else {
      setIsListening(true)
      // Simulating voice-to-text input processing
      setTimeout(() => {
        setIsListening(false)
        setInput('Qual a situação de manutenção no Hub SP-Sul?')
      }, 3000)
    }
  }

  const handleSend = () => {
    if (!input.trim() && !isListening) return
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
        lowerInput.includes('risk')
      ) {
        aiResponse = t('ai_churn_response')
      } else if (
        lowerInput.includes('manuten') ||
        lowerInput.includes('bike') ||
        lowerInput.includes('maint')
      ) {
        aiResponse = t('ai_maint_response')
      } else if (
        lowerInput.includes('99') ||
        lowerInput.includes('finan') ||
        lowerInput.includes('sub')
      ) {
        aiResponse = t('ai_fin_response')
      } else if (
        lowerInput.includes('hub') ||
        lowerInput.includes('overload') ||
        lowerInput.includes('sobrecarregado')
      ) {
        aiResponse =
          t('ai_hub_response' as any) ||
          'Hub SP-Sul está sobrecarregado.\n\n[Explicabilidade]: O hub tem 15 O.S. atrasadas e a produtividade técnica caiu 18% nas últimas 48h. Recomendo realocar 2 mecânicos do Hub SP-Centro.'
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }])
      setIsTyping(false)
      setIsSpeaking(true)
      // Simulate speaking duration
      setTimeout(() => setIsSpeaking(false), 3500)
    }, 1500)
  }

  const renderMessage = (content: string) => {
    if (content.includes('[Explicabilidade]:')) {
      const parts = content.split('[Explicabilidade]:')
      return (
        <>
          <p className="font-medium text-[13px] leading-relaxed">{parts[0]}</p>
          <div className="mt-3 bg-background/60 p-3 rounded-xl border border-primary/20 shadow-sm flex flex-col gap-1.5 backdrop-blur-md">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5" /> Explicabilidade IA
            </span>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">
              {parts[1].trim()}
            </p>
          </div>
        </>
      )
    }
    return <p className="font-medium text-[13px] leading-relaxed">{content}</p>
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-primary/20 bg-background/70 backdrop-blur-3xl shadow-[-20px_0_60px_rgba(28,209,92,0.15)]">
        <SheetHeader className="p-6 border-b border-border/50 bg-muted/20">
          <SheetTitle className="flex items-center gap-2 text-primary font-extrabold tracking-tight text-2xl">
            <Sparkles className="w-6 h-6" /> Be.ai
          </SheetTitle>
          <SheetDescription className="font-medium">{t('ai_subtitle')}</SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 max-w-[92%] animate-in fade-in slide-in-from-bottom-2 ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary border border-primary/20'}`}
                >
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`p-4 rounded-2xl shadow-sm relative ${m.role === 'user' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-card border border-border/60 rounded-tl-sm'}`}
                >
                  {renderMessage(m.content)}
                  {m.role === 'assistant' && i === messages.length - 1 && isSpeaking && (
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-full shadow-md animate-pulse">
                      <AudioLines className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 max-w-[85%] animate-in fade-in">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/60 rounded-tl-sm flex items-center gap-1.5 h-[52px]">
                  <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce"></span>
                  <span
                    className="w-2 h-2 rounded-full bg-primary/60 animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></span>
                  <span
                    className="w-2 h-2 rounded-full bg-primary/60 animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border/50 bg-background/50">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2 items-center"
          >
            <Button
              type="button"
              size="icon"
              variant={isListening ? 'default' : 'outline'}
              className={`h-12 w-12 rounded-full shrink-0 shadow-sm transition-all duration-300 ${isListening ? 'animate-pulse bg-red-500 hover:bg-red-600 text-white border-transparent shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'bg-background hover:bg-muted'}`}
              onClick={handleVoiceToggle}
            >
              <Mic className="w-5 h-5" />
            </Button>
            <Input
              value={isListening ? 'Ouvindo...' : input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? 'Fale agora...' : t('ai_placeholder')}
              className="rounded-full shadow-inner bg-background focus-visible:ring-primary/50 h-12 px-5 font-medium flex-1"
              disabled={isTyping || isListening}
            />
            <Button
              type="submit"
              size="icon"
              className="h-12 w-12 rounded-full shrink-0 shadow-md bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform"
              disabled={isTyping || (!input.trim() && !isListening)}
            >
              <Send className="w-5 h-5 ml-0.5" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
