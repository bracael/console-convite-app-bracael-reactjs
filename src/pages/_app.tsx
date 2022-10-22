import { useState } from 'react'

// contexts and others
import AppProvider from 'contexts/App'

// components JSX
import ModalDefault from 'components/Modals/Default'
import ModalLogout from 'components/Modals/Logout'
import Routers from 'app/routes'

// types and interfaces
import type { AppProps, SModalLogout, SOverlay } from 'typings/App'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = ({ data }: AppProps) => {
  const [pushmenu, setPushmenu] = useState(false)
  const [modalLogout, setModalLogout] = useState<SModalLogout>({})
  const [overlay, setOverlay] = useState<SOverlay>({})

  return (
    <AppProvider
      {...{
        pushmenu,
        setPushmenu,
        overlay,
        setOverlay,
        modalLogout,
        setModalLogout
      }}
    >
      <Routers />
      <ModalDefault state={modalLogout} setState={setModalLogout}>
        <ModalLogout />
      </ModalDefault>
    </AppProvider>
  )
}

export default App
