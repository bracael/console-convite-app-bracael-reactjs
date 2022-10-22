import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

// contexts and others
import { CloseContext } from 'components/Modals/Default/context'
import { auth } from 'services/server'

// components JSX
import Button from 'components/Button'

// icons JSX
import { Outlet as IconOutlet } from '@styled-icons/material/Outlet'

// styles
import * as S from './styles'
import theme from 'styles/theme'

const ModalLogout = () => {
  const history = useHistory()

  const { close } = CloseContext()

  const closingTheSession = async () => {
    return auth.signOut()
  }

  const handleLogout = () => {
    closingTheSession()
      .then(() => {
        toast.info('Esperamos te ver em breve!')
        history.push('/')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <S.Wrapper>
      <S.Main>
        <S.Icon>
          <IconOutlet size={90} fill={theme.colors.primary} />
        </S.Icon>
        <S.Message>
          <S.Suptext>Ei! Você está saindo...</S.Suptext>
          <S.Subtext>Tem certeza?</S.Subtext>
        </S.Message>
      </S.Main>
      <S.Footer>
        <Button
          value="Oops! Foi um engano..."
          size="small"
          variant="contained"
          onClick={() => close()}
        />
        <Button
          value="Sim, encerrar sessão!"
          size="small"
          variant="outlined"
          onClick={() => handleLogout()}
        />
      </S.Footer>
    </S.Wrapper>
  )
}

export default ModalLogout
