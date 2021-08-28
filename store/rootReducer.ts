import { combineReducers } from '@reduxjs/toolkit'
import { modalReducer } from './ducks/modal/reducer'

export const rootReducer = combineReducers({
  modal: modalReducer,
})
