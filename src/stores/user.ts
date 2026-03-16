import React, { createContext, useContext, useState } from 'react'

export interface UserProfile {
  id: string
  name: string
  email: string
  role: string
}

type UserContextType = {
  profile: UserProfile
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile] = useState<UserProfile>({
    id: 'USR-001',
    name: 'Thiago Silva',
    email: 'thiago@bebike.com.br',
    role: 'Administrador',
  })

  return React.createElement(
    UserContext.Provider,
    {
      value: { profile },
    },
    children,
  )
}

export const useUserStore = () => useContext(UserContext)
