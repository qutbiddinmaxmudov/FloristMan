import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import ProductCard from './ProductCard'
import flowersImage from '../images/Ромашки.png'

const Wrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
`

const Title = styled.h2`
  margin-bottom: 40px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 13px;
`

const productInfo = {
  hit: true,
  newProduct: true,
  bouquetOfDay: true,
  discount: 25,
  price: 7500,
  oldPrice: 10000,
  name: 'Ромашки',
  img: flowersImage,
  id: '1',
}

const DiscountProducts = () => (
  <Wrapper>
    <Container>
      <Title>Скидки</Title>
      <Cards>
        <ProductCard {...productInfo} />
      </Cards>
    </Container>
  </Wrapper>
)

export default DiscountProducts
