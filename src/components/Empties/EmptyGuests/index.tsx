import { Leaf as IconLeaf } from '@styled-icons/ionicons-outline/Leaf'

// styles
import * as S from './styles'

const EmptyNeighborhood = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Head>
          <IconLeaf size={48} />
          <S.Title>Vamos começar!</S.Title>
        </S.Head>
        <S.Description>
          Adicione pessoas para gerenciar seus convites.
        </S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default EmptyNeighborhood
