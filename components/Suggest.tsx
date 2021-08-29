import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Button from './Button'
import Container from './Container'
import suggestImage from '../images/Suggest Image.png'
import telegramServices from '../services/telegram'
import { ApiTelegramResponse } from '../types/telegram'
import { showMessage } from '../store/ducks/modal'

const Wrapper = styled.section`
  padding-bottom: 80px;
  padding-top: 80px;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 60px;
`

const Content = styled.div`
  display: flex;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const FormInput = styled.input`
  margin-bottom: 20px;
  padding: 15px 45px;
  background: #fff8f5;
  border-radius: 45px;
  font-size: 18px;
  color: ${(props) => props.theme.color.black};
  border: none;
  outline: none;
  font-family: ${(props) => props.theme.lato};
  transition: 0.5s box-shadow;
  &::placeholder {
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.54);
    font-family: ${(props) => props.theme.lato};
  }

  &.invalid {
    box-shadow: 0 0 5px red;
  }
`
const IdeaInput = styled(FormInput)`
  height: 380px;
  resize: none;
  border: none;
  outline: none;
  border-radius: 20px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.54);
    border-radius: 10px;
  }
`
const SuggestImage = styled.div`
  margin-left: 30px;
  width: 370px;
`

const Suggest = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState({
    text: '',
    valid: false,
  })
  const [phone, setPhone] = useState({
    text: '+998',
    valid: false,
  })
  const [idea, setIdea] = useState('')
  const handleNameInput = ({ currentTarget: input }: FormEvent<HTMLInputElement>) => {
    const isValid = input.value.match(/[,./*-+/\\\[\]{}=()<>?;:]/)
    if (isValid) return
    setName({
      text: input.value,
      valid: input.value.length > 2,
    })
  }

  const handlePhoneInput = ({ currentTarget: input }: FormEvent<HTMLInputElement>) => {
    const isValid = input.value.match(/\+99\d+$/)
    if (!isValid || input.value.length > 13) return
    setPhone({
      text: input.value,
      valid: input.value.length === 13,
    })
  }

  const handleIdeaInput = ({ currentTarget: textarea }: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const isValid = textarea.value.match(/[<>]/)
    if (isValid) return
    setIdea(textarea.value)
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!phone.valid || !name.valid) {
      dispatch(showMessage('Заполните поля пожалуйта!'))
    } else {
      const data: ApiTelegramResponse = await telegramServices.sendMessage({
        name: name.text,
        phone: phone.text,
        idea,
      })
      if (data.ok) dispatch(showMessage('Ваше сообщение доставлено спасибо.'))
      else dispatch(showMessage('Что-то пошло не так. Попробуйте еще раз пожалуйста.'))
    }
  }

  return (
    <Wrapper>
      <Container>
        <Title>Предложи свой букет</Title>
        <Content>
          <Form onSubmit={handleFormSubmit}>
            <FormInput
              className={name.valid ? '' : 'invalid'}
              onInput={handleNameInput}
              placeholder="Имя"
              value={name.text}
            />
            <FormInput
              className={phone.valid ? '' : 'invalid'}
              onInput={handlePhoneInput}
              placeholder="Телефон"
              value={phone.text}
            />
            <IdeaInput onInput={handleIdeaInput} placeholder="Ваша идея" as="textarea" value={idea} />
            <Button style={{ height: 75, width: 275, marginTop: 50, marginLeft: 'auto', marginRight: 40 }}>
              Отправить
            </Button>
          </Form>
          <SuggestImage>
            <Image objectFit="cover" src={suggestImage} alt="Красивая композиция в горшке" />
          </SuggestImage>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Suggest
