import { createContext, useContext } from 'react'

import { ContextModal, ProviderModal } from 'typings/Contexts'

const ElementContext = createContext<ContextModal>(null!)

export default function ElementProvider({ children, close }: ProviderModal) {
  return (
    <ElementContext.Provider value={{ close }}>
      {children}
    </ElementContext.Provider>
  )
}

export function CloseContext() {
  const context = useContext(ElementContext)
  const { close } = context
  return { close }
}
