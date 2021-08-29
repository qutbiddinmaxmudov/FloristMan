import styled from 'styled-components'

export const NavWrapper = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
  height: 75px;
  width: 100%;
  background: ${(props) => props.theme.color.wheat};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 5;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavbarButton = styled.button`
  border: none;
  outline: none;
  background: none;
  position: relative;
  width: 30px;
  height: 20px;
  cursor: pointer;
  & span,
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    left: 0;
    transition: 0.5s;
  }
  &::before {
    top: 0;
  }
  &::after {
    top: 100%;
    transform: translateY(-100%);
  }
  span {
    top: 50%;
    transform: translateY(-50%);
  }
  &.hidden {
    span,
    &::before,
    &::after {
      top: 50%;
      transform: -50%;
    }
    &::before {
      transform: rotate(225deg);
    }
    &::after {
      transform: rotate(-225deg);
    }
    span {
      transform: rotate(225deg);
    }
  }
  ${(props) => props.property}
`

export const NavbarIcon = styled.a`
  margin-left: 15px;
`
