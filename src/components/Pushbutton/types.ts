export type PushbuttonProps = {
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  currentRef?: React.RefObject<HTMLButtonElement>
  role?: string
  useWidth?: string | number
  useHeight?: string | number
  borderRadius?: string | number
}
