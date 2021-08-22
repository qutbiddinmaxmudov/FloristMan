import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import Intro from '../components/Intro'
import styled from 'styled-components'
import DiscountProducts from '../components/DiscountProducts'
import WhyWe from '../components/WhyWe'

const IntroSubtitle = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 7px;
  line-height: 30px;
  background: ${(props) => props.theme.color.white};
  width: max-content;
  box-shadow: 0 0 5px 5px ${(props) => props.theme.color.white};
  padding-left: 5px;
`

const IntroTitle = styled.h1`
  width: 100%;
  max-width: 700px;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 30px;
  letter-spacing: 0.02em;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0 0 5px 5px ${(props) => props.theme.color.white};
  padding-left: 5px;
`

export default function Home() {
  return (
    <>
      <Intro>
        <IntroSubtitle>Подарите ощущение праздника</IntroSubtitle>
        <IntroTitle>Собираем букеты, созданные для Вас</IntroTitle>
        <Button href="/catalog">Выбрать букет</Button>
      </Intro>
      <DiscountProducts />
      <WhyWe />
    </>
  )
}
