/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

// contexts and others
import { AuthContext } from 'contexts/Auth'
import { OverloadContext } from 'contexts/Overload'
import { auth } from 'services/server'

// componensts JSX
import Button from 'components/Button'

// icons JSX
import { Eye as IconEye } from '@styled-icons/ionicons-outline/Eye'
import { EyeOff as IconEyeOff } from '@styled-icons/ionicons-outline/EyeOff'

// styles
import * as S from './styles'

// types and interfaces
import { SignInProps } from './types'

const Login = () => {
  const { setOverload } = OverloadContext()

  const clickRef = useRef(true)
  const [useToggle, setToggle] = useState(false)
  const [signIn, setSignIn] = useState<SignInProps>({})
  const { email = '', password = '' } = signIn

  function validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function validatePass(pass: string) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
    return re.test(String(pass))
  }

  // NOTE: Verificar senha
  const isValid = [
    validateEmail(email),
    password.length >= 6,
    validatePass(password)
  ]

  const handleSubmit = () => {
    if (isValid.every((val) => !!val)) {
      if (clickRef.current) {
        setOverload({ status: true })
        clickRef.current = false

        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success('Seja bem vindo!')
          })
          .catch(() => {
            toast.error('E-mail ou senha não encontrados!')
          })
          .finally(function () {
            setOverload({ status: false })
            clickRef.current = true
          })
      }
    } else {
      if (!email) {
        toast.warn('Digite seu e-mail')
      } else if (!validateEmail(email)) {
        toast.warn('E-mail inválido')
      } else if (!password) {
        toast.warn('Digite sua senha')
      } else if (!validatePass(password)) {
        toast.warn('Senha inválida')
      } else {
        toast.warn('Verifique todos os campos')
      }
    }
  }

  const inputFn = (value: string, property: keyof SignInProps) => {
    setSignIn((prevState) => ({
      ...prevState,
      [property]: value
    }))
  }

  const title = 'Login'

  useEffect(() => {
    // FIXME: Metatags
    document.title = `${title} - Convite App`
  }, [])

  return (
    <S.Content>
      <S.Main>
        <S.Form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <S.Master>
            <div>
              {/* <img src="/img/codecoast_104x60.png" height="40" /> */}
            </div>
            <S.Text>Use uma conta Convite App</S.Text>
          </S.Master>
          <S.Group>
            <S.Input
              type="email"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              hasText={!!email}
              onChange={(event) => inputFn(event.target.value, 'email')}
              value={email}
            />
            <S.Label>E-mail</S.Label>
          </S.Group>
          <S.Group>
            <S.Input
              type={useToggle ? 'text' : 'password'}
              hasText={!!password}
              onChange={(event) => inputFn(event.target.value, 'password')}
              value={password}
            />
            <S.Trigger
              type="button"
              onClick={() => setToggle((prevState) => !prevState)}
            >
              {useToggle ? <IconEyeOff /> : <IconEye />}
            </S.Trigger>
            <S.Label>Senha</S.Label>
          </S.Group>
          <S.Bottom>
            <div />
            {/* <Button
              variant="simple"
              size="normal"
              value="Esqueceu a sua senha?"
            /> */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              value="Fazer login"
              disabled={!isValid.every((val) => !!val)}
              onClick={() => handleSubmit()}
            />
          </S.Bottom>
        </S.Form>
      </S.Main>
    </S.Content>
  )
}

export default Login
