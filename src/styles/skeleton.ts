import styled, { css } from 'styled-components'

type DivProps = {
  marginTop?: number | string
  marginBottom?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  width?: number | string
  maxWidth?: number | string
  minWidth?: number | string
  height?: number | string
  maxHeight?: number | string
  minHeight?: number | string
  displayFlex?: boolean
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  widthChild?: number | string
  heightChild?: number | string
  spaceTopChild?: string
  spaceRightChild?: string
  spaceLeftChild?: string
  spaceBottomChild?: string
  floatChild?: string
}

const textOrPx = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value
}

export const Div = styled.div<DivProps>`
  ${({
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    displayFlex,
    justifyContent,
    alignItems,
    flexDirection,
    widthChild,
    heightChild,
    spaceTopChild,
    spaceRightChild,
    spaceLeftChild,
    spaceBottomChild,
    floatChild
  }) => css`
    ${marginTop && `margin-top: ${textOrPx(marginTop)};`}
    ${marginBottom && `margin-bottom: ${textOrPx(marginBottom)};`}
    ${marginLeft && `margin-left: ${textOrPx(marginLeft)};`}
    ${marginRight && `margin-right: ${textOrPx(marginRight)};`}
    ${width && `width: ${textOrPx(width)};`}

    ${maxWidth && `max-width: ${textOrPx(maxWidth)};`}
    ${minWidth && `min-width: ${textOrPx(minWidth)};`}
    ${height && `height: ${textOrPx(height)};`}
    ${maxHeight && `max-height: ${textOrPx(maxHeight)};`}
    ${minHeight && `min-height: ${textOrPx(minHeight)};`}

    ${displayFlex && `display: flex;`}

    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}

    & > * {
      ${widthChild && `width: ${textOrPx(widthChild)};`}
      ${heightChild && `height: ${textOrPx(heightChild)};`}
    }

    & > *:not(:last-child) {
      ${spaceTopChild && `margin-top: ${spaceTopChild};`}
      ${spaceRightChild && `margin-right: ${spaceRightChild};`}
      ${spaceLeftChild && `margin-left: ${spaceLeftChild};`}
      ${spaceBottomChild && `margin-bottom: ${spaceBottomChild};`}
    }

    & > * {
      display: flex;
    }

    & * {
      ${floatChild && `float: ${floatChild};`};
    }
  `}
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #dadce0;

  border-radius: 3px;
`
