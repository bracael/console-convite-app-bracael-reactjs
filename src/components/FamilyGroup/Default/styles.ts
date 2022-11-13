import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  padding: 1.6rem;

  & > *:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 1039px) {
    flex-direction: column;
    border-radius: initial;
    padding: 3rem 1.6rem 1.6rem;
    overflow: hidden overlay;
    margin: initial;
    height: 100%;
  }

  @media (min-width: 1040px) {
    width: 100%;
    max-width: 480px;
    margin: auto;
    border-radius: 3px;
  }
`
