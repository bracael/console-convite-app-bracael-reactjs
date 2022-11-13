import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

// contexts and others
import DataGuestsProvider from 'contexts/DataGuests'
import { FetchUpdateContext } from './context'

// components JSX
import Checkbox from 'components/Checkbox'
import CardGuests from 'components/Cards/Guest'
import Pushbutton from 'components/Pushbutton'
import Button from 'components/Button'
import EmptySearchGuests from 'components/Empties/SearchGuests'
import EmptyGuests from 'components/Empties/EmptyGuests'
// import ModalDefault from 'components/Modals/Default'

// icons JSX
import { Search as IconSearch } from '@styled-icons/ionicons-outline/Search'
import { Refresh as IconRefresh } from '@styled-icons/ionicons-outline/Refresh'
import { EllipsisVertical as IconEllipsisVertical } from '@styled-icons/ionicons-outline/EllipsisVertical'
import { Add as IconAdd } from '@styled-icons/ionicons-outline/Add'

// styles
import * as S from './styles'

// types and interfaces
import { DataHomeProps, TGuestsKeys } from './types'

const DataHome = ({ data }: DataHomeProps) => {
  const history = useHistory()

  const { fetcUpdate, setFetcUpdate } = FetchUpdateContext()

  const currentInvites = data.models

  const btnOptionsRef = useRef<HTMLButtonElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const defaultDataRef = useRef(currentInvites)
  const [currentData, setCurrentData] = useState(currentInvites)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [isSelectedAll, setIsSelectedAll] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const dataKeys: TGuestsKeys = (arr) => Array.from(arr, ({ id }) => id)

  // NOTE; Bairros a ser deletados
  const resultToDelete = dataKeys(currentData)
  const totalToDelete = resultToDelete
  const filterToDelete = isSelectedAll
    ? resultToDelete
    : resultToDelete.filter((sku) => selectedKeys.includes(sku))

  const handleUpdateTab = () => {
    setFetcUpdate((prevState) => prevState + 1)
  }

  const handlerSelectAll = () => {
    if (isSameValue) {
      setSelectedKeys([])
      setIsSelectedAll(false)
    } else {
      setIsSelectedAll((prevState) => !prevState)
    }
  }

  const inputFocusFn = () => {
    if (searchRef.current) {
      searchRef.current.style.boxShadow = '0 0 9px -1px rgba(0, 0, 0, 0.45)'
    }
  }

  const inputBlurFn = () => {
    if (searchRef.current) {
      searchRef.current.style.boxShadow = '0 0 9px -3px rgba(0, 0, 0, 0.25)'
    }
  }

  const inputFn = (value: string) => {
    setSearchInput(value)
    setCurrentData(
      defaultDataRef.current.filter((data) =>
        (data.name || '').toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  // const handlerOptions = () => setModalOptions({ status: true })
  const handlerCreate = () => {
    history.push('/create')
  }

  useEffect(() => {
    if (fetcUpdate !== 1) toast.success('Bairros atualizados!')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const emptyKeys = [!defaultDataRef.current.length, !currentData.length]
  const isEmpty = emptyKeys.every(Boolean)

  useEffect(() => {
    if (isEmpty) setSearchInput('')
  }, [isEmpty])

  const totalKeys = dataKeys(currentData)
  const isSameKeys = [
    totalKeys.length === selectedKeys.length,
    totalKeys.every((id) => selectedKeys.includes(id))
  ]
  const isSameValue = isSameKeys.every(Boolean)

  return (
    <DataGuestsProvider
      {...{
        defaultDataRef,
        currentData,
        setCurrentData,
        selectedKeys,
        setSelectedKeys,
        isSelectedAll,
        setIsSelectedAll,
        totalToDelete,
        filterToDelete,
        totalKeys,
        isSameValue
      }}
    >
      <S.Content>
        <S.Container>
          <S.Head>
            <S.Central>
              <S.Checkbox>
                <Checkbox
                  size={16}
                  checked={isSelectedAll || isSameValue}
                  onClick={() => !isEmpty && handlerSelectAll()}
                  disabled={isEmpty}
                />
              </S.Checkbox>
              <Pushbutton onClick={() => handleUpdateTab()}>
                <IconRefresh size={18} fill="#b4b4b4" />
              </Pushbutton>
              {!!(selectedKeys.length || isSelectedAll) && (
                <Pushbutton
                  currentRef={btnOptionsRef}
                  // onClick={() => handlerOptions()}
                >
                  <IconEllipsisVertical size={18} fill="#b4b4b4" />
                </Pushbutton>
              )}
              <S.Search ref={searchRef} isDisabled={isEmpty}>
                <S.SearchLabel htmlFor="searchClient">
                  <IconSearch size={16} />
                </S.SearchLabel>
                <S.SearchInput
                  type="text"
                  placeholder="Buscar pessoa"
                  onFocus={() => inputFocusFn()}
                  onBlur={() => inputBlurFn()}
                  onChange={(e) => !isEmpty && inputFn(e.target.value)}
                  value={searchInput}
                />
              </S.Search>
            </S.Central>
            <S.Tools>
              <Button
                variant="contained"
                size="x-small"
                value="Nova família"
                onClick={() => handlerCreate()}
              >
                <IconAdd size={16} />
              </Button>
            </S.Tools>
          </S.Head>
          <S.Main>
            <S.Scroll>
              {(() => {
                if (isEmpty) return <EmptyGuests />
                else if (currentData.length) {
                  return Array.from(currentData, (current) => (
                    <CardGuests key={current.id} {...current} />
                  ))
                } else return <EmptySearchGuests />
              })()}
            </S.Scroll>
          </S.Main>
        </S.Container>
      </S.Content>
    </DataGuestsProvider>
  )
}

export default DataHome
