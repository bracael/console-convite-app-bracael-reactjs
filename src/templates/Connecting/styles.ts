import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: #efefef;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: overlay;
  overflow-x: hidden;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 392px;
  display: flex;
  height: 58%;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Title = styled.span`
  font-size: 1.4rem;
  color: #aaa;
  font-family: var(--font-lato);
  font-weight: 600;
  font-style: italic;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.15s linear;
    font-family: ${theme.font.family};
    font-weight: 300;
    border-radius: 3px;
    padding: 0 1.2rem;
    background: #cc0000;
    color: #fff;
    font-size: 1.3rem;
    width: 100%;
    max-width: 160px;
    min-height: 40px;
    text-transform: uppercase;
    letter-spacing: 0.05rem;

    &:hover {
      background: #ee0000;
    }

    &:active {
      background: #aa0000;
    }

    &:focus {
      box-shadow: 0px 0px 4px 2px #ff9797;
    }
  `}
`
