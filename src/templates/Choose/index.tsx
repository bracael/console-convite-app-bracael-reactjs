import { useEffect } from 'react'

// components JSX
import DataFetch from './fetch'

// styles
import * as S from './styles'

const Choose = () => {
  const title = 'Meu business'

  useEffect(() => {
    // FIXME: Metatags
    document.title = `${title} - Bracael`
  }, [])

  return (
    <S.Wrapper>
      <S.Content>
        <DataFetch />
      </S.Content>
      <S.Footer>
        <S.Credits>
          <S.Named>© 2022 Bracael</S.Named>
          <S.Copyright>Todos os direitos reservados</S.Copyright>
        </S.Credits>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Choose
