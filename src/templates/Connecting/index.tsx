import { signOut } from 'firebase/auth'

// contexts and others
import { auth } from 'services/server'

// icons JSX
import { LocalDining as IconLocalDining } from '@styled-icons/material/LocalDining'

// styles
import * as S from './styles'

const Connecting = () => {
  const firebaseSignOut = async () => await signOut(auth)
  const handleUserDisconnect = () => firebaseSignOut()

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Main>
            <IconLocalDining size={80} color="#aaa" />
            <S.Title>Conectando...</S.Title>
          </S.Main>
          <S.Footer>
            <S.Button onClick={() => handleUserDisconnect()}>
              Desconectar
            </S.Button>
          </S.Footer>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Connecting
