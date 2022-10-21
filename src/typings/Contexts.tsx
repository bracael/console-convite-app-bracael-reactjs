import { Dispatch, SetStateAction } from 'react'
import { User } from 'firebase/auth'
import { SBusiness } from 'components/QuickStart/types'

// types and interfaces
import { TModalLogout, TOverlay } from './App'
import { TOverload } from 'components/QuickStart/types'

export type WithChildren = { children: React.ReactNode }

export type ProviderAuth = WithChildren & AuthContextProps
export type ProviderInitialize = WithChildren & ContextInitialize
export type ProviderApp = WithChildren & ContextApp
export type ProviderOverload = WithChildren & ContextOverload

interface AuthContextProps {
  isAuthenticated: boolean
}

export interface ContextAuth {
  isAuthenticated: boolean
  user: User | null
}

export interface ContextInitialize {
  businessKey: string
  setBusinessKey: Dispatch<SetStateAction<string>>
  business: SBusiness
  setBusiness: Dispatch<SetStateAction<SBusiness>>
}

export interface ContextApp {
  isOpenNow: boolean
  setIsOpenNow: Dispatch<SetStateAction<boolean>>
  pushmenu: boolean
  setPushmenu: Dispatch<SetStateAction<boolean>>
  overlay: TOverlay
  setOverlay: Dispatch<SetStateAction<TOverlay>>
  modalLogout: TModalLogout
  setModalLogout: Dispatch<SetStateAction<TModalLogout>>
}

export interface ContextOverload {
  overload: TOverload
  setOverload: Dispatch<SetStateAction<TOverload>>
}
