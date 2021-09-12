import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
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
import { registerSchema } from '../../utils/schemas/authValidateSchemas'

const Registration = () => {
  const [visible, setVisible] = useState(false)

  const { formState, handleSubmit, register } = useForm({
    mode: 'onChange',
    shouldFocusError: false,
    resolver: yupResolver(registerSchema),
  })

  const consoleSubmit = () => formState
  const consoleError = () => formState

  const changeVisible = () => setVisible(!visible)

  return (
    <Intro fullscreen pt="200px">
      <Form onSubmit={handleSubmit(consoleSubmit, consoleError)}>
        <Title>Регистрация</Title>
        <Subtitle>
          Есть аккаунт?
          <Link href="/auth/login" passHref>
            <StyledLink>Войдите</StyledLink>
          </Link>
        </Subtitle>
        <Input className={!!formState.errors?.phone ? 'error' : ''} {...register('phone')} placeholder="Телефон" />
        <Input className={!!formState.errors?.name ? 'error' : ''} {...register('name')} placeholder="Имя" />
        <Input className={!!formState.errors?.email ? 'error' : ''} {...register('email')} placeholder="E-mail" />
        <PasswordInput className={!!formState.errors?.password ? 'error' : ''}>
          <Input
            {...register('password')}
            type={visible ? 'text' : 'password'}
            style={{ marginBottom: 0, background: 'transparent', color: 'inherit' }}
            placeholder="Пароль"
          />
          <ShowPassword type="button" onClick={changeVisible}>
            <Image src={visible ? visibleIcon : invisibleIcon} alt="Eye button" />
          </ShowPassword>
        </PasswordInput>
        <Button type="submit" style={buttonStyles}>
          Зарегистрироваться
        </Button>
      </Form>
    </Intro>
  )
}

export default Registration
