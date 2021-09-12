import Link from 'next/link'
import React from 'react'
import styled, { CSSProperties } from 'styled-components'

interface ButtonInterface {
  disabled?: boolean
  href?: string
  style?: CSSProperties
  clickFunc?: () => void
  type?: 'button' | 'submit'
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
  text-decoration: none;
  &:hover {
    background: #fd4f79;
  }
  &:disabled {
    background: #d7537a;
  }
`

const Button: React.FC<ButtonInterface> = ({ style, disabled, children, href, clickFunc, type }) =>
  href ? (
    <Link href={href} passHref>
      <StyledButton style={style} as="a">
        {children}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton type={type} onClick={clickFunc} style={style} {...disabled}>
      {children}
    </StyledButton>
  )

export default Button
