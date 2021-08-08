import React from 'react'
import styled from 'styled-components'

interface ButtonInterface {
  disabled?: boolean
}

const StyledButton = styled.button`
  color: white;
  padding: 22px 40px;
  background: #fb7e98;
  border-radius: 37px;
  font-weight: bold;
  font-size: 24px;
  transition: 0.5s background;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover{
    background: #FD4F79;
  }
  &:disabled{
    background: #D7537A;
  }
`

const Button: React.FC<ButtonInterface> = (props) => {
  return <StyledButton {...props.disabled}>{props.children}</StyledButton>
}

export default Button
