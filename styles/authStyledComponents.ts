import { CSSProperties } from 'react'
import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 330px;
  padding: 34px 10px;
  background: ${(props) => props.theme.color.wheat};
  border-radius: 10px;
  margin: auto;
`
export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 18px;
  text-align: center;
`
export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.lato};
  color: #000;
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
`
export const StyledLink = styled.a`
  color: #fd4f79;
  margin-left: 10px;
`

export const Input = styled.input`
  width: 100%;
  padding: 14px 19px;
  font-family: ${(p) => p.theme.lato};
  font-size: 15px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  border-radius: 17px;
  background: ${(p) => p.theme.color.white};

  &::placeholder {
    font-family: ${(p) => p.theme.lato};
    color: rgba(0, 0, 0, 0.54);
  }

  ${(p) => `
    &.error {
      box-shadow: 0 0 5px ${p.theme.color.red} inset;
      color: ${p.theme.color.red};
    }
  `}
`
export const PasswordInput = styled.div`
  display: flex;
  border-radius: 17px;
  background: ${(p) => p.theme.color.white};
  align-items: center;
  padding-right: 15px;
  ${(p) => `
    &.error {
      box-shadow: 0 0 5px ${p.theme.color.red} inset;
      color: ${p.theme.color.red};
    }
  `}
`
export const ShowPassword = styled.button`
  border: none;
  outline: none;
  background: transparent;
  width: 25px;
  height: 25px;
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const buttonStyles: CSSProperties = {
  maxWidth: 200,
  fontFamily: 'Lato, sans-serif',
  fontWeight: 600,
  textAlign: 'center',
  fontSize: 16,
  margin: 'auto',
  display: 'block',
  padding: '10px 25px',
  marginTop: 20,
}
