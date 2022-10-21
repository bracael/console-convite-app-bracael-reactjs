import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// contexts and others
import { OverloadContext } from 'contexts/Overload'

// styles
import * as S from './styles'

const Overload = () => {
  const modalRef = useRef(null)
  const { overload, setOverload } = OverloadContext()

  useEffect(() => {
    if (overload.status) {
      gsap.to(modalRef.current, {
        duration: 0.2,
        autoAlpha: 1
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalRef, overload])

  useEffect(() => {
    if (overload.status === false) {
      gsap.to(modalRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        onComplete: () => setOverload({})
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overload])

  return (
    <S.Modal ref={modalRef} zIndex="10000">
      {typeof overload.status === 'boolean' && (
        <S.Content zIndex="10006">
          <div className="spinner">
            <div className="spinner__content" />
          </div>
        </S.Content>
      )}
    </S.Modal>
  )
}
export default Overload
