// contexts and others
import { InitializeContext, BusinessContext } from 'contexts/Initialize'

// icons JSX
// import IconForward from 'app/icons/Forward'

// styles
import * as S from './styles'

// type and interfaces
import { ChooseProps, THandleSetBusinessProps } from './types'

const Choose = ({ data }: ChooseProps) => {
  const { setBusinessKey } = InitializeContext()
  const { setBusiness } = BusinessContext()

  console.log(data)

  const handleSetBusiness = (current: THandleSetBusinessProps) => {
    setBusinessKey(current.id)
    setBusiness({
      name: current.name,
      description: current.description
    })
  }

  return (
    <S.Main>
      <S.Head>
        <S.Brand>
          <img src="/img/codecoast_104x60_gray.png" width="84" />
        </S.Brand>
        {!!data.length && <S.Title>Selecione a Loja para continuar</S.Title>}
      </S.Head>
      <S.Mainly>
        <S.Collection>
          {data.length ? (
            data.map(({ name, description, id }) => {
              return (
                <S.Li
                  key={id}
                  onClick={() => handleSetBusiness({ name, description, id })}
                >
                  <S.Gravatar></S.Gravatar>
                  <S.Details>
                    <S.Name>{name}</S.Name>
                    {!!description && (
                      <S.Description>{description}</S.Description>
                    )}
                  </S.Details>
                  <S.Triggers>
                    {/*  */}
                    {/* <IconForward size={16} /> */}
                  </S.Triggers>
                </S.Li>
              )
            })
          ) : (
            <S.Empty>
              <span>Não há nenhum business, por enquanto</span>
            </S.Empty>
          )}
        </S.Collection>
      </S.Mainly>
    </S.Main>
  )
}

export default Choose
