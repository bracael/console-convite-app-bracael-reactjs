export type CustomerValuesProps = {
  id: string
  name: string
  description: string
}

export type CustomerProps = {
  token: string
  customers: CustomerValuesProps[]
  admin: boolean
}

export type ChooseProps = {
  isAdmin: boolean
  data: CustomerProps['customers']
}

export type ErrorChooseProps = {
  error: Error
}

export type THandleSetBusinessProps = {
  name: string
  description: string
  id: string
}
