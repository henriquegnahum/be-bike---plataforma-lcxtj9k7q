import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface UserAvatarProps {
  className?: string
}

export function UserAvatar({ className }: UserAvatarProps) {
  return (
    <div className={cn('relative inline-block', className)}>
      <Avatar className={cn('border border-border/50 shadow-sm', className)}>
        <AvatarFallback className="bg-primary/10 text-primary">
          <User className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
