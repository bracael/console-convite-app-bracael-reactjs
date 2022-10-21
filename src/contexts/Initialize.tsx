import { createContext, useContext } from 'react'

import { ContextInitialize, ProviderInitialize } from 'typings/Contexts'

const ElementContext = createContext<ContextInitialize>(null!)

export default function ElementProvider({
  children,
  businessKey,
  setBusinessKey,
  business,
  setBusiness
}: ProviderInitialize) {
  return (
    <ElementContext.Provider
      value={{
        businessKey,
        setBusinessKey,
        business,
        setBusiness
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function InitializeContext() {
  const context = useContext(ElementContext)
  const { businessKey, setBusinessKey } = context
  return { businessKey, setBusinessKey }
}

export function BusinessContext() {
  const context = useContext(ElementContext)
  const { business, setBusiness } = context
  return { business, setBusiness }
}
