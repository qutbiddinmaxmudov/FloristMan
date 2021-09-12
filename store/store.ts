import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

const USE_DEV_TOOLS = process.env.NODE_ENV !== 'production'

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: USE_DEV_TOOLS,
  })

  return store
}

export default createStore()
