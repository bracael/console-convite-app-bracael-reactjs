import { Dispatch, SetStateAction } from 'react'

export type WithChildren = { children: React.ReactNode }

export type ProviderGuests = WithChildren & ContextGuests

export type ContextGuests = {
  fetcUpdate: number
  setFetcUpdate: Dispatch<SetStateAction<number>>
}

export type TGuest = {
  expireIn?: string
  id: string
  name: string
  peoples: {
    id: string
    name: string
  }[]
}

export type TGuests = TGuest[]

export type TFetchPerson = {
  total: number
  models: TGuests
  initial: number
  ending: number
}

export type TGuestsKeys = (arr: TGuests) => string[]

export type DataHomeProps = {
  data: TFetchPerson
}
