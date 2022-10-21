import { useAsync, PromiseFn } from 'react-async'
import Cookies from 'js-cookie'

// contexts and others
import { AuthContext } from 'contexts/Auth'
import api from 'app/axios'

// components JSX
import Data from './data'
import Skeleton from './skeleton'
import Error from './error'

// types and interfaces
import { CustomerProps } from './types'

const fetchPerson: PromiseFn<CustomerProps> = async ({ uid }) => {
  const fetchUrl = `customers?uid=${uid}`
  return api.get(fetchUrl).then((data) => data.data)
}

function AsyncProductId() {
  const { uid } = AuthContext()

  const { data, error } = useAsync({ promiseFn: fetchPerson, uid })

  if (data) {
    const token = data.token
    Cookies.set('auth.token', token, { expires: 1 })
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  if (error) return <Error error={error} />
  if (data) return <Data isAdmin={data.admin || false} data={data.customers} />
  return <Skeleton />
}

export default AsyncProductId
