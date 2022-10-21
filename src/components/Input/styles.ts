import styled, { css } from 'styled-components'

type WrapperProps = {
  maxWidth: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ maxWidth }) => css`
    max-width: ${maxWidth && maxWidth};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    & * {
      transition: all 0.2s ease-in-out;
    }
  `}
`

type InputProps = {
  status?: boolean
  sizeInput?: 'small' | 'medium'
  disabled?: boolean
}

const disabledModifiers = {
  default: css`
    & ~ label {
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  `
}

const inputModifiers = {
  medium: css`
    padding: 1.2rem 1.4rem;
    font-size: 1.4rem;

    & ~ label {
      left: 14px;
      top: 14px;
    }
  `,
  small: css`
    padding: 1rem 1.2rem;
    font-size: 1.2rem;

    & ~ label {
      left: 12px;
      top: 10px;
    }
  `
}

export const Input = styled.input<InputProps>`
  ${({ status = false, sizeInput = 'medium', disabled = false }) => css`
    color: #797979;
    background: ${disabled ? '#efefef' : 'rgba(0, 0, 0, 0)'};
    width: 100%;
    font-weight: 500;
    box-shadow: inset 0 0 0 1px #dadce0;
    position: relative;
    border-radius: 4px;
    z-index: 1;

    ${inputModifiers[sizeInput]}
    ${disabled && status && disabledModifiers.default}

    &::placeholder {
      color: #a3a3a3;
      font-size: 1.2rem;
      font-weight: 100;
    }

    &:focus ~ label${status && ', & ~ label'} {
      color: #b7b7b7;
      background: #fff;
      padding: 0 8px;
      z-index: 1;
      top: -9px;
    }

    &:focus ~ label {
      color: #1273eb;
    }

    &:focus {
      color: #000000;
      box-shadow: inset 0 0 0 1px #1273eb;
    }
  `}
`

export const Label = styled.label`
  color: #797979;
  font-weight: 300;
  position: absolute;
  font-size: 1.2rem;
`
