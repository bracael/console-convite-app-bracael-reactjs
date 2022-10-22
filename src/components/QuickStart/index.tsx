import { useState, useEffect, useRef } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import Cookies from 'js-cookie'

// contexts and others
import InitializeProvider from 'contexts/Initialize'
import OverloadProvider from 'contexts/Overload'
import AuthProvider from 'contexts/Auth'
import { auth } from 'services/server'

// components JSX
import Data from './data'
import Skeleton from './skeleton'
import Overload from 'components/Overload'

// styles
import StyledToastContainer from 'styles/toastify'

// types and interfaces
import type { TOverload, TAuthenticated, SBusiness } from './types'

// global css imports from lib
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'

const DataInitialize = () => {
  const defaultId = atob(sessionStorage.currentCustomer || '')

  const businessRef = useRef(false)
  const [overload, setOverload] = useState<TOverload>({})
  const [onAuth, setOnAuth] = useState<TAuthenticated>(undefined)
  const [businessKey, setBusinessKey] = useState(defaultId)
  const [business, setBusiness] = useState<SBusiness>({})

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setOnAuth(!!user)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (businessRef.current) {
      const currentData = btoa(businessKey)
      sessionStorage.setItem('currentCustomer', currentData)
    } else businessRef.current = true
  }, [businessKey])

  useEffect(() => {
    if (onAuth === false) {
      setBusinessKey('')
      setBusiness({})
      sessionStorage.removeItem('currentCustomer')
      Cookies.remove('auth.token')
    }
  }, [onAuth])

  return (
    <InitializeProvider
      {...{
        businessKey,
        setBusinessKey,
        business,
        setBusiness
      }}
    >
      {typeof onAuth === 'boolean' ? (
        <AuthProvider isAuthenticated={onAuth || false}>
          <OverloadProvider {...{ overload, setOverload }}>
            <Data />
            <Overload />
            <StyledToastContainer />
          </OverloadProvider>
        </AuthProvider>
      ) : (
        <Skeleton />
      )}
    </InitializeProvider>
  )
}

export default DataInitialize
