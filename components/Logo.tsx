import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import logo from '../images/logo image.png'

const LogoBlock = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`
const LogoName = styled.span`
  font-family: ${(props) => props.theme.gadugi};
  font-weight: 700;
  color: #073c2a;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  display: block;
`
const LogoSubtitle = styled.span`
  font-size: 11px;
  line-height: 13px;
  color: #0a3f23;
  font-family: ${(props) => props.theme.candara};
  display: block;
  margin-top: -3px;
`

function Logo() {
  return (
    <Link href="/" passHref>
      <LogoBlock>
        <Image src={logo} alt="Floristman logo" />
        <div>
          <LogoName>FloristMan</LogoName>
          <LogoSubtitle>Широкий выбор на любой вкус</LogoSubtitle>
        </div>
      </LogoBlock>
    </Link>
  )
}

export default Logo
