export type ButtonProps = {
  children?: React.ReactNode
  value: string
  type?: 'button' | 'reset' | 'submit'
  variant?: 'normal' | 'contained' | 'outlined' | 'simple'
  size?: 'x-small' | 'small' | 'normal' | 'large'
  onClick?: () => void
  disabled?: boolean
  maxWidth?: string
}
