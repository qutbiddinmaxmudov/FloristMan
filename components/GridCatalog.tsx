import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import PatternBlock from './PatternBlock'
import Link from 'next/link'
import Image from 'next/image'

import bouquets from '../images/Букеты.jpg'
import forWho from '../images/Для кого.jpg'
import roomFlowers from '../images/Комнатные растения.png'
import presents from '../images/Подарки.png'
import collections from '../images/Праздничная коллекция.png'
import roses from '../images/Розы.jpg'
import sweets from '../images/Сладости.png'

const CatalogWrapper = styled.section`
  position: relative;
  margin-bottom: 50px;
`

const Title = styled.h2`
  margin-bottom: 40px;
`

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 110px);
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 24px 20px;
`

const Item = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.black};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-row: span 3;
`

const ItemBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`

const GridCatalog = () => (
  <CatalogWrapper>
    <Container>
      <Title>Каталог</Title>
      <Grid>
        <Link href="/catalog" passHref>
          <Item>
            <ItemBackground>
              <Image layout="fill" objectFit="cover" src={forWho} alt="Букет из белых и красных роз" />
            </ItemBackground>
            <PatternBlock size={39} side="top" style={{ height: 95 }}>
              Для кого
            </PatternBlock>
          </Item>
        </Link>
        <Link href="/catalog" passHref>
          <Item style={{ gridRow: 'span 2' }}>
            <ItemBackground>
              <Image layout="fill" objectFit="cover" src={presents} alt="Композиция в коробке из ромашек и клубники" />
            </ItemBackground>
            <PatternBlock size={57} side="left" style={{ height: '100%', width: 170, marginLeft: 'auto' }}>
              Подарки
            </PatternBlock>
          </Item>
        </Link>
        <Link href="/catalog" passHref>
          <Item>
            <ItemBackground>
              <Image layout="fill" objectFit="cover" src={collections} alt="Букет из белых и красных тюльпанов" />
            </ItemBackground>
            <PatternBlock size={39} side="top" style={{ height: 95 }}>
              Праздничная коллекция
            </PatternBlock>
          </Item>
        </Link>
        <Link href="/catalog" passHref>
          <Item style={{ gridRow: 'span 2' }}>
            <ItemBackground>
              <Image layout="fill" objectFit="cover" src={bouquets} alt="Букет из филетовых цветов обернутый в крафт" />
            </ItemBackground>
            <PatternBlock size={57} side="right" style={{ height: '100%', width: 170, marginRight: 'auto' }}>
              Букеты
            </PatternBlock>
          </Item>
        </Link>
        <Link href="/catalog" passHref>
          <Item>
            <ItemBackground>
              <Image layout="fill" objectFit="cover" src={sweets} alt="Каробка с шоколадом" />
            </ItemBackground>
            <PatternBlock size={39} side="top" style={{ height: 95 }}>
              Сладости
            </PatternBlock>
          </Item>
        </Link>
        <Link href="/catalog" passHref>
          <Item>
            <ItemBackground>
              <Image layout="fill" objectFit="cover" src={roomFlowers} alt="Фиолетовый цветок в горшке" />
            </ItemBackground>
            <PatternBlock size={39} side="top" style={{ height: 95 }}>
              Комнатные растения
            </PatternBlock>
          </Item>
        </Link>
        <Link href="/catalog" passHref>
          <Item style={{ gridRow: 'span 2' }}>
            <ItemBackground>
              <Image layout="fill" objectFit="cover" src={roses} alt="Букет из красных роз" />
            </ItemBackground>
            <PatternBlock size={57} side="left" style={{ height: '100%', width: 170, marginLeft: 'auto' }}>
              Розы
            </PatternBlock>
          </Item>
        </Link>
      </Grid>
    </Container>
  </CatalogWrapper>
)

export default GridCatalog
