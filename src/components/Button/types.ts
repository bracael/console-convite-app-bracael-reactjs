import * as Styled from 'styled-components'

export type ButtonProps = {
  children?: React.ReactNode
  value: string
  type?: 'button' | 'reset' | 'submit'
  variant?: 'normal' | 'contained' | 'outlined' | 'simple'
  size?: 'x-small' | 'small' | 'normal' | 'large'
  onClick?: () => void
  disabled?: boolean
  maxWidth?: string
  currentColor?: string
  customColorStyled?: Styled.StyledComponent<
    'button',
    Styled.DefaultTheme,
    // eslint-disable-next-line @typescript-eslint/ban-types
    {},
    never
  >
}
