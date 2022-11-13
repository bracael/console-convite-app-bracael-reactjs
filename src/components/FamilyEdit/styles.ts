import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 54px;
  max-height: 54px;
  height: 100%;

  @media (max-width: 1039px) {
    padding: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0 0 16px;
    position: relative;
    z-index: 2;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 28px;

  & > *:not(:last-child) {
    margin-left: 1rem;
  }
`

export const Go = styled.button`
  color: #fff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#0db722),
    to(#0e9c20)
  );
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`
