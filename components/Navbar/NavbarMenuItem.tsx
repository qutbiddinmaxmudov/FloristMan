import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

interface NavbarMenuItemInterface {
  url?: string
  items?: {
    url: string
    name: string
  }[]
}

const MenuLink = styled.a`
  text-decoration: none;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  width: 350px;
  max-width: 100%;
  background: ${(props) => props.theme.color.wheat};
  border: 0.7px solid #edd5c2;
  color: black;
  font-size: 16px;
  font-weight: 600;
  line-height: 15px;
  list-style: none;
  cursor: pointer;
`

const MenuIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  transition: 0.5s transform;
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: black;
    position: absolute;
  }
  &::after {
    transform: rotate(90deg);
  }
`

const Sublink = styled.a`
  height: 50px;
  text-decoration: none;
  padding-right: 20px;
  padding-left: 20px;
  background: #fff6f1;
  border: 0.7px solid #edd5c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 12px;
  color: black;
`

const MenuSublist = styled.ul`
  transform-origin: top;
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  transition: 0.5s height;
  overflow-y: hidden;
`

const NavbarMenuItem: React.FC<NavbarMenuItemInterface> = ({ children, url, items }) => {
  const [sublistState, setSublistState] = useState(false)
  if (items) {
    const handleSublistClick = () => setSublistState(!sublistState)
    return (
      <li>
        <MenuLink as="div" role="menu" onClick={handleSublistClick}>
          {children}
          <MenuIndicator style={{ transform: sublistState ? `rotate(45deg)` : '' }} />
        </MenuLink>
        <MenuSublist style={sublistState ? { height: items.length * 50 } : { height: 0 }}>
          {items.map((item, i) => (
            <li key={item.name + i}>
              <Link href={`/catalog?type=${item.url}`} passHref>
                <Sublink>{item.name}</Sublink>
              </Link>
            </li>
          ))}
        </MenuSublist>
      </li>
    )
  } else {
    return (
      <li>
        <Link href={`/catalog?type=${url}`} passHref>
          <MenuLink>{children}</MenuLink>
        </Link>
      </li>
    )
  }
}

export default NavbarMenuItem
