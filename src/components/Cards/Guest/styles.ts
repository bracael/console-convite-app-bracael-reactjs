import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  transition: border-bottom 0.3s ease 0s, box-shadow 0.3s ease 0s;
  position: relative;

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15%);
    z-index: 2;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 1.4rem;
  }
`

export const Content = styled.div`
  min-height: 40px;
  display: flex;
  align-items: center;

  &:hover [role='tablelist'] {
    display: flex;
  }

  & > * {
    width: 100%;
    height: 100%;
    min-height: 40px;
  }
`

export const Main = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Checkbox = styled.div`
  max-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Texts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`

export const Name = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  min-width: 72px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
`

export const Buttons = styled.div`
  min-width: 140px;
  background: #fff;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  padding: 0 1.6rem;
  display: none;
  height: 100%;
  right: 0;
  top: 0;

  & > *:not(:last-child) {
    margin-right: 0.6rem;
  }
`

export const Expand = styled.div`
  height: 0;
  opacity: 0;
`

export const Bottom = styled.div`
  background: #f7f5f5;
  border-top: 1px solid #efefef;
  padding: 1rem 1.6rem;
  display: flex;

  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`
