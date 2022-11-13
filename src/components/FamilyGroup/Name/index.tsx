// contexts and others
import { ValuesContext } from 'contexts/FamilyId'

// components JSX
import Input from 'components/Input'

// styles
import * as S from './styles'

// types and interfaces
import { TProperty } from './types'

const FamilyPeoples = () => {
  const { values, setValues } = ValuesContext()

  const inputFn = (value: string, property: TProperty) => {
    setValues((prevState) => ({
      ...prevState,
      [property]: value
    }))
  }

  return (
    <S.Wrapper>
      <Input
        size="small"
        value={values.name || ''}
        onChange={(e) => inputFn(e.currentTarget.value, 'name')}
        label="Nome da família"
        status={!!values.name}
      />
    </S.Wrapper>
  )
}

export default FamilyPeoples
