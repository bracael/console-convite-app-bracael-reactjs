import styled, { css } from 'styled-components'

const textOrPx = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value
}

type WrapperProps = {
  width?: string | number
  height?: string | number
  borderRadius?: string | number
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ width = '32px', height = '32px', borderRadius = '50%' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
    width: ${textOrPx(width)};
    height: ${textOrPx(height)};
    min-width: ${textOrPx(width)};

    &::before,
    &::after {
      transition: all 250ms ease;
    }

    &::after {
      content: '';
      width: ${textOrPx(width)};
      height: ${textOrPx(height)};
      display: block;
      position: absolute;
      background: transparent;
      border-radius: ${textOrPx(borderRadius)};
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
  `}
`
