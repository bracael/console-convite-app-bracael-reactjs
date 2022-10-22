import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #fff;
  z-index: 99;
  position: relative;
  width: calc(100vw - 3.6rem);
  max-width: 280px;
  overflow: hidden;
  font-size: 1.43rem;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.24);
  border-radius: 0.8rem;
  padding: 2.6rem;

  & > *:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.6rem 0;
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

export const Suptext = styled.span`
  font-weight: 600;
  font-family: var(--font-lato);
  font-style: italic;
  font-size: 1.6rem;
`

export const Subtext = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.4;
`
