import styled, { css } from 'styled-components'

import { ButtonProps } from './types'

type ContentProps = {
  size: NonNullable<ButtonProps['size']>
  variant: NonNullable<ButtonProps['variant']>
  disabledColor?: boolean
  maxWidth?: string
  currentColor?: string
  isCustom: boolean
}

const modifiertsSize = {
  'x-small': (minWidth: string) => css`
    font-weight: 500;
    font-size: 1rem;
    min-width: ${minWidth};
    min-height: 26px;
  `,
  small: (minWidth: string) => css`
    font-size: 1.2rem;
    min-width: ${minWidth};
    min-height: 30px;
  `,
  normal: (minWidth: string) => css`
    font-size: 1.3rem;
    min-width: ${minWidth};
    min-height: 36px;
  `,
  large: (minWidth: string) => css`
    font-size: 1.4rem;
    min-width: ${minWidth};
    min-height: 40px;
  `
}

const modifiertsVariant = {
  normal: () => css`
    color: #000;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  `,
  contained: (disabled: boolean) => css`
    color: ${disabled ? '#000' : '#fff'};
    background-color: ${disabled ? '#ccc' : '#0161cd'};
    font-weight: ${disabled && 500};

    &:hover {
      background: ${disabled ? '#bbb' : '#0e75e8'};
    }

    &:active {
      background: ${disabled ? '#aaa' : '#00f'};
    }

    &:focus {
      box-shadow: ${disabled
        ? '0px 0px 4px 2px rgba(0, 0, 0, 0.05)'
        : `0px 0px 4px 2px rgba(151, 200, 255)`};
    }
  `,
  outlined: (disabled: boolean, currentColor?: string) => css`
    color: ${disabled ? '' : currentColor || '#0161cd'};

    border: 1px solid ${disabled ? '' : currentColor || '#0161cd'};

    &:hover {
      box-shadow: inset 0 0 0 1px
        ${disabled ? 'rgba(255, 255, 255, 0)' : currentColor || '#0161cd'};
    }
  `,
  simple: () => css`
    color: #000;
    font-weight: 500;
  `
}

const modifiersMaxWidth = {
  normal: (maxWidth: string) => css`
    width: 100%;
    max-width: ${maxWidth};
  `
}

export const Content = styled.button<ContentProps>`
  ${({
    theme,
    size,
    variant,
    disabledColor = false,
    maxWidth,
    isCustom,
    currentColor
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${theme.font.family};
    transition: all 0.15s linear;
    font-weight: 300;
    border-radius: 3px;
    padding: 0 1.2rem;

    & > *:not(:last-child) {
      margin-right: 1rem;
    }

    ${modifiertsSize[size](maxWidth || '132px')}
    ${!isCustom && modifiertsVariant[variant](disabledColor, currentColor)}
    ${maxWidth && modifiersMaxWidth.normal(maxWidth)}
  `}
`

export const Text = styled.span`
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
