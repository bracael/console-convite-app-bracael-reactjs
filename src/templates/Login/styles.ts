import styled, { css } from 'styled-components'

export const Content = styled.div`
  width: 100%;
  display: block;
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3b86b5+0,ccedf9+74,ffffff+100 */
    background: #3b86b5; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #3b86b5 0%,
      #ccedf9 74%,
      #ffffff 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #3b86b5 0%,
      #ccedf9 74%,
      #ffffff 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #3b86b5 0%,
      #ccedf9 74%,
      #ffffff 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b86b5', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 590px;
    z-index: 1;
  }
`

export const Main = styled.div`
  ${({ theme }) => css`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2;
    background: #fff;
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 9px -3px rgba(0, 0, 0, 0.25);

    @media (min-width: 1040px) {
      max-width: 600px;
      margin: 0 auto;
    }
  `}
`

export const Master = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6rem;
`

export const Text = styled.span`
  color: rgba(60, 60, 60);
  font-family: var(--font-lato);
  font-weight: 600;
  text-align: center;
  margin-top: 0.8rem;
  font-size: 1.8rem;
  font-style: italic;
`

export const Form = styled.form`
  width: 100%;
  padding: 4.6rem;
  font-family: var(--font-poopins);
  flex-direction: column;
  display: flex;
`

export const Group = styled.div`
  position: relative;

  & * {
    transition: all 0.2s ease-in-out;
  }

  &:not(:last-child) {
    margin-top: 2.2rem;
  }
`

export const Icon = styled.svg`
  color: #aaa;
  position: absolute;
  top: 15px;
  right: 15px;
  height: 24px;
  width: 24px;
  z-index: 11;

  & {
    cursor: pointer;
    border-radius: 100%;
  }

  &:hover {
    color: rgba(121, 121, 121);
  }
`

const inputModifiers = {
  hasText: css`
    & ~ label {
      padding: 0 10px;
      font-size: 1em;
      background: #fff;
      z-index: 20;
      top: -10px;
    }
  `
}

type InputProps = {
  hasText: boolean
}

export const Input = styled.input<InputProps>`
  ${({ hasText }) => css`
    width: 100%;
    background: transparent;
    padding: 1.4rem 0;
    display: block;
    font-weight: 400;
    color: #797979;
    font-size: 1.48rem;
    box-shadow: inset 0 0 0 1px #dadce0;
    font-family: var(--font-poopins);
    text-indent: 16px;
    border-radius: 3px;
    position: relative;
    z-index: 10;
    ${hasText && inputModifiers.hasText}

    &:focus {
      box-shadow: inset 0 0 0 1px #1273eb;
    }

    &:focus ~ label {
      color: #1273eb;
    }

    &:focus ~ label {
      padding: 0 10px;
      font-size: 1em;
      background: #fff;
      z-index: 20;
      top: -10px;
    }
  `}
`

export const Label = styled.label`
  color: #676767;
  font-weight: 400;
  position: absolute;
  font-size: 1.55rem;
  top: 15px;
  left: 1em;
`

export const Trigger = styled.button`
  color: #aaa;
  position: absolute;
  top: 15px;
  right: 15px;
  height: 24px;
  width: 24px;
  z-index: 11;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    color: rgba(121, 121, 121);
  }
`

export const Bottom = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin: 2.6rem 0 1rem;
`

export const Marca = styled.section`
  min-width: 164px;
  background-image: var(--brand-header);
  background-position: 0 center;
  background-repeat: no-repeat;
  background-size: 164px;
  height: 41px;
`

export const IMG = styled.img`
  max-height: 40px;
  float: left;
`
