import styled, { css } from 'styled-components'

type ModalProps = {
  zIndex?: string
  backgroundColor?: string
}

export const Modal = styled.div<ModalProps>`
  ${({ zIndex = '5', backgroundColor = 'rgba(255,255,255,0.5)' }) => css`
    z-index: ${zIndex};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    overflow: hidden;
    outline: 0;
    margin-bottom: 0 !important;

    &::after {
      content: '';
      background: ${backgroundColor};
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
`

export const Close = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  width: 100vw;
  height: 100%;
  position: fixed;
  background: rgba(255, 255, 255, 0);
`

type ContentProps = {
  alignItems?: string
  zIndex?: string
}

export const Content = styled.div<ContentProps>`
  ${({ alignItems = 'center', zIndex = '2' }) => css`
    width: 100vw;
    justify-content: center;
    align-items: ${alignItems};
    display: flex;
    height: 100%;
    z-index: ${zIndex};
    position: relative;
  `}
`
