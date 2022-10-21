// styles
import * as S from './styles'

// types and interfaces
import { InputProps } from './types'

const Input = ({
  label,
  value,
  size = 'medium',
  status = false,
  ref,
  onChange,
  disabled = false,
  type,
  style,
  placeholder,
  onFocus,
  onBlur
}: InputProps) => {
  const maxWidth = style?.maxWidth as string

  return (
    <S.Wrapper maxWidth={maxWidth}>
      <S.Input
        value={value}
        status={status}
        sizeInput={size}
        {...(ref ? { ref } : {})}
        {...(onChange ? { onChange } : { readOnly: true })}
        {...(disabled ? { disabled } : {})}
        {...(type ? { type } : {})}
        {...(style ? { style } : {})}
        {...(placeholder ? { placeholder } : {})}
        {...(onFocus ? { onFocus } : {})}
        {...(onBlur ? { onBlur } : {})}
      />
      {!!label && <S.Label>{label}</S.Label>}
    </S.Wrapper>
  )
}

export default Input
