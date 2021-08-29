import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Container from './Container'
import Logo from './Logo'
import PatternBlock from './PatternBlock'

import assoseries from '../images/footer/assoseries.png'
import boubles from '../images/footer/boubles.png'
import flowers from '../images/footer/flowers.png'
import fruitSweets from '../images/footer/fruit sweets.png'
import presents from '../images/footer/presents.png'
import roomFlowers from '../images/footer/room flowers.png'
import services from '../images/footer/services.png'
import sweets from '../images/footer/sweets.png'

import instagram from '../images/icons/instagram.svg'
import facebook from '../images/icons/facebook.svg'
import whatsapp from '../images/icons/whatsapp.svg'
import viber from '../images/icons/viber.svg'

import phone from '../images/icons/phone.svg'
import email from '../images/icons/email.svg'

const Wrapper = styled.footer`
  box-shadow: -2px 0 3px ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.white};
  padding-bottom: 50px;
`
const LogoBlock = styled.div`
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`
const FooterNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Card = styled.a`
  position: relative;
  flex-basis: calc(100% / 4 - 12px);
  color: ${(props) => props.theme.color.black};
  height: 360px;
  overflow: hidden;
  margin-bottom: 24px;
`

const FooterTitle = styled.h3`
  margin-bottom: 36px;
  text-align: center;
`
const FooterInfo = styled.a`
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
const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
`

const FooterLastWord = styled.p`
  font-size: 24px;
  text-align: center;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <LogoBlock>
          <Logo />
        </LogoBlock>
        <FooterNavigation>
          <Link href="/catalog" passHref>
            <Card>
              <Image objectFit="cover" src={flowers} alt="Красивый букет из красных роз" layout="fill" />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Цветы
              </PatternBlock>
            </Card>
          </Link>
          <Link href="/catalog" passHref>
            <Card>
              <Image objectFit="cover" src={boubles} alt="Молочные шары на стене" layout="fill" />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Воздушные шары
              </PatternBlock>
            </Card>
          </Link>
          <Link href="/catalog" passHref>
            <Card>
              <Image objectFit="cover" src={assoseries} alt="Стол в котором стоят подставки и сладости" layout="fill" />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Аксессуары
              </PatternBlock>
            </Card>
          </Link>
          <Link href="/catalog" passHref>
            <Card>
              <Image objectFit="cover" src={fruitSweets} alt="Букет из фруктов" layout="fill" />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Фруктовые сладости
              </PatternBlock>
            </Card>
          </Link>
          <Link href="/catalog" passHref>
            <Card>
              <Image objectFit="cover" src={sweets} alt="Пирожки с кремом и фруктами" layout="fill" />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Сладости
              </PatternBlock>
            </Card>
          </Link>
          <Link href="/catalog" passHref>
            <Card>
              <Image
                objectFit="cover"
                src={presents}
                alt="Композиция в коробке из розовых роз и шоколадок киндер"
                layout="fill"
              />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Подарки
              </PatternBlock>
            </Card>
          </Link>
          <Link href="/catalog" passHref>
            <Card>
              <Image objectFit="cover" src={services} alt="Красивый букет обёрнутый в крафт" layout="fill" />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Услуги
              </PatternBlock>
            </Card>
          </Link>
          <Link href="/catalog" passHref>
            <Card>
              <Image objectFit="cover" src={roomFlowers} alt="Красивый зелёный цветок в горшке" layout="fill" />
              <PatternBlock style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 95 }} size={39}>
                Комнатные растения
              </PatternBlock>
            </Card>
          </Link>
        </FooterNavigation>
        <FooterTitle>Контакты:</FooterTitle>
        <Link href="tel:+998946715741" passHref>
          <FooterInfo>
            <Image src={phone} alt="phone icon" />
            +998(94)671-57-41
          </FooterInfo>
        </Link>
        <Link href="mailto:qutbiddinmaxmudov@mail.ru" passHref>
          <FooterInfo>
            <Image src={email} alt="email icon" />
            qutbiddinmaxmudov@mail.ru
          </FooterInfo>
        </Link>
        <FooterSocial>
          <a href="https://www.instagram.com/max__mudov/" rel="noreferrer" target="_blank">
            <Image src={instagram} alt="instagram logo" />
          </a>
          <a href="https://www.facebook.com/qutbiddin.maxmudov" target="_blank" rel="noreferrer">
            <Image src={facebook} alt="facebook logo" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            <Image src={whatsapp} alt="whatsapp logo" />
          </a>
          <a href="https://www.viber.com/ru/" target="_blank" rel="noreferrer">
            <Image src={viber} alt="viber logo" />
          </a>
        </FooterSocial>
        <FooterLastWord>©2021. Все права защищены</FooterLastWord>
      </Container>
    </Wrapper>
  )
}

export default Footer
