import { HTMLInputTypeAttribute } from 'react'
import { CSSProperties } from 'styled-components'

export type InputProps = {
  value: string
  status?: boolean
  ref?: React.RefObject<HTMLInputElement>
  size?: 'small' | 'medium'
  label?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  type?: HTMLInputTypeAttribute
  style?: CSSProperties
  placeholder?: string
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}
