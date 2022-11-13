import { useHistory } from 'react-router'
import { toast } from 'react-toastify'

// contexts and others
import { ValuesContext } from 'contexts/FamilyId'
import { OverloadContext } from 'contexts/Overload'
import api from 'app/axios'

// components JSX
import DefaultProduct from 'components/FamilyGroup/Default'
import Button from 'components/Button'

// styles
import * as S from './styles'

const FamilyEdit = () => {
  const history = useHistory()

  const { values } = ValuesContext()
  const { setOverload } = OverloadContext()

  const createFamily = async () => {
    const fetchURl = `invite`
    return api.post(fetchURl, values)
  }

  const handleSubmit = () => {
    setOverload({ status: true })
    createFamily()
      .then(() => {
        toast.success('Publicado com sucesso!')
        history.push('/guests')
      })
      .catch(() => {
        toast.error('Falha!')
      })
      .finally(() => {
        setOverload({ status: false })
      })
  }

  return (
    <>
      <S.Menu>
        <div />
        <S.Buttons>
          <Button
            value="Atualizar"
            variant="contained"
            size="x-small"
            customColorStyled={S.Go}
            onClick={() => handleSubmit()}
            maxWidth="96px"
          />
          <Button
            currentColor="#9d9d9d"
            value="Fechar"
            variant="outlined"
            size="x-small"
            maxWidth="80px"
            onClick={() => history.push('/guests')}
          />
        </S.Buttons>
      </S.Menu>
      <DefaultProduct />
    </>
  )
}

export default FamilyEdit
