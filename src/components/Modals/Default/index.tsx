import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// contexts and others
import ModalProvider from './context'

// styles
import * as S from './styles'

// types and interface
import { ModalProps } from './types'

const ModalDefault = ({
  children,
  validations,
  state,
  setState,
  backgroundColor,
  zIndex,
  style
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status) {
      gsap.to(modalRef.current, {
        duration: 0.2,
        autoAlpha: 1
      })
    } else if (state.status === false) {
      gsap.to(modalRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        onComplete: () => setState({})
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const handleClose = () => {
    setState((prevState) => ({ ...prevState, status: false }))
  }

  const masterValidation = typeof state.status === 'boolean'
  const validationKeys = [...(validations ? validations : []), masterValidation]
  const isValid = validationKeys.every(Boolean)

  return (
    <S.Wrapper
      ref={modalRef}
      backgroundColor={backgroundColor}
      zIndex={zIndex}
      {...(style ? { style } : {})}
    >
      {isValid && (
        <>
          <S.Close onClick={() => state.status && handleClose()} />
          <ModalProvider close={handleClose}>
            <S.Content>{children}</S.Content>
          </ModalProvider>
        </>
      )}
    </S.Wrapper>
  )
}

export default ModalDefault
