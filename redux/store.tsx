import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  AnyAction,
} from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk"

const rootReducer = combineReducers(null)
export const store = createStore(
  rootReducer,
  composeEnhencers(applyMiddleware(thunk))
)

