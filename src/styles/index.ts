import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`

type ModalProps = {
  zIndex?: string
  backgroundColor?: string
}

export const Modal = styled.div<ModalProps>`
  ${({ zIndex = '5', backgroundColor = 'rgba(0,0,0,0.5)' }) => css`
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

export const ModalContent = styled.div<ContentProps>`
  ${({ alignItems = 'center', zIndex = '2' }) => css`
    width: 100vw;
    justify-content: center;
    align-items: ${alignItems};
    display: flex;
    height: 100%;
    z-index: ${zIndex};
  `}
`

export const Spot = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;

  &::before,
  &::after {
    transition: all 250ms ease;
  }

  &::after {
    content: '';
    width: 36px;
    height: 36px;
    display: block;
    position: absolute;
    background: transparent;
    border-radius: 50%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    z-index: 1;
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.05);
  }

  &:active::after {
    background: rgba(0, 0, 0, 0.1);
  }

  & svg {
    float: left;
  }
`
