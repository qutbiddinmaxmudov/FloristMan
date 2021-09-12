import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import introImage from '../images/fon-rozy-tsvety-removebg.png'

interface IntroProps {
  fullscreen?: boolean
  pt?: string
}

const Wrapper = styled.section<IntroProps>`
  background: ${(props) => props.theme.color.white} url(${introImage.src}) center / cover no-repeat;
  min-height: ${(props) => (props.fullscreen ? 'calc(100vh - 75px)' : '750px')};
  padding-top: ${(props) => (props.pt ? props.pt : '300px')};
`

const Intro: React.FC<IntroProps> = ({ children, fullscreen, pt }) => (
  <Wrapper fullscreen={fullscreen} pt={pt}>
    <Container>{children}</Container>
  </Wrapper>
)

export default Intro
