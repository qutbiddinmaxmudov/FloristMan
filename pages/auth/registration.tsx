import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../../components/Button'
import Intro from '../../components/Intro'
import { Form, Title, Subtitle, StyledLink, Input, PasswordInput, ShowPassword, buttonStyles } from './styledComponents'
import invisibleIcon from '../../images/icons/invisible.svg'
import visibleIcon from '../../images/icons/visible.svg'

const Registration = () => {
  const [visible, setVisible] = useState(false)

  const changeVisible = () => setVisible(!visible)

  return (
    <Intro fullscreen pt="200px">
      <Form>
        <Title>Регистрация</Title>
        <Subtitle>
          Есть аккаунт?
          <Link href="/auth/login" passHref>
            <StyledLink>Войдите</StyledLink>
          </Link>
        </Subtitle>
        <Input placeholder="Телефон" />
        <Input placeholder="Имя" />
        <Input placeholder="E-mail" />
        <PasswordInput>
          <Input type={visible ? 'text' : 'password'} placeholder="Пароль" />
          <ShowPassword type="button" onClick={changeVisible}>
            <Image src={visible ? visibleIcon : invisibleIcon} alt="Eye button" />
          </ShowPassword>
        </PasswordInput>
        <Button style={buttonStyles}>Зарегистрироваться</Button>
      </Form>
    </Intro>
  )
}

export default Registration
