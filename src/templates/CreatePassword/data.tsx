import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

// contexts and others
import { OverloadContext } from 'contexts/Overload'
import { isPassword, strengthPassword } from 'utils/tools'

// components JSX
import Button from 'components/Button'
import Input from 'components/Input'
import Checkbox from 'components/Checkbox'
import api from 'app/axios'

// styles
import * as S from './styles'

// types and interfaces
import {
  DataCreatePasswordProps,
  PostUserByEmailProps,
  TStrength
} from './types'

const DataCreatePassword = ({ data }: DataCreatePasswordProps) => {
  const history = useHistory()

  const { setOverload } = OverloadContext()

  const clickRef = useRef(true)
  const [password, setPassword] = useState('')
  const [statusBox, setStatusBox] = useState(false)
  const [strength, setStrength] = useState<TStrength>('WEAK')

  const handlePassword = (value: string) => {
    setPassword(value)
    setStrength(strengthPassword(value))
  }

  const passwordValidation = {
    wordsUp: /[a-z]+/,
    wordsDown: /[A-Z]+/,
    numbers: /[0-9]+/,
    special: /[!@#$%^&*]+/
  }

  const validationKeys = [isPassword(password), strength === 'STRONG']
  const validationValue = validationKeys.every(Boolean)

  const handleTogglePassword = () => {
    setStatusBox((prevState) => !prevState)
  }

  const resetPassword = async () => {
    const fetchUrl = 'create_account'
    return await api
      .get<PostUserByEmailProps>(fetchUrl, {
        auth: { username: data.email, password }
      })
      .then((data) => data.data)
  }

  const handleSubmitPassword = () => {
    if (clickRef.current) {
      clickRef.current = false

      if (validationValue) {
        setOverload({ status: true })

        resetPassword()
          .then(({ status }) => {
            if (status) {
              toast.success('Conta criada com sucesso!')
              history.push('/')
            } else {
              toast.error('Falha ao criar sua conta')
            }
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            clickRef.current = true
            setOverload({ status: false })
          })
      } else {
        if (!password.length) {
          toast.warn('Sua Senha é obrigatório')
        } else if (!passwordValidation.wordsUp.test(password)) {
          toast.warn('Use no mínimo 1 letra maiscula')
        } else if (!passwordValidation.wordsDown.test(password)) {
          toast.warn('Use no mínimo 1 letra minúscula')
        } else if (!passwordValidation.numbers.test(password)) {
          toast.warn('Use no mínimo 1 número')
        } else if (!passwordValidation.special.test(password)) {
          toast.warn('Use no mínimo 1 caractere especial')
        } else if (!(password.length >= 8)) {
          toast.warn('Use no mínimo 8 caracteres')
        } else {
          toast.warn('Senha inválida')
        }
        clickRef.current = true
      }
    }
  }

  const currentLevel = strength === 'STRONG' ? 2 : strength === 'MIDDLE' ? 1 : 0

  return (
    <S.Content autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <S.Brand>
        <img src="/img/brand/bracael-logo.svg" height="40" />
      </S.Brand>
      <S.Header>
        <S.Title>Seja bem vindo a Bracael!</S.Title>
        <S.Description>Escolha uma senha para você</S.Description>
      </S.Header>
      <S.Main>
        <Input
          value={data.email}
          label="E-mail"
          status={true}
          size="small"
          disabled={true}
        />
        <S.Group>
          <S.Flex>
            <Input
              type={statusBox ? 'text' : 'password'}
              value={password || ''}
              label="Digite sua senha"
              onChange={(e) => handlePassword(e.target.value)}
              status={!!password}
            />
            <S.GropuStatus>
              <S.Status currentLevel={currentLevel} />
            </S.GropuStatus>
          </S.Flex>
          <div>
            <S.Text>
              Use oito ou mais caracteres com uma combinação de letras, números
              e símbolos
            </S.Text>
          </div>
        </S.Group>
      </S.Main>
      <S.Footer>
        <Checkbox
          onClick={() => handleTogglePassword()}
          checked={statusBox}
          label="Mostrar senha"
        />
        <Button
          type="submit"
          value="Criar conta"
          variant="contained"
          disabled={!validationValue}
          onClick={() => handleSubmitPassword()}
        />
      </S.Footer>
    </S.Content>
  )
}

export default DataCreatePassword
