import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

export type CheckboxProps = {
  size: number
}

export const Checkbox = styled.input<CheckboxProps>`
  ${({ size }) => css`
    display: none;

    & ~ label section:before {
      content: '';
      background: rgba(0, 0, 0, 0);
      border-radius: 3px;
      border: 2px solid #b4b4b4;
      display: inline-block;
      width: ${size}px;
      height: ${size}px;
      position: relative;
      margin-right: 1em;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      z-index: 2;
    }

    &:checked ~ label section:before {
      background-color: #3197ee;
      box-shadow: inset 0 0 0 2px #f4f4f4;
    }

    &:focus ~ label section:before {
      outline: none;
      border-color: #3197ee;
    }

    &:disabled ~ label section:before {
      box-shadow: inset 0 0 0 2px #f4f4f4;
      border-color: #b4b4b4;
      background: #b4b4b4;
    }

    & ~ label section:empty:before {
      margin-right: 0;
    }
  `}
`

export type LabelProps = {
  size: number
}

export const Label = styled.label<LabelProps>`
  ${({ size }) => css`
    font-weight: 500;
    margin-bottom: 0 !important;
    cursor: pointer;
    z-index: 1;
    display: flex;

    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }

    & section::before,
    & section::after {
      transition: all 250ms ease;
    }

    & section {
      width: ${size};
      height: ${size};
      display: flex;
      align-items: center;
      position: relative;
    }

    & section::after {
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

    &:hover section::after {
      background: rgba(0, 0, 0, 0.05);
    }

    &:active section::after {
      background: rgba(0, 0, 0, 0.1);
    }
  `}
`
