import { createContext, useContext } from 'react'

import { ICreatePasswordContext, CreatePasswordProvider } from './types'

const ElementContext = createContext<ICreatePasswordContext>(null!)

export default function ElementProvider({
  children,
  currentInvite
}: CreatePasswordProvider) {
  return (
    <ElementContext.Provider value={{ currentInvite }}>
      {children}
    </ElementContext.Provider>
  )
}

export function InviteContext() {
  const context = useContext(ElementContext)
  const { currentInvite } = context
  return { currentInvite }
}
