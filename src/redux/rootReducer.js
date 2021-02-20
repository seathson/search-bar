import { combineReducers } from 'redux'
import { effectReducer } from './effect/effectReducer'
import { themeReducer } from './theme/themeReducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
  effect: effectReducer
})