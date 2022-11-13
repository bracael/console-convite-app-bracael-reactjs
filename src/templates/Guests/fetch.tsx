/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAsync, PromiseFn } from 'react-async'

// contexts and others
import { InitializeContext } from 'contexts/Initialize'
import api from 'app/axios'

// components JSX
import Data from './data'
import Skeleton from './skeleton'

// types and interfaces
import { TFetchPerson } from './types'

const fetchPerson: PromiseFn<TFetchPerson> = async ({ business }) => {
  const fetchUrl = `pagination_invites?business=${business}`
  return api.get(fetchUrl).then((data) => data.data)
}

function AsyncHome() {
  const { businessKey } = InitializeContext()

  const { data, error } = useAsync({
    promiseFn: fetchPerson,
    business: businessKey
  })

  if (error) return <div>{error.message}</div>
  if (data) return <Data {...{ data }} />
  return <Skeleton />
}

export default AsyncHome
