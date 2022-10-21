import { createContext, useContext } from 'react'

import { ContextOverload, ProviderOverload } from 'typings/Contexts'

const ElementContext = createContext<ContextOverload>(null!)

export default function ElementProvider({
  children,
  overload,
  setOverload
}: ProviderOverload) {
  return (
    <ElementContext.Provider
      value={{
        overload,
        setOverload
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function OverloadContext() {
  const context = useContext(ElementContext)
  const { overload, setOverload } = context
  return { overload, setOverload }
}
