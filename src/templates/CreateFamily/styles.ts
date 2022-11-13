import styled from 'styled-components'

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
