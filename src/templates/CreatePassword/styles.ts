import styled, { css } from 'styled-components'

import * as S from 'templates/Login/styles'

export const Wrapper = styled(S.Content)``

export const Container = styled(S.Main)``

export const Content = styled.form`
  width: 100%;
  padding: 4rem 8rem 5rem;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
`

export const Description = styled.span`
  font-weight: 600;
  font-family: var(--font-lato);
  font-style: italic;
  font-size: 1.6rem;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const GropuStatus = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  margin-right: 12px;

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`

export const Middle = styled.div`
  display: flex;
  position: relative;
`

export const Text = styled.span`
  font-family: var(--font-lato);
  font-style: italic;
  font-weight: 600;
`

const statusModifiers = [
  css`
    &::before {
      background: #d93025;
    }
  `,
  css`
    &,
    &::before {
      background: #f6a61d;
    }
  `,
  css`
    &,
    &::before,
    &::after {
      background: #39c26d;
    }
  `
]

type StatusProps = {
  currentLevel: 0 | 1 | 2
}

export const Status = styled.div<StatusProps>`
  ${({ currentLevel }) => css`
    clear: both;

    &,
    &::before,
    &::after {
      background-color: #ccc;
      height: 4px;
      width: 6px;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
    }

    &::after {
      top: -8px;
    }

    &::before {
      top: 8px;
    }

    ${statusModifiers[currentLevel]}
  `}
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Checkbox = styled.input`
  display: none;

  & ~ label:before {
    content: '';
    background: rgba(0, 0, 0, 0);
    border-radius: 3px;
    border: 2px solid #b4b4b4;
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
    position: relative;
    margin-right: 1em;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    z-index: 2;
  }

  &:checked ~ label:before {
    background-color: #3197ee;
    box-shadow: inset 0 0 0 2px #f4f4f4;
  }

  &:focus ~ label:before {
    outline: none;
    border-color: #3197ee;
  }

  &:disabled ~ label:before {
    box-shadow: inset 0 0 0 2px #f4f4f4;
    border-color: #b4b4b4;
    background: #b4b4b4;
  }

  & ~ label:empty:before {
    margin-right: 0;
  }
`

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0 !important;
  cursor: pointer;
  padding: 0 1.4rem;
  z-index: 1;

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
`
