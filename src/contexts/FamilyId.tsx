import { createContext, useContext } from 'react'

import { ContextFamilyId, ProviderFamilyId } from 'typings/Contexts'

const ElementContext = createContext<ContextFamilyId>(null!)

export default function ElementProvider({
  children,
  data,
  values,
  setValues
}: ProviderFamilyId) {
  return (
    <ElementContext.Provider value={{ data, values, setValues }}>
      {children}
    </ElementContext.Provider>
  )
}

export function DefaultDataContext() {
  const context = useContext(ElementContext)
  const { data } = context
  return { data }
}

export function ValuesContext() {
  const context = useContext(ElementContext)
  const { values, setValues } = context
  return { values, setValues }
}
