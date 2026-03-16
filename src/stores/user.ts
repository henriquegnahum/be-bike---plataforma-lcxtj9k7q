import React, { createContext, useContext, useState, useEffect } from 'react'

export type PresenceStatus = 'online' | 'away' | 'offline'

export interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  extension: string
  avatarUrl: string | null
  role: string
  department: string
  startDate: string
  aboutMe: string
}

export interface CustomStatus {
  emoji: string
  text: string
  expiresAt: string | null
}

export interface NotificationPrefs {
  level: 'all' | 'mentions' | 'none'
  computer: { critical: boolean; dms: boolean; tasks: boolean; mentions: boolean }
  mobile: { critical: boolean; dms: boolean; tasks: boolean; mentions: boolean }
  dndUntil: string | null
}

type UserContextType = {
  profile: UserProfile
  status: PresenceStatus
  customStatus: CustomStatus | null
  preferences: NotificationPrefs
  setProfile: (p: Partial<UserProfile>) => void
  setStatus: (s: PresenceStatus) => void
  setCustomStatus: (c: CustomStatus | null) => void
  setPreferences: (p: Partial<NotificationPrefs>) => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<UserProfile>({
    id: 'USR-001',
    name: 'Thiago Silva',
    email: 'thiago@bebike.com.br',
    phone: '+55 11 99999-9999',
    extension: '1042',
    avatarUrl: null,
    role: 'Administrador',
    department: 'Operações e Tecnologia',
    startDate: '2023-01-15',
    aboutMe: 'Liderando a revolução da micromobilidade na Be Bike.',
  })

  const [status, setStatus] = useState<PresenceStatus>('online')
  const [customStatus, setCustomStatus] = useState<CustomStatus | null>(null)
  const [preferences, setPreferencesState] = useState<NotificationPrefs>({
    level: 'all',
    computer: { critical: true, dms: true, tasks: true, mentions: true },
    mobile: { critical: true, dms: true, tasks: false, mentions: true },
    dndUntil: null,
  })

  const setProfile = (p: Partial<UserProfile>) => setProfileState((prev) => ({ ...prev, ...p }))
  const setPreferences = (p: Partial<NotificationPrefs>) =>
    setPreferencesState((prev) => ({ ...prev, ...p }))

  return React.createElement(
    UserContext.Provider,
    {
      value: {
        profile,
        status,
        customStatus,
        preferences,
        setProfile,
        setStatus,
        setCustomStatus,
        setPreferences,
      },
    },
    children,
  )
}

export const useUserStore = () => useContext(UserContext)
