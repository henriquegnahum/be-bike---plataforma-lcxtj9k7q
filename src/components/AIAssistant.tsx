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
      setTimeout(() => setIsSpeaking(false), 3500)
    }, 1500)
  }

  const renderMessage = (content: string) => {
    if (content.includes('[Explicabilidade]:')) {
      const parts = content.split('[Explicabilidade]:')
      return (
        <>
          <p className="text-sm">{parts[0]}</p>
          <div className="mt-2 bg-muted p-2 rounded-md border text-xs">
            <span className="font-semibold text-primary flex items-center gap-1">
              <BrainCircuit className="w-3 h-3" /> Explicabilidade IA
            </span>
            <p className="text-muted-foreground mt-1">{parts[1].trim()}</p>
          </div>
        </>
      )
    }
    return <p className="text-sm">{content}</p>
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Be.ai
          </SheetTitle>
          <SheetDescription>{t('ai_subtitle')}</SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 max-w-[90%] ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}
                >
                  {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div
                  className={`p-3 rounded-lg relative ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                >
                  {renderMessage(m.content)}
                  {m.role === 'assistant' && i === messages.length - 1 && isSpeaking && (
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-1 rounded-full animate-pulse">
                      <AudioLines className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Bot size={14} />
                </div>
                <div className="p-3 rounded-lg bg-muted flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce"></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <Button
              type="button"
              size="icon"
              variant={isListening ? 'destructive' : 'outline'}
              className={isListening ? 'animate-pulse' : ''}
              onClick={handleVoiceToggle}
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Input
              value={isListening ? 'Ouvindo...' : input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? 'Fale agora...' : t('ai_placeholder')}
              className="flex-1"
              disabled={isTyping || isListening}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isTyping || (!input.trim() && !isListening)}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
