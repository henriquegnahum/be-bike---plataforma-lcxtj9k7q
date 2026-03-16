import { useState, useEffect } from 'react'
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

  // Reset initial message on language change if it's the only one
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
        lowerInput.includes('moto')
      ) {
        aiResponse = t('ai_maint_response')
      } else if (lowerInput.includes('99') || lowerInput.includes('sub')) {
        aiResponse = t('ai_fin_response')
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
            {t('ai_title')}
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
              placeholder={t('ai_placeholder')}
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
