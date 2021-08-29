import { combineReducers } from '@reduxjs/toolkit'
import modal from './ducks/modal'

export const rootReducer = combineReducers({
  modal,
})
