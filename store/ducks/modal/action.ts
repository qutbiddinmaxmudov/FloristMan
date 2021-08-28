import { createAction } from '@reduxjs/toolkit'

export const closeModal = createAction('MODAL/CLOSE')
export const showMessage = createAction<string>('MODAL/SHOW_MESSAGE')
