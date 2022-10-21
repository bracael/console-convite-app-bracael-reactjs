export type WithChildren = { children: React.ReactNode }

export type CreatePasswordProps = {
  currentInvite: string
}

export type InvitePublicProps = {
  email: string
}

export type DataCreatePasswordProps = {
  data: InvitePublicProps
}

export type PostUserByEmailProps = {
  status: boolean
}

export type CreatePasswordProvider = WithChildren & ICreatePasswordContext

export interface ICreatePasswordContext {
  currentInvite: string
}

export type TStrength = 'WEAK' | 'STRONG' | 'MIDDLE'
