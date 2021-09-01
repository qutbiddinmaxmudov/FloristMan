import styled from 'styled-components'

export const Wrapper = styled.footer`
  box-shadow: -2px 0 3px ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.white};
  padding-bottom: 50px;
`
export const LogoBlock = styled.div`
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`
export const FooterNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Card = styled.a`
  position: relative;
  flex-basis: calc(100% / 4 - 12px);
  color: ${(props) => props.theme.color.black};
  height: 360px;
  overflow: hidden;
  margin-bottom: 24px;
`

export const FooterTitle = styled.h3`
  margin-bottom: 36px;
  text-align: center;
`
export const FooterInfo = styled.a`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.color.black};
  font-weight: 600;
  font-size: 18px;
`
export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const FooterLastWord = styled.p`
  font-size: 24px;
  text-align: center;
`
