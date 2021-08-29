import { createSlice } from '@reduxjs/toolkit'

export interface ModalReducerInterface {
  message: string
  open: boolean
}

const initialState = {
  message: '',
  open: false,
} as ModalReducerInterface

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal(state) {
      state.open = false
    },
    showMessage(state, action) {
      state.message = action.payload
      state.open = true
    },
  },
})

export default modalSlice.reducer
export const { closeModal, showMessage } = modalSlice.actions
