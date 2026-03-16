import { Card, CardContent } from '@/components/ui/card'
import { useParams } from 'react-router-dom'

export default function Chat() {
  const { channel } = useParams()
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">#{channel || 'geral'}</h1>
      </div>
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-sm">Histórico de chat indisponível.</p>
        </CardContent>
      </Card>
    </div>
  )
}
