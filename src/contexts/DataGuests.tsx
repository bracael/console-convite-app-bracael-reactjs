import { createContext, useContext } from 'react'

import { ContextDataGuests, ProviderDataGuests } from 'typings/Contexts'

const ElementContext = createContext<ContextDataGuests>(null!)

export default function ElementProvider({
  children,
  defaultDataRef,
  currentData,
  setCurrentData,
  selectedKeys,
  setSelectedKeys,
  isSelectedAll,
  setIsSelectedAll,
  totalToDelete,
  filterToDelete,
  totalKeys,
  isSameValue
}: ProviderDataGuests) {
  return (
    <ElementContext.Provider
      value={{
        defaultDataRef,
        currentData,
        setCurrentData,
        selectedKeys,
        setSelectedKeys,
        isSelectedAll,
        setIsSelectedAll,
        totalToDelete,
        filterToDelete,
        totalKeys,
        isSameValue
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function DefaultDataContext() {
  const context = useContext(ElementContext)
  const { defaultDataRef } = context
  return { defaultDataRef }
}

export function CurrrentDataContext() {
  const context = useContext(ElementContext)
  const { currentData, setCurrentData } = context
  return { currentData, setCurrentData }
}

export function SelectedKeysContext() {
  const context = useContext(ElementContext)
  const { selectedKeys, setSelectedKeys } = context
  return { selectedKeys, setSelectedKeys }
}

export function IsSelectedAllContext() {
  const context = useContext(ElementContext)
  const { isSelectedAll, setIsSelectedAll } = context
  return { isSelectedAll, setIsSelectedAll }
}

export function FilterDataContext() {
  const context = useContext(ElementContext)
  const { totalToDelete, filterToDelete } = context
  return { totalToDelete, filterToDelete }
}

export function FilterValuesContext() {
  const context = useContext(ElementContext)
  const { isSameValue, totalKeys } = context
  return { isSameValue, totalKeys }
}
