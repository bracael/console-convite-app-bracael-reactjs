import React, { createContext, useContext } from 'react'

import { ContextApp, ProviderApp } from 'typings/Contexts'

const ElementContext = createContext<ContextApp>(null!)

export default function ElementProvider({
  children,
  pushmenu,
  setPushmenu,
  overlay,
  setOverlay,
  modalLogout,
  setModalLogout
}: ProviderApp) {
  return (
    <ElementContext.Provider
      value={{
        pushmenu,
        setPushmenu,
        overlay,
        setOverlay,
        modalLogout,
        setModalLogout
      }}
    >
      {children}
    </ElementContext.Provider>
  )
}

export function PushmenuContext() {
  const context = useContext(ElementContext)
  const { pushmenu, setPushmenu } = context
  return { pushmenu, setPushmenu }
}

export function OverlayContext() {
  const context = useContext(ElementContext)
  const { overlay, setOverlay } = context
  return { overlay, setOverlay }
}

export function ModalLogoutContext() {
  const context = useContext(ElementContext)
  const { modalLogout, setModalLogout } = context
  return { modalLogout, setModalLogout }
}
