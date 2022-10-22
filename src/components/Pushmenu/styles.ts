import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 256px;
  background: #051e34;
  transition: all 0.3s ease-in-out;
  position: relative;
  height: 100%;
  z-index: 5;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    min-height: 500px;
    max-height: 590px;
    z-index: 1;
  }

  @media (max-width: 800px) {
    transform: translate3d(-100%, 0, 0);
    max-width: 240px;
    position: fixed;
    left: 0;
  }
`

export const Pushbox = styled.div`
  z-index: 2;
  position: relative;
`

type HandleProps = {
  isOpen: boolean
}

const handleModifiers = {
  open: css`
    margin: initial !important;
    right: -48px;
    width: 48px;
    height: 48px;

    background: var(--color-aside-bg);
    -webkit-border-radius: 0 0 3px 0;
    -moz-border-radius: 0 0 3px 0;
    -ms-border-radius: 0 0 3px 0;
    -o-border-radius: 0 0 3px 0;
    border-radius: 0 0 3px 0;

    & button {
      padding: 15px;

      & i,
      & i::before,
      & i::after {
        background: #ffffff;
      }

      & i {
        top: 23px;
        background: none;
        left: 12px;

        &::before,
        &::after {
          top: 0;
          width: 24px;
        }

        &::before {
          -webkit-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }

        &::after {
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
  `
}

export const Handle = styled.div<HandleProps>`
  ${({ isOpen }) => css`
    width: 32px;
    right: calc(-32px + -1.6rem);
    display: none;
    z-index: 3;
    position: absolute;
    border-radius: 50%;
    height: 32px;
    top: 0;

    @media (max-width: 720px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 7.5px auto;
    }

    ${isOpen && handleModifiers.open}

    &,
    & * {
      transition: 0.25s linear;
    }

    & i,
    & i::before,
    & i::after {
      position: absolute;
      width: 18px;
      height: 2px;
      transition: transform 0.3s linear, top 0.3s linear,
        background 0.25s linear;
      background: #777777;
    }

    & button {
    }

    & i {
      top: 15px;
      left: 7px;

      &::before,
      &::after {
        content: '';
        left: 0;
      }
      &::before {
        top: 5px;
      }
      &::after {
        top: -5px;
      }
    }
  `}
`

export const Brand = styled.section`
  background-image: url('/img/brand/brand-logotipo.svg');
  align-items: center;
  display: flex;
  background-size: 112px;
  background-repeat: no-repeat;
  background-position: 26px center;
  height: 48px;
`

export const Text = styled.span`
  color: #fff;
  line-height: 26px;
  font-size: 1.4rem;
  font-weight: 400;
`

export const Container = styled.ul`
  overflow-x: hidden;
  overflow-y: overlay;
  height: calc(100vh - 48px);
  box-shadow: 0 1px 0 #2a4865 inset;
`

export const Group = styled.ol`
  font-weight: 500;
  padding: 12px 0;
  box-shadow: 0 -1px 0 #2a4865 inset;
`

export const Li = styled.button`
  width: 100%;
  color: var(--color-clean);
  text-decoration: none;
  display: flex;
  padding: 0.7rem 1rem 0.7rem 2.4rem;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`

export const Footer = styled.div`
  color: #ccc;
  padding: 1.7rem 1.175rem;
  font-family: var(--font-open-sans);
  font-size: 1.05rem;

  & * {
    display: block;
  }

  & *:not(:last-child) {
    padding-bottom: 0.7rem;
  }

  & span {
    letter-spacing: 0.5px;
  }
`
