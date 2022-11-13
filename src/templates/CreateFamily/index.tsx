import { useState } from 'react'

// contexts and others
import FamilyIdProvider from 'contexts/FamilyId'

// contexts and others
import FamilyEdit from 'components/FamilyEdit'

// styles
import * as S from './styles'

// types and interfaces
import { TInvite } from 'typings/App'

const CreateFamily = () => {
  const data: TInvite = {}

  const [values, setValues] = useState<TInvite>({})

  return (
    <FamilyIdProvider {...{ data, values, setValues }}>
      <S.Wrapper>
        <S.Content>
          <S.Container>
            <FamilyEdit />
          </S.Container>
        </S.Content>
      </S.Wrapper>
    </FamilyIdProvider>
  )
}

export default CreateFamily
