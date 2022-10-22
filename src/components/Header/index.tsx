// contexts and others
import { ModalLogoutContext } from 'contexts/App'

// components JSX
import Pushbutton from 'components/Pushbutton'

// icons JSX
import { PersonCircle as IconPersonCircle } from '@styled-icons/ionicons-outline/PersonCircle'

// styles
import * as S from './styles'

// types and interfaces
import { HeaderProps } from './types'

const Header = ({ title }: HeaderProps) => {
  const { setModalLogout } = ModalLogoutContext()

  const handleOpenOverlay = () => setModalLogout({ status: true })

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Control>
        <Pushbutton onClick={() => handleOpenOverlay()}>
          <IconPersonCircle size={24} fill="#777777" />
        </Pushbutton>
      </S.Control>
    </S.Wrapper>
  )
}

export default Header
