import styled from 'styled-components'

export const NavWrapper = styled.nav`
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
  height: 75px;
  background: ${(props) => props.theme.color.wheat};
  display: flex;
  align-items: center;
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
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  span {
    top: 50%;
    transform: translateY(-50%);
  }
`

export const NavbarIcon = styled.a`
  margin-left: 15px;
`
