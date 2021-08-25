import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Container from './Container'
import suggestImage from '../images/Suggest Image.png'

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
  align-items: center;
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
  &::placeholder {
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.54);
    font-family: ${(props) => props.theme.lato};
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
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleNameInput = (e: FormEvent<HTMLInputElement>) => {
    const isValid = e.currentTarget.value.match(/[,./*-+/\\\[\]{}=()<>?;:]/)
    if (isValid) return
    setName(e.currentTarget.value)
  }
  const handlePhoneInput = (e: FormEvent<HTMLInputElement>) => {
    const isValid = e.currentTarget.value.match(/\D/)
    if (isValid) return
    setName(e.currentTarget.value)
  }

  return (
    <Wrapper>
      <Container>
        <Title>Предложи свой букет</Title>
        <Content>
          <Form>
            <FormInput onInput={handleNameInput} placeholder="Имя" value={name} />
            <FormInput onInput={handlePhoneInput} placeholder="Телефон" value={phone} />
            <IdeaInput placeholder="Ваша идея" as="textarea" />
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
