type TBusiness = {
  isOpenNow: boolean
}

export type AppProps = {
  data: {
    isOpenNow: boolean
  }
}

export type TResponseInitializePayload = {
  token: string
  admin?: boolean
  data: TBusiness
}

export type SOverlay = {
  status?: boolean
}

export type SModalLogout = {
  status?: boolean
}
