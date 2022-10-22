// styles
import * as S from './styles'

const EmptySearchNeighborhood = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Nenhuma pessoa encontrada.</S.Title>
        <S.Description>
          Não encontramos nenhum resultado com base em sua pesquisa.
        </S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default EmptySearchNeighborhood
