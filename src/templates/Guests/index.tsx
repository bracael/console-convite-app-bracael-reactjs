import { useState } from 'react'

// contexts and others
import GuestsProvider from './context'

// components JSX
import DataFetch from './fetch'

// styles
import * as S from './styles'

const Guests = () => {
  const [fetcUpdate, setFetcUpdate] = useState(1)

  return (
    <GuestsProvider {...{ fetcUpdate, setFetcUpdate }}>
      <S.Wrapper>
        <DataFetch key={fetcUpdate} />
      </S.Wrapper>
    </GuestsProvider>
  )
}

export default Guests
