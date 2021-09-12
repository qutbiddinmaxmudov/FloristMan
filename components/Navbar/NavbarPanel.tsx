import React from 'react'
import styled from 'styled-components'
import NavbarMenuItem from './NavbarMenuItem'

const NavbarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: calc(100vh - 75px);
  top: 75px;
  background: rgba(196, 196, 196, 0.3);
  list-style: none;
  left: 0;
  transition: 0.5s transform;
  backdrop-filter: blur(15px);
  z-index: 5;
`

interface NavbarPanelInterface {
  hidden: boolean
}

const NavbarPanel: React.FC<NavbarPanelInterface> = ({ hidden }) => (
  <NavbarMenu style={{ transform: `translateX(${hidden ? '-100%' : '0'})` }}>
    <NavbarMenuItem url="gift">Цветы</NavbarMenuItem>
    <NavbarMenuItem items={[{ name: 'Рафаэлло', url: 'raffaello' }]}>Сладости</NavbarMenuItem>
    <NavbarMenuItem url="sweets">Сладости</NavbarMenuItem>
    <NavbarMenuItem url="balls">Воздушные шарики</NavbarMenuItem>
    <NavbarMenuItem url="accessories">Аксессуары</NavbarMenuItem>
    <NavbarMenuItem url="services">Услуги</NavbarMenuItem>
    <NavbarMenuItem url="fruits-baskets">Фруктовые корзины</NavbarMenuItem>
    <NavbarMenuItem url="houseplants">Комнатные растения</NavbarMenuItem>
  </NavbarMenu>
)

export default NavbarPanel
