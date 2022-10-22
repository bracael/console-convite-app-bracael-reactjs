// styles
import * as S from './styles'

import { PushbuttonProps } from './types'

const Pushbutton = ({
  children,
  type = 'button',
  currentRef,
  onClick,
  useWidth,
  useHeight,
  borderRadius
}: PushbuttonProps) => (
  <S.Wrapper
    type={type}
    {...(currentRef ? { ref: currentRef } : {})}
    {...(typeof useWidth === 'undefined' ? {} : { width: useWidth })}
    {...(typeof useHeight === 'undefined' ? {} : { height: useHeight })}
    {...(typeof borderRadius === 'undefined' ? {} : { borderRadius })}
    onClick={() => onClick && onClick()}
  >
    {!!children && children}
  </S.Wrapper>
)

export default Pushbutton
