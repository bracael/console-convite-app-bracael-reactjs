import { useEffect } from 'react'
import { useAsync, PromiseFn } from 'react-async'
import Cookies from 'js-cookie'

// contexts and others
import { InitializeContext } from 'contexts/Initialize'
import { AuthContext } from 'contexts/Auth'
import api from 'app/axios'

// components JSX
import App from 'pages/_app'
import Skeleton from './skeleton'

// types and interfaces
import { TResponseInitializePayload } from 'typings/App'

const fetchPerson: PromiseFn<TResponseInitializePayload> = async ({
  businessKey,
  uid
}) => {
  const fetchUrl = `authorize?uid=${uid}&business=${businessKey}`
  return await api.get(fetchUrl).then((data) => data.data)
}

function FetchConnect() {
  const { businessKey } = InitializeContext()
  const { uid } = AuthContext()

  const { data, error } = useAsync({
    promiseFn: fetchPerson,
    businessKey,
    uid
  })

  useEffect(() => {
    if (data) {
      const token = data.token
      Cookies.set('auth.token', token, { expires: 1 })
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  console.log('data', data)

  if (error) return <div>{error.message}</div>
  if (data) return <App data={data.data} />
  return <Skeleton />
}

export default FetchConnect
