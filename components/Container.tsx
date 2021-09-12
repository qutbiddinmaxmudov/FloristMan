import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

interface ContainerInterface {
  className?: string
}

const Container: React.FC<ContainerInterface> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
