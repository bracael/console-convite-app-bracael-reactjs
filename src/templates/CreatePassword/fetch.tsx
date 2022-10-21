import { useAsync, PromiseFn } from 'react-async'

// contexts and others
import { InviteContext } from './context'
import api from 'app/axios'

// components JSX
import Data from './data'
import Skeleton from './skeleton'
import Error from './error'

// types and interfaces
import { InvitePublicProps } from './types'

const fetchPerson: PromiseFn<InvitePublicProps> = async ({ currentInvite }) => {
  const fetchUrl = `invite?id=${currentInvite}`
  return api.get(fetchUrl).then((data) => data.data)
}

function AsyncProductId() {
  const { currentInvite } = InviteContext()

  const { data, error } = useAsync({
    promiseFn: fetchPerson,
    currentInvite
  })

  if (error) return <Error />
  if (data) return <Data {...{ data }} />
  return <Skeleton />
}

export default AsyncProductId
