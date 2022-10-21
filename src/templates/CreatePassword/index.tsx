// contexts and others
import CreatePasswordProvider from './context'

// components JSX
import DataFetch from './fetch'

// styles
import * as S from './styles'

// types and interfaces
import { CreatePasswordProps } from './types'

const CreatePassword = ({ currentInvite }: CreatePasswordProps) => {
  return (
    <CreatePasswordProvider {...{ currentInvite }}>
      <S.Wrapper>
        <S.Container>
          <DataFetch />
        </S.Container>
      </S.Wrapper>
    </CreatePasswordProvider>
  )
}

export default CreatePassword
