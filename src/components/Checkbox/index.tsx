// styles
import * as S from './styles'

// types and interfaces
import { CheckboxProps } from './types'

const Checkbox = ({
  checked = false,
  disabled = false,
  onClick,
  label,
  size = 18
}: CheckboxProps) => {
  return (
    <S.Container>
      <S.Checkbox
        type="checkbox"
        name="list"
        readOnly
        disabled={disabled}
        checked={checked}
        size={size}
      />
      <S.Label onClick={() => onClick()} size={size}>
        <section></section>
        {!!label && <span>{label}</span>}
      </S.Label>
    </S.Container>
  )
}

export default Checkbox
