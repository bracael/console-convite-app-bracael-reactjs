// contexts and others
import { ValuesContext } from 'contexts/FamilyId'

// components JSX
import Input from 'components/Input'
import Button from 'components/Button'
import Pushbutton from 'components/Pushbutton'

// icons JSX
import { Trash as IconTrash } from '@styled-icons/ionicons-outline/Trash'

// utils
import { randomId } from 'utils/tools'

// styles
import * as S from './styles'

const FamilyName = () => {
  const { values, setValues } = ValuesContext()

  const currentPeoples = values.peoples || []

  const handleAddPerson = () => {
    // const peoples =

    // adicionar name, e o array peopes com a data de expiração
    // vamos criar o objeto e lista objetos como segmentações
    // com opção para abrir lista

    setValues((prevState) => ({
      ...prevState,
      peoples: [
        ...(prevState.peoples || []),
        ...[{ id: String(randomId(10)), name: '' }]
      ]
    }))
  }

  const inputFn = (value: string, id: string) => {
    const peoples = [...(values.peoples ?? [])]
    const index = peoples.findIndex((a) => a.id === id)
    peoples[index].name = value

    setValues((prevState) => ({
      ...prevState,
      peoples
    }))
  }

  const handleDeleteOne = (id: string) => {
    const peoples = [...(values.peoples ?? [])]
    const index = peoples.findIndex((a) => a.id === id)
    peoples.splice(index, 1)

    setValues((prevState) => ({
      ...prevState,
      peoples
    }))
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Head>
          <S.Text>Total de convidados:</S.Text>
          <S.Circle>{currentPeoples.length}</S.Circle>
        </S.Head>
        <Button
          value="Nova pessoa"
          variant="contained"
          size="x-small"
          onClick={() => handleAddPerson()}
        />
      </S.Header>
      <S.Main>
        {(() => {
          if (currentPeoples.length) {
            return (
              <S.Collection>
                {currentPeoples.map(({ id, name }, index) => (
                  <S.Li key={id}>
                    <Input
                      value={name}
                      size="small"
                      label="Nome do convidado"
                      onChange={(e) => inputFn(e.currentTarget.value, id)}
                      status={!!name}
                    />
                    {index !== 0 && (
                      <Pushbutton onClick={() => handleDeleteOne(id)}>
                        <IconTrash size={18} />
                      </Pushbutton>
                    )}
                  </S.Li>
                ))}
              </S.Collection>
            )
          } else return <div>Adiciona pessoas para começar...</div>
        })()}
      </S.Main>
    </S.Wrapper>
  )
}

export default FamilyName
