import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { closeModal } from '../store/ducks/modal'
import { RootReducerInterface } from '../store/storeTypes'
import Button from './Button'

const Wrapper = styled.div`
  position: fixed;
  z-index: -1;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  opacity: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: 0.5s opacity, 1s z-index;

  &.active {
    z-index: 10;
    opacity: 1;
    transition: 0s z-index;
  }
`

const ModalBlock = styled.div`
  width: 600px;
  max-width: 100%;
  margin: auto;
  background: ${(props) => props.theme.color.wheat};
  border-radius: 0px 0px 4px 4px;
  padding: 25px 50px;
  transform-origin: top;
  transform: rotateX(-120deg);
  transition: 0.5s transform;

  &.open {
    transform: rotateX(0deg);
  }
`
const ModalText = styled.p`
  font-size: 18px;
  border-bottom: 1px black solid;
  padding-bottom: 20px;
  margin-bottom: 40px;
`
const ModalWindow = () => {
  const { open, message } = useSelector((state: RootReducerInterface) => state.modal)
  const dispatch = useDispatch()

  const handleModalClose = () => {
    dispatch(closeModal())
  }

  return (
    <Wrapper className={open ? 'active' : ''}>
      <ModalBlock className={open ? 'open' : ''}>
        <ModalText>{message}</ModalText>
        <Button
          clickFunc={handleModalClose}
          style={{ padding: '10px 20px', fontSize: 16, marginLeft: 'auto', display: 'block' }}
        >
          Понятно
        </Button>
      </ModalBlock>
    </Wrapper>
  )
}

export default ModalWindow
