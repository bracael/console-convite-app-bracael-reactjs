import { createContext, useContext } from 'react'

// contexts and others
import { auth } from 'services/server'

// types and interfaces
import { ProviderAuth, ContextAuth } from 'typings/Contexts'

const ElementContext = createContext<ContextAuth>(null!)

export default function ElementProvider({
  children,
  isAuthenticated
}: ProviderAuth) {
  const user = auth.currentUser

  return (
    <ElementContext.Provider
      value={{
        isAuthenticated,
        user
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function AuthContext() {
  const context = useContext(ElementContext)
  const { isAuthenticated, user } = context
  return { isAuthenticated, user, uid: user?.uid }
}
