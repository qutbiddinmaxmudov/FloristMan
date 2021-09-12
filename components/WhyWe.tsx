import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Container from './Container'
import img1 from '../images/about-image-1.png'
import img2 from '../images/about-image-2.png'
import img3 from '../images/about-image-3.png'

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 80px;
`

const Title = styled.h2`
  margin-bottom: 40px;
`

const Block = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 940px;
  margin-left: auto;
  margin-bottom: 15px;

  &:nth-of-type(2) {
    width: 810px;
    margin-right: auto;
    justify-content: flex-start;
    padding-bottom: 50px;
  }

  &:nth-of-type(3) {
    width: 960px;
  }
`

const StyledImage = styled(Image)`
  max-width: 100%;
`

const TextBlock1 = styled.p`
  background: #fff8f5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0px 20px 20px;
  padding: 70px 50px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #272626;
  position: absolute;
  max-width: 100%;
  width: 600px;
  bottom: 100px;
  left: 0;
`

const TextBlock2 = styled(TextBlock1)`
  width: 470px;
  bottom: 0;
  right: 0;
  left: auto;
  border-radius: 0px 20px 20px 20px;
  padding: 65px 35px;
`

const TextBlock3 = styled(TextBlock1)`
  width: 560px;
  padding: 95px 85px;
`

const WhyWe = () => (
  <Wrapper>
    <Container>
      <Title>Почему именно мы?</Title>
      <Block>
        <StyledImage src={img1} alt="Beautiful flowers" />
        <TextBlock1>
          Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант. Вы можете выбрать
          любую цветочную композицию из нашего каталога или заказать свой вариант
        </TextBlock1>
      </Block>
      <Block>
        <StyledImage src={img2} alt="Beautiful flowers" />
        <TextBlock2>
          Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант
        </TextBlock2>
      </Block>
      <Block>
        <StyledImage src={img3} alt="Beautiful flowers" />
        <TextBlock3>
          Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант
        </TextBlock3>
      </Block>
    </Container>
  </Wrapper>
)

export default WhyWe
