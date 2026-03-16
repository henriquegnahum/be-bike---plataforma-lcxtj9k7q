import React, { createContext, useContext, useState } from 'react'

type AppState = {
  language: 'PT' | 'EN' | 'ES'
  setLanguage: (lang: 'PT' | 'EN' | 'ES') => void
  role: string
  setRole: (role: string) => void
  aiOpen: boolean
  setAiOpen: (open: boolean) => void
  isAuthenticated: boolean
  setIsAuthenticated: (auth: boolean) => void
  channels: string[]
  addChannel: (channel: string) => void
}

export const AppContext = createContext<AppState>({} as AppState)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'PT' | 'EN' | 'ES'>('PT')
  const [role, setRole] = useState('Admin')
  const [aiOpen, setAiOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [channels, setChannels] = useState([
    'geral',
    'operacoes',
    'manutencao',
    'hubs',
    'financeiro',
  ])

  const addChannel = (channel: string) => {
    if (!channels.includes(channel)) setChannels([...channels, channel])
  }

  return React.createElement(
    AppContext.Provider,
    {
      value: {
        language,
        setLanguage,
        role,
        setRole,
        aiOpen,
        setAiOpen,
        isAuthenticated,
        setIsAuthenticated,
        channels,
        addChannel,
      },
    },
    children,
  )
}

const useAppStore = () => useContext(AppContext)
export default useAppStore
