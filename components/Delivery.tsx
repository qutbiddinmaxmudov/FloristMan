import React from 'react'
import styled from 'styled-components'
import backgroundFlowers from '../images/delivery-background.png'
import Container from './Container'

const Wrapper = styled.section`
  padding-top: 160px;
  padding-bottom: 260px;
  background: #fff8f5 url(${backgroundFlowers.src}) center / cover no-repeat;
`

const Title = styled.h2`
  margin-bottom: 115px;
`

const DeliveryText = styled.p`
  width: 760px;
  max-width: 100%;
  margin: auto;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
`

const Delivery = () => (
  <Wrapper>
    <Container>
      <Title>Доставка</Title>
      <DeliveryText>
        Возьмём на себя все заботы по созданию, оформлению и доставке корпоративных букетов в обычные и праздничные дни
        за разумные деньги
      </DeliveryText>
    </Container>
  </Wrapper>
)

export default Delivery
