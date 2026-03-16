import React, { createContext, useContext, useState } from 'react'

type AppState = {
  language: 'PT' | 'EN' | 'ES'
  setLanguage: (lang: 'PT' | 'EN' | 'ES') => void
  role: string
  setRole: (role: string) => void
  aiOpen: boolean
  setAiOpen: (open: boolean) => void
}

export const AppContext = createContext<AppState>({} as AppState)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'PT' | 'EN' | 'ES'>('PT')
  const [role, setRole] = useState('Admin')
  const [aiOpen, setAiOpen] = useState(false)

  return React.createElement(
    AppContext.Provider,
    { value: { language, setLanguage, role, setRole, aiOpen, setAiOpen } },
    children,
  )
}

const useAppStore = () => useContext(AppContext)
export default useAppStore
