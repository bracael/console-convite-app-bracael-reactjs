import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: #efefef;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: overlay;
  overflow-x: hidden;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Main = styled.div`
  width: 100%;
  max-width: 392px;
  background-color: #fff;
  padding: 1.6rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Mainly = styled.div`
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 1.6rem;
    display: block;
    position: absolute;
    z-index: 5;
    left: 0px;
    right: 0px;
  }

  &::before {
    top: 0px;
    background: linear-gradient(
      rgb(255, 255, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    bottom: 0px;
    background: linear-gradient(
      to top,
      rgb(255, 255, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

export const Collection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0.1rem;
  overflow-y: overlay;
  overflow-x: hidden;
  max-height: 48vh;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Brand = styled.div`
  padding-top: 1.2rem;
`

export const Title = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
`

export const Gravatar = styled.section`
  width: 100%;
  height: 100%;
  min-width: 42px;
  max-width: 42px;
  min-height: 42px;
  max-height: 42px;
  background-color: #dfdfff;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  position: relative;
`

export const Li = styled.button`
  ${({ onClick }) => css`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 3px;
    transition: all 0.15s ease-out;
    background: rgba(0, 0, 0, 0);
    outline: rgba(0, 0, 0, 0) solid 1px;
    cursor: ${!onClick && 'default'};

    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &:focus {
      outline: #dfdfff solid 1px;
    }
  `}
`

export const Details = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Triggers = styled.section`
  display: flex;
`

export const Circle = styled.span`
  background: #cc0000;
  color: #ffffff;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  font-size: 1rem;
  line-height: 1.9rem;
  font-style: normal;
  font-weight: 500;
  z-index: 1;
  top: 28px;
  right: -2px;
  outline: 2px solid #fff;
`

export const Name = styled.span`
  font-weight: 600;
  font-family: var(--font-lato);
  font-style: italic;
  font-size: 1.6rem;
  text-align: left;
`

export const Description = styled.span`
  font-weight: 300;
  text-align: left;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  & > *:not(:last-child) {
    margin-right: 0.6rem;
  }
`

export const Credits = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Named = styled.span`
  font-weight: 600;
  line-height: 1;
`

export const Copyright = styled.span`
  font-family: var(--font-lato);
  font-weight: 600;
  font-style: italic;
`

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 140px;

  & > span {
    font-family: var(--font-lato);
    font-weight: 600;
    font-style: italic;
    font-size: 1.8rem;
  }
`
