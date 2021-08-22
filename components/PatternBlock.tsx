import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import pattern from '../images/pattern.png'

interface PatternBlockProps {
  side: 'top' | 'left' | 'right' | 'bottom'
  size?: string
}

const Wrapper = styled.div`
  position: relative;
  background: rgba(255, 248, 245, 0.85);
  border-radius: 10px 10px 0px 0px;
`

const Pattern = styled(Image)`
  position: absolute;
  pointer-events: none;
  max-width: 50%;
  max-height: 50%;
  &:nth-of-type(1) {
    top: 6px;
    left: 4px;
    transform: rotate(180deg);
  }
  &:nth-of-type(2) {
    top: 6px;
    right: 4px;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  &:nth-of-type(3) {
    bottom: 6px;
    right: 4px;
  }
  &:nth-of-type(4) {
    top: 6px;
    left: 4px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`

const PatternBlock: React.FC<PatternBlockProps> = ({ size, side }) => {
  let radius
  if (side === 'top') radius = '10px 10px 0px 0px'
  else if (side === 'left') radius = '10px 0px 0px 10px'
  else if (side === 'right') radius = '0px 10px 10px 0px'
  else radius = '0px 0px 10px 10px'
  return (
    <Wrapper style={{ borderRadius: radius }}>
      <Pattern sizes={size} src={pattern} alt="Beutiful gold pattern" />
      <Pattern sizes={size} src={pattern} alt="Beutiful gold pattern" />
      <Pattern sizes={size} src={pattern} alt="Beutiful gold pattern" />
      <Pattern sizes={size} src={pattern} alt="Beutiful gold pattern" />
    </Wrapper>
  )
}

export default PatternBlock
