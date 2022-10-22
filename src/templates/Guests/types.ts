import { Dispatch, SetStateAction } from 'react'

export type WithChildren = { children: React.ReactNode }

export type ProviderGuests = WithChildren & ContextGuests

export type ContextGuests = {
  fetcUpdate: number
  setFetcUpdate: Dispatch<SetStateAction<number>>
}

type TGuest = {
  id: string
  name: string
}

export type TGuests = TGuest[]

export type TFetchPerson = TGuests

export type TGuestsKeys = (arr: TGuests) => string[]

export type DataHomeProps = {
  data: TFetchPerson
}
