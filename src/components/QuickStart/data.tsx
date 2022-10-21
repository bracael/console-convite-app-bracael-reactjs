// contexts and others
import { InitializeContext } from 'contexts/Initialize'
import { AuthContext } from 'contexts/Auth'

// components JSX
import FetchInitialize from './initialize'
import Choose from 'templates/Choose'
import Login from 'templates/Login'

const DataQuickStart = () => {
  const { businessKey } = InitializeContext()
  const { isAuthenticated } = AuthContext()

  if (isAuthenticated && !businessKey) return <Choose />
  else if (isAuthenticated) return <FetchInitialize />
  else return <Login />
}

export default DataQuickStart
