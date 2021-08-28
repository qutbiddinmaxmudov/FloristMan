import { createReducer } from '@reduxjs/toolkit'
import { closeModal, showMessage } from './action'
import { ModalReducerInterface } from './types'

const initialState = {
  message: '',
  open: false,
} as ModalReducerInterface

export const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(closeModal, (state, action) => {
      state.open = false
    })
    .addCase(showMessage, (state, action) => {
      state.message = action.payload
      state.open = true
    })
})
