import { useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

// contexts and others
import { PushmenuContext } from 'contexts/App'

// components JSX
import Pushbutton from 'components/Pushbutton'

// icons JSX
import { Home as IconHome } from '@styled-icons/material/Home'
import { Inbox as IconInbox } from '@styled-icons/material/Inbox'

// styles
import * as S from './styles'

const Pushmenu = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  const statusRef = useRef(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const { pushmenu, setPushmenu } = PushmenuContext()

  const pushRoute = (props: string) => {
    pathname !== props && history.push(props)
    setPushmenu(false)
  }

  useEffect(() => {
    if (statusRef.current && sidebarRef.current) {
      if (pushmenu) {
        sidebarRef.current.style.transform = 'translate3d(0,0,0)'
      } else {
        sidebarRef.current.style.transform = ''
      }
    } else {
      statusRef.current = true
    }
  }, [pushmenu])

  return (
    <S.Wrapper ref={sidebarRef}>
      <S.Handle isOpen={pushmenu}>
        <Pushbutton>
          <i />
        </Pushbutton>
      </S.Handle>
      <S.Pushbox>
        <S.Brand />
        <S.Container>
          <S.Group>
            <S.Li onClick={() => pushRoute('/')}>
              <IconHome size={24} fill="#fff" />
              <S.Text>Área de serviço</S.Text>
            </S.Li>
          </S.Group>
          <S.Group>
            <S.Li onClick={() => pushRoute('/guests')}>
              <IconInbox size={24} fill="#fff" />
              <S.Text>Meus convidados</S.Text>
            </S.Li>
          </S.Group>
          <S.Footer>
            <span>
              BRACAEL 2020 ©<br />
              Todos os direitos reservados.
            </span>
            <span>Painel administrativo para parceiros.</span>
            <span>Last time updated November 5, 2020</span>
          </S.Footer>
        </S.Container>
      </S.Pushbox>
    </S.Wrapper>
  )
}

export default Pushmenu
