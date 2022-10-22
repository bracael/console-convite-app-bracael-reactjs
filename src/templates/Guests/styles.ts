import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: #f6f7f9;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: overlay;
  overflow-x: hidden;
`

export const Content = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1040px) {
    max-width: 880px;
    margin: 0 auto;
  }
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
`

export const Central = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
`

export const Checkbox = styled.div`
  width: 100%;
  max-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const searchModifiers = {
  default: css`
    background: #fff;
  `,
  disabled: css`
    background: #efefef;
    box-shadow: none !important;

    & input {
      color: #aaa;
    }

    & label::after {
      content: none;
    }
  `
}

type SearchProps = {
  isDisabled?: boolean
}

export const Search = styled.div<SearchProps>`
  ${({ isDisabled }) => css`
    display: flex;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0 0 9px -3px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.25s linear;
    margin-left: 0.6rem;

    ${isDisabled ? searchModifiers.disabled : searchModifiers.default};
  `}
`

export const SearchInput = styled.input`
  width: 100%;
  background: rgba(0, 0, 0, 0);
  padding-top: 0.6rem;
  padding-right: 1rem;
  padding-bottom: 0.6rem;
  text-indent: 1rem;
`

export const SearchLabel = styled.label`
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 1rem;
  position: relative;

  &::after {
    content: '';
    width: 1rem;
    height: 100%;
    display: block;
    position: absolute;
    right: -1rem;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 97%,
      rgba(255, 255, 255, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
  }

  & svg {
    float: left;
  }
`

export const Tools = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`

export const Main = styled.div`
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #e4e4e4;
  height: 100%;
`

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: overlay;
  overflow-x: hidden;
`
