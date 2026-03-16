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
  dashboardConfig: Record<string, boolean>
  toggleDashboardWidget: (widget: string) => void
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
  const [dashboardConfig, setDashboardConfig] = useState({
    kpis: true,
    fleet: true,
    financial: true,
    contracts: true,
    churn: true,
    leads: true,
    partners: true,
    table: true,
  })

  const addChannel = (channel: string) => {
    if (!channels.includes(channel)) setChannels([...channels, channel])
  }

  const toggleDashboardWidget = (widget: string) => {
    setDashboardConfig((prev) => ({
      ...prev,
      [widget]: !prev[widget as keyof typeof dashboardConfig],
    }))
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
        dashboardConfig,
        toggleDashboardWidget,
      },
    },
    children,
  )
}

const useAppStore = () => useContext(AppContext)
export default useAppStore
