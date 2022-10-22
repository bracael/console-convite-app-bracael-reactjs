import { createContext, useContext } from 'react'

import { ContextGuests, ProviderGuests } from './types'

const ElementContext = createContext<ContextGuests>(null!)

export default function ElementProvider({
  children,
  fetcUpdate,
  setFetcUpdate
}: ProviderGuests) {
  return (
    <ElementContext.Provider value={{ fetcUpdate, setFetcUpdate }}>
      {children}
    </ElementContext.Provider>
  )
}

export function FetchUpdateContext() {
  const context = useContext(ElementContext)
  const { fetcUpdate, setFetcUpdate } = context
  return { fetcUpdate, setFetcUpdate }
}
