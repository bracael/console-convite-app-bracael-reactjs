import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  height: 100%;
`

export const Content = styled.div`
  padding: 8rem 0;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Title = styled.div`
  color: #666;
  font-size: 2rem;
`

export const Description = styled.span`
  font-size: 1.4rem;
  font-family: var(--font-lato);
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.05rem;
`
