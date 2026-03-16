import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Hash,
  Phone,
  Video as VideoIcon,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  Send,
  UserCircle2,
} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UserAvatar } from '@/components/user/UserAvatar'
import { useUserStore } from '@/stores/user'

export default function Chat() {
  const { channel = 'geral' } = useParams()
  const { profile, status, customStatus, preferences } = useUserStore()
  const [msg, setMsg] = useState('')
  const [messages, setMessages] = useState<any[]>([
    {
      text: 'Pessoal, a demanda no hub SP-Sul subiu muito. Alguém disponível para reforço?',
      time: '10:42',
      sender: 'Marcos Silva',
      senderRole: 'Gerente Hub',
      senderStatus: 'online',
    },
    {
      text: 'Estou finalizando uma O.S. no Centro e posso ir.',
      time: '10:45',
      sender: 'Ana Paula',
      senderRole: 'Mecânica Sênior',
      senderStatus: 'away',
    },
  ])

  const [callActive, setCallActive] = useState(false)
  const [callType, setCallType] = useState<'audio' | 'video' | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  useEffect(() => {
    setCallActive(false)
  }, [channel])

  const startCall = (type: 'audio' | 'video') => {
    setCallType(type)
    setCallActive(true)
    setIsMuted(false)
    setIsVideoOff(false)
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!msg.trim()) return
    setMessages([...messages, { text: msg, time: 'Agora', sender: 'Você' }])
    setMsg('')
  }

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] max-w-6xl mx-auto animate-in fade-in duration-700 space-y-4 pb-4">
      <div className="flex items-center justify-between glass-card p-4 shadow-sm border-border/50 bg-background/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-inner">
            <Hash className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight">#{channel}</h1>
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
              <UserCircle2 className="w-4 h-4" /> 12 participantes online
            </p>
          </div>
        </div>
        {!callActive && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="rounded-full w-12 h-12 p-0 shadow-sm hover:shadow-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => startCall('audio')}
            >
              <Phone className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full w-12 h-12 p-0 shadow-sm hover:shadow-md hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => startCall('video')}
            >
              <VideoIcon className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>

      {callActive && (
        <Card className="glass-card border-primary/30 shadow-[0_8px_32px_rgba(28,209,92,0.15)] bg-gradient-to-r from-primary/10 to-transparent shrink-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse border border-primary/30 shadow-inner">
                  {callType === 'video' && !isVideoOff ? (
                    <VideoIcon className="w-8 h-8 text-primary" />
                  ) : (
                    <Phone className="w-8 h-8 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Huddle: #{channel}</h3>
                  <p className="text-primary font-bold flex items-center gap-2 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />{' '}
                    Em andamento (04:12)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant={isMuted ? 'destructive' : 'outline'}
                  className={`rounded-full w-14 h-14 p-0 shadow-sm transition-all ${!isMuted && 'hover:bg-primary/10 hover:text-primary'}`}
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </Button>
                {callType === 'video' && (
                  <Button
                    variant={isVideoOff ? 'destructive' : 'outline'}
                    className={`rounded-full w-14 h-14 p-0 shadow-sm transition-all ${!isVideoOff && 'hover:bg-primary/10 hover:text-primary'}`}
                    onClick={() => setIsVideoOff(!isVideoOff)}
                  >
                    {isVideoOff ? (
                      <VideoOff className="w-6 h-6" />
                    ) : (
                      <VideoIcon className="w-6 h-6" />
                    )}
                  </Button>
                )}
                <Button
                  variant="destructive"
                  className="rounded-full w-14 h-14 p-0 shadow-[0_4px_15px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)] hover:scale-105 transition-all"
                  onClick={() => setCallActive(false)}
                >
                  <PhoneOff className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="glass-card flex-1 flex flex-col overflow-hidden shadow-sm">
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted/50 px-4 py-1.5 rounded-full">
                Hoje
              </span>
            </div>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-4 animate-in fade-in slide-in-from-bottom-2 ${m.sender === 'Você' ? 'flex-row-reverse' : ''}`}
              >
                {m.sender === 'Você' ? (
                  <UserAvatar className="w-10 h-10 shadow-sm shrink-0" />
                ) : (
                  <UserAvatar
                    className="w-10 h-10 shadow-sm shrink-0"
                    user={{ name: m.sender, role: m.senderRole, status: m.senderStatus }}
                  />
                )}
                <div
                  className={`flex flex-col ${m.sender === 'Você' ? 'items-end' : 'items-start'} max-w-[80%]`}
                >
                  <div className="flex items-center gap-2 mb-1.5 px-1">
                    <span className="font-bold text-sm text-foreground">
                      {m.sender === 'Você' ? profile.name : m.sender}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{m.time}</span>
                  </div>
                  <div
                    className={`p-4 rounded-2xl shadow-sm text-[15px] font-medium leading-relaxed ${m.sender === 'Você' ? 'bg-primary text-primary-foreground rounded-tr-sm' : 'bg-background/80 backdrop-blur-sm border border-border/60 rounded-tl-sm'}`}
                  >
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 bg-muted/10 border-t border-border/50">
          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <Input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder={`Enviar mensagem em #${channel}...`}
              className="flex-1 h-14 rounded-2xl bg-background/80 backdrop-blur-sm font-medium border-border/60 focus-visible:ring-primary/50 shadow-inner px-4 text-[15px]"
            />
            <Button
              type="submit"
              size="icon"
              className="h-14 w-14 rounded-2xl shadow-md bg-primary hover:bg-primary/90 text-white transition-transform active:scale-95 shrink-0"
              disabled={!msg.trim()}
            >
              <Send className="w-5 h-5 ml-1" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
