import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

// contexts and others
import {
  IsSelectedAllContext,
  SelectedKeysContext,
  FilterValuesContext
} from 'contexts/DataGuests'

// components JSX
import Pushbutton from 'components/Pushbutton'
import Checkbox from 'components/Checkbox'

// icons JSX
import { Trash as IconTrash } from '@styled-icons/ionicons-outline/Trash'
import { ChevronDown as IconChevronDown } from '@styled-icons/ionicons-outline/ChevronDown'

// styles
import * as S from './styles'

// types and interfaces
import { CardGuestProps, TMoreInfo } from './types'

const CardGuest = ({ id, name, peoples }: CardGuestProps) => {
  const { isSelectedAll, setIsSelectedAll } = IsSelectedAllContext()
  const { selectedKeys, setSelectedKeys } = SelectedKeysContext()
  const { isSameValue, totalKeys } = FilterValuesContext()

  const expandRef = useRef<HTMLDivElement>(null)
  const [expandCard, setExpandCar] = useState<TMoreInfo>({})

  const handlerSelectModel = () => {
    if (isSelectedAll || isSameValue) {
      const currentKeys = [...totalKeys]
      const index = currentKeys.findIndex((currentId) => currentId === id)
      currentKeys.splice(index, 1)

      setIsSelectedAll(false)
      setSelectedKeys(currentKeys)
    } else {
      if (selectedKeys.includes(id)) {
        // NOTE: Em caso de existe, DESMARQUE!
        const assoc = [...selectedKeys]
        assoc.splice(assoc.indexOf(id), 1)
        setSelectedKeys(assoc)
      } else {
        // NOTE: Em caso de não existir, SELECIONAR!
        const assoc = [...selectedKeys]
        assoc.push(id)
        setSelectedKeys(assoc)
      }
    }
  }

  useEffect(() => {
    if (expandRef.current) {
      if (expandCard.status) {
        gsap.to(expandRef.current, {
          duration: 0.2,
          height: 'auto',
          opacity: 1
        })
      } else if (expandCard.status === false) {
        gsap.to(expandRef.current, {
          duration: 0.2,
          height: 0,
          opacity: 0,
          onComplete: () => setExpandCar({})
        })
      }
    }
  }, [expandCard])

  const handleDeleteOne = () => {
    //
  }

  const handleMoreInfo = () => {
    if (expandRef.current) {
      setExpandCar((prevState) => ({ status: !prevState.status }))
    }
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Checkbox>
          <Checkbox
            size={16}
            checked={isSelectedAll || selectedKeys.includes(id)}
            onClick={() => handlerSelectModel()}
          />
        </S.Checkbox>
        <S.Main>
          <S.Texts>
            <S.Name>{name}</S.Name>
          </S.Texts>
          <S.Buttons role="tablelist">
            <Pushbutton onClick={() => handleDeleteOne()}>
              <IconTrash size={18} />
            </Pushbutton>
            <Pushbutton onClick={() => handleMoreInfo()}>
              <IconChevronDown size={18} style={{ marginTop: '3px' }} />
            </Pushbutton>
          </S.Buttons>
        </S.Main>
      </S.Content>
      <S.Expand ref={expandRef}>
        {typeof expandCard.status === 'boolean' && (
          <S.Bottom>
            {peoples.map(({ id, name }) => (
              <div key={id}>
                <span>{name}</span>
              </div>
            ))}
          </S.Bottom>
        )}
      </S.Expand>
    </S.Wrapper>
  )
}

export default CardGuest
