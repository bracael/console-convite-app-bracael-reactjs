import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eceff1;
  padding: 0 1.8rem;
  max-height: 48px;
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;

  @media (max-width: 720px) {
    padding: 0 1.6rem;
  }
`

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 900;

  @media (max-width: 720px) {
    visibility: hidden;
  }
`

export const Control = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;

    & > *:not(:last-child) {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
