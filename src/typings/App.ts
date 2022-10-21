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

export type TOverlay = {
  status?: boolean
}

export type TModalLogout = {
  status?: boolean
}
