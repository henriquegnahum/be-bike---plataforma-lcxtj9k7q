import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { BellOff } from 'lucide-react'
import { useUserStore, PresenceStatus, CustomStatus } from '@/stores/user'
import { cn } from '@/lib/utils'

export interface UserAvatarProps {
  user?: {
    name: string
    avatarUrl?: string | null
    status?: PresenceStatus
    role?: string
    customStatus?: CustomStatus | null
    isDnd?: boolean
  }
  className?: string
  showTooltip?: boolean
}

export function UserAvatar({ user: passedUser, className, showTooltip = true }: UserAvatarProps) {
  const storeUser = useUserStore()

  const user = passedUser || {
    name: storeUser.profile.name,
    avatarUrl: storeUser.profile.avatarUrl,
    status: storeUser.status,
    role: storeUser.profile.role,
    customStatus: storeUser.customStatus,
    isDnd: storeUser.preferences.dndUntil && new Date(storeUser.preferences.dndUntil) > new Date(),
  }

  const initials = user.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  const statusColor =
    user.status === 'online'
      ? 'bg-emerald-500'
      : user.status === 'away'
        ? 'bg-yellow-500'
        : 'bg-gray-400'

  const avatarContent = (
    <div className={cn('relative inline-block', className)}>
      <Avatar className={cn('border border-border/50 shadow-sm', className)}>
        <AvatarImage src={user.avatarUrl || undefined} alt={user.name} />
        <AvatarFallback className="bg-primary/10 text-primary font-bold">{initials}</AvatarFallback>
      </Avatar>

      {/* Status Dot */}
      <div
        className={cn(
          'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background shadow-sm',
          statusColor,
        )}
      />

      {/* DND Indicator */}
      {user.isDnd && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background flex items-center justify-center shadow-sm">
          <BellOff className="w-2 h-2 text-white" />
        </div>
      )}
    </div>
  )

  if (!showTooltip) return avatarContent

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{avatarContent}</TooltipTrigger>
        <TooltipContent className="glass-card flex flex-col gap-1 p-3 border-border/50">
          <p className="font-bold text-[13px]">{user.name}</p>
          <p className="text-xs text-muted-foreground font-medium">{user.role}</p>
          <div className="flex items-center gap-1.5 mt-1 pt-1 border-t border-border/50">
            <span className={cn('w-2 h-2 rounded-full shadow-sm', statusColor)} />
            <span className="text-xs capitalize font-medium">
              {user.status === 'online'
                ? 'Disponível'
                : user.status === 'away'
                  ? 'Ausente'
                  : 'Offline'}
            </span>
          </div>
          {user.customStatus && (
            <p className="text-xs mt-1 bg-muted/50 px-2 py-1 rounded-md">
              {user.customStatus.emoji} {user.customStatus.text}
            </p>
          )}
          {user.isDnd && (
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
              <BellOff className="w-3 h-3" /> Notificações pausadas
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
