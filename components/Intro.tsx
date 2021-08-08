import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import introImage from '../images/fon-rozy-tsvety-removebg.png'

const Wrapper = styled.section`
  background: ${props=>props.theme.color.white} url(${introImage.src}) center / cover no-repeat;
  min-height: 750px;
  padding-top: 300px;
`

const Intro:React.FC = (props)=> {
  return (
    <Wrapper>
      <Container>
        {props.children}
      </Container>
    </Wrapper>
  )
}

export default Intro
