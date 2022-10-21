import * as S from './styles'

import { ButtonProps } from './types'

const Button = ({
  children,
  value,
  type = 'button',
  size = 'normal',
  variant = 'normal',
  onClick,
  disabled = false,
  maxWidth
}: ButtonProps) => (
  <S.Content
    type={type}
    size={size}
    variant={variant}
    disabledColor={disabled}
    onClick={() => onClick && onClick()}
    maxWidth={maxWidth}
  >
    {!!children && children}
    <S.Text>{value}</S.Text>
  </S.Content>
)

export default Button
