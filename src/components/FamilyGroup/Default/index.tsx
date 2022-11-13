// components JSX
import FamilyName from 'components/FamilyGroup/Name'
import FamilyPeoples from 'components/FamilyGroup/Peoples'

// styles
import * as S from './styles'

const FamilyGroupDefault = () => {
  return (
    <S.Wrapper>
      <FamilyName />
      <FamilyPeoples />
    </S.Wrapper>
  )
}

export default FamilyGroupDefault
