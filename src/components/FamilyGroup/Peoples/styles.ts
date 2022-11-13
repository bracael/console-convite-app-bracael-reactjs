import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Head = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.6rem;
  }
`

export const Text = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`

export const Circle = styled.span`
  background: #cc0000;
  color: #ffffff;
  width: 16px;
  min-width: 16px;
  max-width: 16px;
  height: 16px;
  min-height: 16px;
  max-height: 16px;
  border-radius: 50%;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.7rem;
  font-style: normal;
  font-weight: 600;
  z-index: 1;
  outline: 2px solid #fff;
`

export const Main = styled.div``

export const Collection = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

export const Li = styled.div`
  display: flex;
  align-items: center;
`
