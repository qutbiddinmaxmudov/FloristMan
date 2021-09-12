import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../../components/Button'
import Intro from '../../components/Intro'
import {
  Form,
  Title,
  Subtitle,
  StyledLink,
  Input,
  PasswordInput,
  ShowPassword,
  buttonStyles,
} from '../../styles/authStyledComponents'
import invisibleIcon from '../../images/icons/invisible.svg'
import visibleIcon from '../../images/icons/visible.svg'
function Login() {
  const [visible, setVisible] = useState(false)

  const changeVisible = () => setVisible(!visible)
  return (
    <Intro fullscreen pt="200px">
      <Form>
        <Title>Авторизация</Title>
        <Subtitle>
          Ещё нет аккаунта?
          <Link href="/auth/registration" passHref>
            <StyledLink>Зарегистрируйтесь</StyledLink>
          </Link>
        </Subtitle>
        <Input placeholder="Телефон" />
        <PasswordInput>
          <Input style={{ marginBottom: 0 }} type={visible ? 'text' : 'password'} placeholder="Пароль" />
          <ShowPassword type="button" onClick={changeVisible}>
            <Image src={visible ? visibleIcon : invisibleIcon} alt="Eye button" />
          </ShowPassword>
        </PasswordInput>
        <Button style={buttonStyles}>Войти</Button>
      </Form>
    </Intro>
  )
}

export default Login
