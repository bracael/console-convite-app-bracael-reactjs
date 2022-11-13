import { Dispatch, SetStateAction } from 'react'
import { User } from 'firebase/auth'
import { SBusiness } from 'components/QuickStart/types'

// types and interfaces
import { SModalLogout, SOverlay, TInvite } from './App'
import { TOverload } from 'components/QuickStart/types'
import { TGuests } from 'templates/Guests/types'

export type WithChildren = { children: React.ReactNode }

export type ProviderAuth = WithChildren & AuthContextProps
export type ProviderInitialize = WithChildren & ContextInitialize
export type ProviderApp = WithChildren & ContextApp
export type ProviderOverload = WithChildren & ContextOverload
export type ProviderModal = WithChildren & ContextModal
export type ProviderDataGuests = WithChildren & ContextDataGuests
export type ProviderFamilyId = WithChildren & ContextFamilyId

export type ContextModal = {
  close: () => void
}

export interface ContextDataGuests {
  defaultDataRef: React.MutableRefObject<TGuests>
  currentData: TGuests
  setCurrentData: Dispatch<SetStateAction<TGuests>>
  selectedKeys: string[]
  setSelectedKeys: Dispatch<SetStateAction<string[]>>
  isSelectedAll: boolean
  setIsSelectedAll: Dispatch<SetStateAction<boolean>>
  totalToDelete: string[]
  filterToDelete: string[]
  totalKeys: string[]
  isSameValue: boolean
}

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
  pushmenu: boolean
  setPushmenu: Dispatch<SetStateAction<boolean>>
  overlay: SOverlay
  setOverlay: Dispatch<SetStateAction<SOverlay>>
  modalLogout: SModalLogout
  setModalLogout: Dispatch<SetStateAction<SModalLogout>>
}

export interface ContextOverload {
  overload: TOverload
  setOverload: Dispatch<SetStateAction<TOverload>>
}

export interface ContextFamilyId {
  data: TInvite
  values: TInvite
  setValues: Dispatch<SetStateAction<TInvite>>
}
