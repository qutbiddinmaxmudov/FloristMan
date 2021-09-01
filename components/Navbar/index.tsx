import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Logo from '../Logo'
import { Nav, NavbarButton, NavbarIcon, NavWrapper } from './navbarComponents'
import user from '../../images/icons/user.svg'
import search from '../../images/icons/search.svg'
import cart from '../../images/icons/cart.svg'
import NavbarPanel from './NavbarPanel'

function Navbar() {
  const [navbarHidden, setNavbarHidden] = useState(true)

  useEffect(() => {
    const effect = (event: MouseEvent) => {
      const navbar = document.querySelector('#navbar')
      if (navbar) {
        if (!event.composedPath().includes(navbar)) setNavbarHidden(true)
      }
    }
    window.addEventListener('click', effect)
    return () => window.removeEventListener('click', effect)
  }, [])

  const handleNavbarButtonClick = () => setNavbarHidden(!navbarHidden)
  return (
    <NavWrapper id="navbar">
      <Container>
        <Nav>
          <NavbarButton onClick={handleNavbarButtonClick} className={`${!navbarHidden ? 'hidden' : ''}`}>
            <span></span>
          </NavbarButton>
          <Logo />
          <div>
            <Link href="/catalog" passHref>
              <NavbarIcon>
                <Image src={search} alt="Search icon"></Image>
              </NavbarIcon>
            </Link>
            <Link href="/cart" passHref>
              <NavbarIcon>
                <Image src={cart} alt="Cart icon"></Image>
              </NavbarIcon>
            </Link>
            <Link href="/auth/login" passHref>
              <NavbarIcon>
                <Image src={user} alt="User icon"></Image>
              </NavbarIcon>
            </Link>
          </div>
        </Nav>
      </Container>
      <NavbarPanel hidden={navbarHidden} />
    </NavWrapper>
  )
}

export default Navbar
