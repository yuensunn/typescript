import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from 'app/rootReducer'
import { useDispatch, useSelector as _useSelector } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: { extraArgument: { jwt: '12312' } } }),
  ],
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useSelector = _useSelector
export default store
