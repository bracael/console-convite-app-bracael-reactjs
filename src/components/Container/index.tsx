// components JSX
import Pushmenu from 'components/Pushmenu'
import Header from 'components/Header'

// styles
import * as S from './styles'

// types and interfaces
import { ContainerProps } from './types'

const Container = ({ children, title }: ContainerProps) => {
  return (
    <>
      <Pushmenu />
      <S.Container>
        <Header title={title} />
        {children}
      </S.Container>
    </>
  )
}

export default Container
