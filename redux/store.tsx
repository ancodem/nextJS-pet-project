import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainSlice from 'redux/reducers/mainReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  main: mainSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
