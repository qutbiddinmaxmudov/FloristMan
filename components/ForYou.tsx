import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import doublePattern from '../images/double pattern.png'
import flowersImage from '../images/Ромашки.png'
import ProductCard from './ProductCard'
import Link from 'next/link'
const Wrapper = styled.section`
  margin-bottom: 80px;
  position: relative;
`

const ImageWrapper = styled.div`
  margin-right: 5px;
  pointer-events: none;
  height: 44px;
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 13px;
`

const MoveToCatalog = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #8e8d6f;
  display: block;
  margin: auto;
  width: max-content;
  margin-top: 25px;
  text-decoration: none;
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

const ForYou = () => (
  <Wrapper>
    <Container>
      <Title>
        <ImageWrapper>
          <Image height="44px" width="44px" src={doublePattern} alt="Красивый узор" />
        </ImageWrapper>
        Для Вас
      </Title>
      <Cards>
        <ProductCard {...productInfo} />
      </Cards>
      <Link href="/catalog" passHref>
        <MoveToCatalog>Перейти к каталогу</MoveToCatalog>
      </Link>
    </Container>
  </Wrapper>
)

export default ForYou
