import { Dispatch, SetStateAction } from 'react'

type DefaultModal = {
  status?: boolean
}

export type ModalProps = {
  children: React.ReactNode
  validations?: boolean[]
  state: DefaultModal
  setState: Dispatch<SetStateAction<DefaultModal>>
  zIndex?: string
  backgroundColor?: string
  style?: React.CSSProperties
}
